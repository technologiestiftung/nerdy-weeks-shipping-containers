FROM node:14-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY ./ ./
EXPOSE 5000
CMD ["node","index.js"]