FROM node:16

WORKDIR /application

COPY /package.json ./

RUN npm install

COPY . .

ENV PORT 8004

CMD ["npm", "start"]