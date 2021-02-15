FROM alpine:3.12

RUN apk -U upgrade && \
	apk add --no-cache openrc \
	tar \
	wget \
	bash vim && \
	apk add telegraf --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted --no-cache && \
	apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main libc6-compat && \
	mkdir -p /usr/share/ && \
	mkdir /etc/telegraf/

COPY srcs/grafana /usr/share/grafana
COPY srcs/grafana.db /usr/share/grafana/data/grafana.db
COPY srcs/telegraf.conf /etc/telegraf/telegraf.conf

EXPOSE 3000

ENTRYPOINT  (telegraf --config /etc/telegraf/telegraf.conf &) && /usr/share/grafana/bin/grafana-server --homepath=/usr/share/grafana
