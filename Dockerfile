FROM node:22.12.0

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
