FROM node:22.12.0

WORKDIR /app

COPY package*.json ./  
COPY prisma ./prisma

RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
