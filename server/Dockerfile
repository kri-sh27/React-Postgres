FROM node:16

WORKDIR /backend

COPY /package.json ./

RUN npm install
RUN apt-get update && apt-get install -y postgresql-client

COPY . .

ENV PORT 8004

ENV POSTGRES_USER=ubuntu
ENV POSTGRES_PASSWORD=root
ENV POSTGRES_HOST=54.221.148.45
ENV POSTGRES_PORT=5432
ENV POSTGRES_DB=productdata

CMD ["npm", "start"]