FROM node:latest as node
WORKDIR /app

RUN npm install --production
RUN npm run build:api

FROM nginx:alpine
COPY --from=node /app/dist/apps/ddshop /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

EXPOSE 4001