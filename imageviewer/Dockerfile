FROM node:16

WORKDIR /frontend

COPY /package.json ./

RUN npm install



COPY . .

ENV PORT 3000

CMD ["npm", "start"]