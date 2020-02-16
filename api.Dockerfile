
FROM node:10

RUN npm install -g nodemon
RUN npm install --production
RUN npm run build:api

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app/api && cp -a /tmp/node_modules /app/api/

WORKDIR /app/api
COPY dist/apps/api/ /app/api

EXPOSE 4001

CMD [ "nodemon", "main.js" ]