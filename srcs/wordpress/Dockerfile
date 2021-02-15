FROM alpine:3.12

COPY ./srcs/wordpress_setup.sh /wordpress_setup.sh
COPY ./srcs/is_alive.sh /is_alive.sh
COPY ./srcs/wordpress_create_users.sh /wordpress_create_users.sh

RUN apk -U upgrade && \
	apk add --no-cache openrc \
	bash \
	nginx \
	openssl \
	tar \
	wget \
	curl \
	php7 php7-fpm php7-opcache php7-gd php7-mysqli php7-zlib php7-curl php7-mbstring php7-json php7-session \
	php-phar && \
	apk add telegraf --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted --no-cache  && \
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
	chmod +x wp-cli.phar && \
	mv wp-cli.phar /usr/local/bin/wp && \
	adduser -D -g www www && \
	mkdir /www && \
	chown -R www:www /var/lib/nginx && \
	chown -R www:www /www && \
	mkdir -p /run/nginx && \
	rm /etc/nginx/nginx.conf && \
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/selfsigned.key -out /etc/ssl/certs/selfsigned.crt -subj "/C=US/ST=a/L=a/O=a/OU=a/CN=bjacob" && \
	mkdir -p /usr/share/webapps/ && \
	cd /usr/share/webapps/ && \
	wget http://wordpress.org/latest.tar.gz && \
	tar -xzvf latest.tar.gz && \
	rm latest.tar.gz && \
	rm -f /usr/share/webapps/wordpress/wp-config-sample.php && \
	mkdir /etc/telegraf/ && \
	chmod +x /wordpress_setup.sh /is_alive.sh /wordpress_create_users.sh

COPY ./srcs/default /etc/nginx/conf.d/default.conf
COPY ./srcs/default /etc/nginx/nginx.conf

COPY ./srcs/wp-config.php /usr/share/webapps/wordpress/wp-config.php

COPY srcs/telegraf.conf /etc/telegraf/telegraf.conf

EXPOSE 5050

CMD bash wordpress_setup.sh