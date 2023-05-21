FROM node:14

WORKDIR /app

COPY package*.json ./
#COPY server .
COPY tsconfig.json .

COPY router ./router
COPY *.ts .

RUN npm install

RUN npm install -g typescript
RUN tsc

EXPOSE 3000

CMD ["/usr/local/bin/node", "."]
