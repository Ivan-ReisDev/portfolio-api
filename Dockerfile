FROM node:22.12.0

WORKDIR /app

# Copiar somente os arquivos de dependências primeiro
COPY package*.json ./
COPY prisma ./prisma

# Instalar dependências
RUN npm install --legacy-peer-deps

# Copiar o restante do código
COPY . .

# Rodar as migrações do Prisma
RUN npx prisma migrate deploy

# Build da aplicação
RUN npm run build

# Expor a porta 3000
EXPOSE 3000

# Rodar a aplicação
CMD ["npm", "start"]
