From nginx:latest

WORKDIR /usr/share/nginx/html

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist ./

EXPOSE 80
