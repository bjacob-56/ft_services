FROM alpine:3.12

COPY ./srcs/is_alive.sh /is_alive.sh

RUN apk -U upgrade && \
	apk add --no-cache \
	bash \
	nginx \
	wget \
	tar \
	openssl \
	php7 php7-fpm php7-opcache php7-gd php7-mysqli php7-zlib php7-curl php7-mbstring php7-json php7-session && \
	apk add telegraf --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted --no-cache  && \
	adduser -D -g www www && \
	mkdir /www && \
	chown -R www:www /var/lib/nginx && \
	chown -R www:www /www && \
	mkdir -p /run/nginx && \
	rm /etc/nginx/nginx.conf && \
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/selfsigned.key -out /etc/ssl/certs/selfsigned.crt -subj "/C=US/ST=a/L=a/O=a/OU=a/CN=bjacob" && \
	mkdir -p /var/www && \
	rm -f /etc/nginx/nginx.conf && \
	mkdir -p /usr/share/webapps/ ; \
	cd /usr/share/webapps ; \
	wget http://files.directadmin.com/services/all/phpMyAdmin/phpMyAdmin-5.0.4-all-languages.tar.gz ; \
	tar -xzvf phpMyAdmin-5.0.4-all-languages.tar.gz ; \
	rm phpMyAdmin-5.0.4-all-languages.tar.gz ; \
	mv phpMyAdmin-5.0.4-all-languages phpmyadmin ; \
	chmod -R 777 /usr/share/webapps/ ; \
	ln -s /usr/share/webapps/phpmyadmin/ /var/www/localhost/htdocs/phpmyadmin ; \
	rm -rf /usr/share/nginx/html && \
	mkdir /etc/telegraf/ && \
	chmod +x /is_alive.sh

COPY ./srcs/default /etc/nginx/conf.d/default.conf
COPY ./srcs/default /etc/nginx/nginx.conf

COPY srcs/config.inc.php /usr/share/webapps/phpmyadmin/

COPY srcs/telegraf.conf /etc/telegraf/telegraf.conf

EXPOSE	5000

CMD (telegraf --config /etc/telegraf/telegraf.conf &) && php-fpm7 && (bash is_alive.sh &) && nginx -g 'daemon off;'