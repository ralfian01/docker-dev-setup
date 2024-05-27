FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Update container
RUN apk update

RUN apk add sudo

COPY app/package.json app/package-lock.json ./

# Update node_modules
RUN npm install

COPY app/ .

CMD ["npm", "run", "dev"]