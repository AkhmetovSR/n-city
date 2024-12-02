# Сборка и запуск Ract-app
FROM node:alpine as build-stage
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

# Nginx для раздачи статики
FROM nginx:alpine
RUN mkdir /etc/letsencrypt
RUN mkdir /etc/letsencrypt/live
RUN mkdir /etc/letsencrypt/live/g-coin.store #!!!!!!!!g-coin.store - поменять
EXPOSE 80
EXPOSE 443
COPY --from=build-stage /app/build /var/www/build
ENTRYPOINT ["nginx", "-g", "daemon off;"]