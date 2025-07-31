# Переменные
COMPOSE=docker-compose
PROJECT_NAME=fullstack-app

# Сборка всех сервисов (frontend + backend)
build:
	$(COMPOSE) build

# Запуск проекта
up:
	$(COMPOSE) up -d

# Перезапуск (с пересборкой)
rebuild:
	$(COMPOSE) up -d --build

# Остановка и удаление всех контейнеров
down:
	$(COMPOSE) down

# Просмотр логов
logs:
	$(COMPOSE) logs -f

# Зайти в backend-контейнер
sh-back:
	docker exec -it $$(docker ps -qf "name=${PROJECT_NAME}_backend") sh

# Зайти в frontend-контейнер
sh-front:
	docker exec -it $$(docker ps -qf "name=${PROJECT_NAME}_frontend") sh

# Очистка кэшей и dangling images (необязательно)
prune:
	docker system prune -f
