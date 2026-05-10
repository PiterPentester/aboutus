IMAGE_NAME ?= aboutus
REGISTRY ?= ghcr.io/piterpentester
TAG ?= latest

.PHONY: all build docker-build docker-run docker-push deploy clean

all: build

build:
	npm run build

docker-build:
	docker buildx build --platform linux/arm64 -t $(REGISTRY)/$(IMAGE_NAME):$(TAG) . --load

docker-run:
	docker run -d --name $(IMAGE_NAME) -p 8080:80 $(REGISTRY)/$(IMAGE_NAME):$(TAG)

DOCKER_HOST ?= $(shell docker context inspect --format '{{.Endpoints.docker.Host}}')

docker-scan:
	DOCKER_HOST=$(DOCKER_HOST) grype docker:$(REGISTRY)/$(IMAGE_NAME):$(TAG) --platform linux/arm64

docker-push:
	docker buildx build --platform linux/arm64 -t $(REGISTRY)/$(IMAGE_NAME):$(TAG) . --push

deploy:
	kubectl apply -f k8s/

clean:
	rm -rf dist
