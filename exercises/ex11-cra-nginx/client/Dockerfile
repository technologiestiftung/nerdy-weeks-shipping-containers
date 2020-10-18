FROM node:14-alpine as builder

WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build
# multistage build
FROM nginx:1.19.3
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html