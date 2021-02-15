#!/bin/bash

influxd run -config /etc/influxdb.conf &


# echo "CREATE DATABASE telegraf; \
# 	CREATE USER admin WITH PASSWORD 'password'; \
# 	GRANT ALL PRIVILEGES ON telegraf TO admin;" | influx

# echo "CREATE DATABASE wordpress;" | mysql -u root
# echo "CREATE USER 'admin'@'%' IDENTIFIED BY 'password';" | mysql -u root
# echo "GRANT ALL PRIVILEGES ON wordpress.* TO 'admin'@'%';" | mysql -u root
# echo "ALTER USER 'admin'@'%' IDENTIFIED BY 'password';" | mysql -u root
# echo "FLUSH PRIVILEGES;" | mysql -u root


telegraf --config /etc/telegraf/telegraf.conf &

tail -f /dev/null /dev/null
