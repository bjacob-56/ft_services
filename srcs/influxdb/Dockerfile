FROM alpine:3.12

RUN apk -U upgrade && \
	apk add --no-cache \
	influxdb \
	bash \
	vim && \
	apk add telegraf --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted --no-cache && \
	mkdir /etc/telegraf/

COPY srcs/telegraf.conf /etc/telegraf/telegraf.conf

EXPOSE 8086

ENTRYPOINT (telegraf --config /etc/telegraf/telegraf.conf &) && influxd run -config /etc/influxdb.conf
