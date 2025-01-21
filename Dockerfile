FROM node:22.12.0

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install --legacy-peer-deps

COPY . .

RUN npm rebuild bcrypt --build-from-source

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
