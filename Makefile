# Docker image va tag

stop: docker-compose stop

ps: docker ps

# down: docker-compose down 

# clean: down
# 	   docker rmi $(docker images -q)

# build: docker build -t backend:demo ./backend && \ docker build -t frontend: demo ./frontend

# run: docker run --name backendDemo -p 8888:8888 backend:demo && docker run --name frontendDemo -p 3000:3000 frontend:demo

# develop: clean build run docker-compose up -d