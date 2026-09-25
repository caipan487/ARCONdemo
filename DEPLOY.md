# Деплой ARCONdemo на Timeweb VPS (Docker + Caddy)

Витрина `arcondemo.tesmika.ru` разворачивается на **том же VPS**, что и `timetracker.tesmika.ru`,
и работает за **уже запущенным Caddy** (общий reverse-proxy с авто-HTTPS). Своего Caddy контейнер
ARCONdemo не поднимает — он подключается к общей Docker-сети `edge`, а Caddy получает новый
site-блок для субдомена.

Приложение статическое (демо-витрина), базы данных и переменных окружения не требует:
адрес сайта уже зашит в код по умолчанию (`https://arcondemo.tesmika.ru`).

---

## 1. DNS (панель домена tesmika.ru)

Добавьте запись, указывающую субдомен на тот же VPS, что и timetracker:

```
Тип: A     Имя: arcondemo     Значение: <IP вашего Timeweb VPS>
```

(или `AAAA`, если используете IPv6). Дождитесь распространения (обычно минуты).

## 2. Общая сеть Caddy (один раз на сервере)

Если сети `edge` ещё нет и существующий Caddy к ней не подключён:

```bash
docker network create edge
docker network connect edge <имя-или-id caddy-контейнера timetracker>
```

> Проверить имя Caddy: `docker ps --format '{{.Names}}' | grep -i caddy`

## 3. Код на сервер

```bash
git clone https://github.com/caipan487/ARCONdemo.git
cd ARCONdemo
```

(обновление позже: `git pull`)

## 4. Caddy: добавить субдомен

Скопируйте блок из [`deploy/Caddyfile.arcondemo`](deploy/Caddyfile.arcondemo) в **существующий**
Caddyfile вашего Caddy (там же, где блок timetracker) и перезагрузите Caddy:

```bash
docker exec <caddy-контейнер> caddy reload --config /etc/caddy/Caddyfile
```

## 5. Запуск контейнера ARCONdemo

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Проверка:

```bash
docker compose -f docker-compose.prod.yml logs -f app     # ждём "Ready"
curl -I https://arcondemo.tesmika.ru                       # 200 OK
```

---

## Обновление сайта

```bash
git pull
docker compose -f docker-compose.prod.yml up -d --build
```

## Альтернатива без общей сети

Если не хотите трогать сеть работающего Caddy — можно вместо шага 2 добавить сервис `app`
из этого compose прямо в `docker-compose.prod.yml` timetracker (как ещё один сервис) и
проксировать по имени сервиса. Но вариант с общей сетью `edge` не затрагивает стек timetracker.
