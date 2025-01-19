FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn

RUN yarn install

COPY . .

EXPOSE 3000
EXPOSE 4200


CMD ["yarn", "start"]