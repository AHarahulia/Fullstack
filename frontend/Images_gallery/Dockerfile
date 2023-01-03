FROM node:16.16-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . ./
CMD ["npm", "start"]