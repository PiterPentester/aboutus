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
	docker run -d --name $(IMAGE_NAME) -p 80:80 $(REGISTRY)/$(IMAGE_NAME):$(TAG)

docker-push:
	docker buildx build --platform linux/arm64 -t $(REGISTRY)/$(IMAGE_NAME):$(TAG) . --push

deploy:
	kubectl apply -f k8s/

clean:
	rm -rf dist
