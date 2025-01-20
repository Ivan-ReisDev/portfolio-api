FROM node:22.12.0

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install --legacy-peer-deps

RUN npx prisma migrate dev --name init

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
