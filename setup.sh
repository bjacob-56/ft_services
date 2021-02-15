function install_minikube {
	rm -rf logs
	mkdir logs
	export MINIKUBE_HOME=/Users/$USER/goinfre
	export CHANGE_MINIKUBE_NONE_USER=true
	MININSTALLED=$(minikube version | grep "commit:" | wc -l | sed s/" "//g)
	if [ "$MININSTALLED" != "1" ]; then
		brew install minikube >> logs/minikube.log
	else
		printf "\e[0;36mminikube already installed\e[0m\n"
	fi
}

function start_minikube {
	rm -f logs/minikube.log

	printf "\e[0;33mDeleting minikube...\e[0m\r"
	minikube delete >> logs/minikube.log 2>"/dev/null"
	printf "\033[K\e[0;31mminikube deleted\e[0m\n"

	printf "\e[0;33mLaunching minikube...\e[0m\r"
	minikube start --driver=virtualbox --cpus 3 --memory 4096 --addons dashboard >> logs/minikube.log
	printf "\033[K\e[0;32mminikube launched...\e[0m\n"
}

function create_wordpress_users {
	WORDPRESS_POD=$(kubectl get pods | grep wordpress | sed -e "s/ .*$//g")
	>>logs/wordpress kubectl exec -it pod/$WORDPRESS_POD -- bash -c "bash wordpress_create_users.sh"
}

function exec_all_services {
exec_service influxdb

ft_sleep 5

exec_service mysql

ft_sleep 5

exec_service ftps
exec_service wordpress
exec_service phpmyadmin
exec_service nginx
exec_service grafana

create_wordpress_users

ft_sleep 20
}

function exec_service {
	start=$(date +"%s")
	rm -f logs/"$1.log"
	printf "\e[0;33mBuilding $1...\e[0m\r"

	docker build -t $1 srcs/$1 > logs/"$1.log"
	kubectl apply -f srcs/$1/srcs/$1.yaml >> logs/"$1.log"

	end=$(date +"%s")
	time=$((end - start))
	printf "\033[K\e[1;32m$1 built in ${time}s\e[0m\n"
}

function update_minikube_ip {
	export MINIKUBE_IP_ADDRESS=$(minikube ip)

	eval $(minikube docker-env)

	IP_RANGE=$(echo $MINIKUBE_IP_ADDRESS - $MINIKUBE_IP_ADDRESS| tr -d ' ')
	sed -e "s/IP_ADDRESS_RANGE/$IP_RANGE/g" srcs/metallb/srcs/metallb_template.yaml > srcs/metallb/srcs/metallb.yaml
	sed -e "s/MINIKUBE_IP/$MINIKUBE_IP_ADDRESS/g" srcs/wordpress/srcs/wordpress_setup_template.sh > srcs/wordpress/srcs/wordpress_setup.sh
	sed -e "s/MINIKUBE_IP/$MINIKUBE_IP_ADDRESS/g" srcs/ftps/docker_template > srcs/ftps/Dockerfile
	sed -e "s/MINIKUBE_IP/$MINIKUBE_IP_ADDRESS/g" srcs/nginx/docker_template > srcs/nginx/Dockerfile
}

function ft_metallb {
	start=$(date +"%s")
	rm -f logs/metallb.log
	printf "\e[0;33mBuilding metallb...\e[0m\r"

	kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml >> logs/metallb.log
	kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml >> logs/metallb.log
	kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)" >> logs/metallb.log
	kubectl apply -f srcs/metallb/srcs/metallb.yaml >> logs/metallb.log
	kubectl apply -f srcs/metallb/srcs/volumes.yaml >> logs/metallb.log

	end=$(date +"%s")
	time=$((end - start))
	printf "\033[K\e[1;32mmetallb built in ${time}s\e[0m\n"
}

function print_services_info {
printf "_________________________________________________\n"
printf "\nFor all services :\n\tuser : admin\n\tpassword : password\n"
printf "\nNginx :\n\thttp://$MINIKUBE_IP_ADDRESS:80\n\thttps://$MINIKUBE_IP_ADDRESS:443\n"
printf "\tcommand : 'ssh admin@$MINIKUBE_IP_ADDRESS'  password = 'password'\n"
printf "\nPhpmyadmin :\n\thttp://$MINIKUBE_IP_ADDRESS:5000\n"
printf "\nWordpress :\n\thttp://$MINIKUBE_IP_ADDRESS:5050\n"
printf "\nGrafana :\n\thttp://$MINIKUBE_IP_ADDRESS:3000\n"
printf "\nFTPS :\n\tHost : $MINIKUBE_IP_ADDRESS\n\tPort : 21\n"
printf "\n_________________________________________________\n"
ssh-keygen -R $MINIKUBE_IP_ADDRESS &>"/dev/null"
}

function ft_clean {
	export MINIKUBE_HOME=/Users/$USER/goinfre
	kubectl delete service --all
	kubectl delete pods --all
	kubectl delete deployment --all
	minikube delete
}

function ft_sleep {
	printf "\e[0;39mWaiting $1s...\e[0m\n"
	sleep $1
}

function ft_dashboard {
# Creating a Service Account
1>>logs/dashboard 2>>logs/dashboard cat <<EOF | 1>>logs/dashboard 2>>logs/dashboard kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
EOF

# Creating a ClusterRoleBinding
1>>logs/dashboard 2>>logs/dashboard cat <<EOF | 1>>logs/dashboard 2>>logs/dashboard kubectl apply -f -
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
EOF

# Getting a Bearer Token
1>>logs/dashboard 2>>logs/dashboard kubectl -n kubernetes-dashboard get secret $(1>>logs/dashboard 2>>logs/dashboard kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"

printf "\n\ndashboard link : \e[0;36mhttp://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/\e[0m\n\n"

kubectl proxy 2>>logs/proxy_error
}

function launch_ft_services {
install_minikube
start_minikube

update_minikube_ip

ft_metallb

exec_all_services

print_services_info

ft_dashboard
}

if [ $# == 0 ]; then
	launch_ft_services
elif [ $1 == "clean" ]; then
	ft_clean
elif [ $1 == "launch" ]; then
	launch_ft_services
elif [ $1 == "restart" ]; then
	ft_clean
	launch_ft_services
else
	printf "Wrong arguments\n"
fi