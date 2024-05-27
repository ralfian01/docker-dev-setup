FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Update container
RUN apk update

RUN apk add sudo

COPY app/index.js app/package.json .

CMD ["node", "index.js"]