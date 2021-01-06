FROM node:12.2.0-alpine

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]