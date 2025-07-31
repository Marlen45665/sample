# Переменные
IMAGE_NAME=backend-app
CONTAINER_NAME=backend-app
PORT=3001

# Сборка Docker-образа
build:
	docker build -t $(IMAGE_NAME) .

# Запуск контейнера
run:
	docker run -d -p $(PORT):$(PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Перезапуск (с пересборкой)
rebuild: stop build run

# Остановка и удаление контейнера
stop:
	-@docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-@docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Логи
logs:
	docker logs -f $(CONTAINER_NAME)

# Зайти внутрь контейнера
sh:
	docker exec -it $(CONTAINER_NAME) sh

# Очистка мусора
prune:
	docker system prune -f
