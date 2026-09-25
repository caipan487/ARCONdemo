# Деплой ARCONdemo на тот же VPS, что tesmika.ru и timetracker

Сервер (`201.24.56.22`) работает по схеме из runbook timetracker:
**Nginx** (веб-сервер + reverse-proxy) + **pm2** (Node-процессы) + **certbot** (HTTPS).
Не Docker. ARCONdemo разворачивается тем же способом, что timetracker, только на своём порту.

- timetracker → pm2-процесс на `127.0.0.1:3000`, Nginx проксирует `timetracker.tesmika.ru`.
- tesmika.ru → статика, Nginx отдаёт из `~/site/tesmika-site`.
- **arcondemo → pm2-процесс на `127.0.0.1:3001`, Nginx проксирует `arcondemo.tesmika.ru`.**

Приложение статическое (демо-витрина), базы данных и секретов не требует.

---

## 1. DNS (панель reg.ru, где домен tesmika.ru)

Добавить запись — на тот же IP, что и timetracker:

```
Тип: A   Имя (поддомен): arcondemo   Значение: 201.24.56.22
```

`MX / SPF / DKIM` не трогать. Дождаться распространения (минуты).

## 2. Код и запуск процесса (на сервере, под пользователем `ttp`)

Репозиторий публичный — клонируется по HTTPS, ключ не нужен:

```bash
cd ~
git clone https://github.com/caipan487/ARCONdemo.git arcondemo
cd arcondemo
npm ci
npm run build
PORT=3001 pm2 start "npm run start" --name arcondemo --time
pm2 save
```

Проверка, что процесс поднялся на 3001:

```bash
pm2 status
curl -I http://127.0.0.1:3001        # ожидаем ответ от Next (307/200)
```

## 3. Nginx: отдать субдомен (нужны права root/sudo)

Создать `/etc/nginx/sites-available/arcondemo`:

```nginx
server {
  listen 80; server_name arcondemo.tesmika.ru;
  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Включить и перезагрузить Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/arcondemo /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 4. HTTPS (certbot)

После того как DNS уже указывает на сервер:

```bash
sudo certbot --nginx -d arcondemo.tesmika.ru
```

Certbot сам добавит 443-редирект и автопродление.

## 5. Проверка

Открыть `https://arcondemo.tesmika.ru` — витрина ARCONdemo (RU/EN), зелёный замок.

---

## Обновление сайта в будущем

```bash
cd ~/arcondemo && git pull && npm ci && npm run build && pm2 reload arcondemo
```

## Заодно: обновить лендинг tesmika.ru (карточка ARCONdemo уже в репозитории)

Правка лендинга с карточкой «Примеры работ» запушена в `Tesmika_Lending`, но на сервере
станет видна после подтягивания статики:

```bash
cd ~/site && git pull        # каталог, откуда Nginx отдаёт tesmika.ru
```
