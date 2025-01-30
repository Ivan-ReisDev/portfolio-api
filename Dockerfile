FROM node:22.12.0-alpine

LABEL version="0.0.1"
LABEL description="API Nebulosa (Nest.js) Docker Image"
LABEL maintainer="Ivan Reis <ivan.reis@reverbs.com>"

ENV TZ=UTC

RUN apk add --no-cache netcat-openbsd

WORKDIR /app

COPY package*.json tsconfig.json tsconfig.build.json ./

RUN npm install --force

COPY . ./

COPY .env ./

RUN npx prisma generate
RUN npm run build

# Script de entrada
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["./entrypoint.sh"]
