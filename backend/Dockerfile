FROM node:8-alpine
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/* \
  mkdir /usr/local/share/ca-certificates/extra
COPY certs/ca-certificate.crt /usr/local/share/ca-certificates/extra/
RUN update-ca-certificates
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD ["yarn", "start"]