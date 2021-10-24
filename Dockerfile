FROM node:14-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g npm@7

RUN npm install

COPY . .

RUN npm run build


FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g npm@7
RUN npm ci

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm", "run", "start:prod"]
