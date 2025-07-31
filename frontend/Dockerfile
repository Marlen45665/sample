# Сборка проекта
FROM node:18-alpine as build
WORKDIR /app

# Устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем остальные файлы и билдим
COPY . .
RUN npm run build

# Продакшн-образ с nginx
FROM nginx:stable-alpine

# Сборка React
COPY --from=build /app/dist /usr/share/nginx/html
# Конфиг
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]