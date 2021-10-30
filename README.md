# Halter Rewards

Docker compose uses anonymous volumes for node_modules so they are not synchronized with local node_modules. After install new dependency you need to rebuild docker image and restart container with volume cleanup.

```sh
docker-compose up --build -V
```
