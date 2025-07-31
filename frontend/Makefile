# Имя образа и контейнера
IMAGE_NAME=my-fulstack
CONTAINER_NAME=my-fulstack
PORT=5432

# Сборка Docker-образа
build:
	docker build -t $(IMAGE_NAME) .

# Остановка контейнера (если запущен)
stop:
	-@docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-@docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Перезапуск после изменений
rebuild: stop build run

# Запуск контейнера
run:
	docker run -d -p $(PORT):80 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Просмотр логов
logs:
	docker logs -f $(CONTAINER_NAME)

# Зайти внутрь контейнера
sh:
	docker exec -it $(CONTAINER_NAME) sh