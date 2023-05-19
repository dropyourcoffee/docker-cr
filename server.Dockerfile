FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g ts-node


COPY server .
COPY .babelrc .

CMD ["ts-node", "index.ts"]

