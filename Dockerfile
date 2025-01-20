FROM node:22.12.0

WORKDIR /app

COPY package*.json ./  
COPY prisma ./prisma

RUN npm install --legacy-peer-deps

COPY . .

# Roda as migrações, sem precisar rodar 'npx prisma init'
RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
