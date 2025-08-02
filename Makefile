# FRONTEND
frontend-build:
	docker compose build frontend

# BACKEND
backend-build:
	docker compose build backend

# Сборка обоих
build:
	docker compose build

# Запуск
up:
	docker compose up -d

# Перезапуск
rebuild:
	docker compose down
	docker compose build
	docker compose up -d

# Остановка
down:
	docker-compose down

# Логи
logs:
	docker compose logs -f
