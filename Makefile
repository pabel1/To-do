
# Global Variables
DOCKER_USERNAME ?= pabel1
PROJECT_VERSION ?= latest
FRONTEND_DIR ?= .
BACKEND_DIR ?= ./backend

# Frontend Configuration
FRONTEND_IMAGE_NAME ?= todo-app-frontend
FRONTEND_CONTAINER_NAME ?= todo-app-front
FRONTEND_PORT ?= 3000

# Backend Configuration
BACKEND_IMAGE_NAME ?= todo-backend
BACKEND_CONTAINER_NAME ?= todo-back
BACKEND_PORT ?= 4000

# Colored output
GREEN := \033[0;32m
YELLOW := \033[0;33m
NC := \033[0m
# Frontend Targets
.PHONY: build-frontend
build-frontend:
	@echo "$(GREEN)Building Frontend Docker Image...$(NC)"
	docker build \
		--no-cache \
		-t $(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION) \
		-f $(FRONTEND_DIR)/Dockerfile \
		$(FRONTEND_DIR)

.PHONY: tag-frontend
tag-frontend: build-frontend
	@echo "$(GREEN)Tagging Frontend Docker Image...$(NC)"
	docker tag \
		$(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION) \
		$(DOCKER_USERNAME)/$(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION)

.PHONY: push-frontend
push-frontend: tag-frontend
	@echo "$(GREEN)Pushing Frontend Docker Image to Registry...$(NC)"
	docker push $(DOCKER_USERNAME)/$(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION)

.PHONY: run-frontend
run-frontend: tag-frontend
	@echo "$(GREEN)Running Frontend Docker Container...$(NC)"
	@docker rm -f $(FRONTEND_CONTAINER_NAME) 2>/dev/null || echo "No existing container to remove"
	docker run -d \
		--name $(FRONTEND_CONTAINER_NAME) \
		-p $(FRONTEND_PORT):3000 \
		$(DOCKER_USERNAME)/$(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION)

# run-frontend: tag-frontend
# 	@echo "$(GREEN)Running Frontend Docker Container...$(NC)"
# 	@docker rm -f $(FRONTEND_CONTAINER_NAME) 2>/dev/null || true
# 	docker run -d \
# 		--name $(FRONTEND_CONTAINER_NAME) \
# 		-p $(FRONTEND_PORT):3000 \
# 		$(DOCKER_USERNAME)/$(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION)



# Composite Targets
.PHONY: all-frontend
all-frontend: build-frontend tag-frontend push-frontend run-frontend



.PHONY: all
all: all-frontend


# Cleanup Targets
.PHONY: clean-frontend
clean-frontend:
	Write-Host "Cleaning Frontend Docker resources..." -ForegroundColor Yellow
	docker rmi $(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION) 2>$null
	docker rmi $(DOCKER_USERNAME)/$(FRONTEND_IMAGE_NAME):$(PROJECT_VERSION) 2>$null
	docker rm -f $(FRONTEND_CONTAINER_NAME) 2>$null



# Help Target for view  list  all available command 
.PHONY: help
help:
	@echo "$(GREEN)Docker Project Makefile$(NC)"
	@echo "Available targets:"
	@echo "  build-frontend   : Build frontend Docker image"
	@echo "  tag-frontend     : Tag frontend Docker image"
	@echo "  push-frontend    : Push frontend image to registry"
	@echo "  run-frontend     : Run frontend Docker container"
	@echo "  all-frontend     : Build, tag, push, and run frontend"
	@echo "  build-backend    : Build backend Docker image"
	@echo "  tag-backend      : Tag backend Docker image"
	@echo "  push-backend     : Push backend image to registry"
	@echo "  run-backend      : Run backend Docker container"
	@echo "  all-backend      : Build, tag, push, and run backend"
	@echo "  all              : Build, tag, push, and run all services"
	@echo "  clean            : Remove all Docker images and containers"
	@echo "  help             : Show this help message"