FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src
COPY public ./public
COPY .babelrc .
COPY tsconfig.json .
COPY webpack.*.js ./

RUN npm run build

#####################################

FROM nginx:latest

WORKDIR /app
COPY --from=builder /app/build /app/build

RUN rm /etc/nginx/conf.d/default.conf
COPY manifest/nginx/nginx.conf /etc/nginx/conf.d



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


