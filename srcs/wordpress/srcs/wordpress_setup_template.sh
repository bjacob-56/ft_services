#!/bin/bash
# wp core download

mkdir /run/openrc
touch /run/openrc/softlevel
openrc

wp core install \
        --url=https://MINIKUBE_IP:5050 \
        --title="wordpress" \
        --admin_user=admin \
        --admin_password=password \
        --admin_email=admin@admin.com \
		--path='/usr/share/webapps/wordpress/' \
		--skip-email

while [ $? -ne 0 ] ; do
    wp core install \
        --url=https://MINIKUBE_IP:5050 \
        --title="wordpress" \
        --admin_user=admin \
        --admin_password=password \
        --admin_email=admin@admin.com \
		--path='/usr/share/webapps/wordpress/' \
		--skip-email
done

(telegraf --config /etc/telegraf/telegraf.conf &) && php-fpm7 && (bash is_alive.sh &) && nginx -g 'daemon off;'
