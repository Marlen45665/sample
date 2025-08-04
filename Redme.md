в докере есть основные пути для nginx 

/usr/share/nginx/html — Папка для сайта по умолчанию



docker compose ps

docker compose up -d nginx

docker compose run --rm certbot

docker compose logs nginx