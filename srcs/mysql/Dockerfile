FROM alpine:3.12

COPY ./srcs/mysql_setup.sh /mysql_setup.sh

RUN apk -U upgrade && \
	apk add --no-cache openrc \
	bash vim \
	mysql mysql-client && \
	rm -f /var/cache/apk/* && \
	apk add telegraf --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted --no-cache && \
	mkdir /etc/telegraf/ && \
	rm -f /etc/my.cnf.d/mariadb-server.cnf && \
	chmod +x /mysql_setup.sh

COPY srcs/telegraf.conf /etc/telegraf/telegraf.conf
 
COPY ./srcs/mariadb-server.cnf /etc/my.cnf.d/mariadb-server.cnf

ENTRYPOINT bash mysql_setup.sh

EXPOSE 3306