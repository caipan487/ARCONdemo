# Боевой образ ARCONdemo (Next.js 14) — статическая витрина без БД.
# Запуск за общим Caddy (авто-HTTPS) через docker-compose.prod.yml.
FROM node:20-slim

WORKDIR /app

# Сначала манифесты — слой зависимостей кэшируется между сборками.
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
