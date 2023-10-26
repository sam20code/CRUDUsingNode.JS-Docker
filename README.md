# CRUDUsingNode.JS-Docker
This an simple application demonstrating CRUD operations using NODE.JS EXPRESS.JS and DOCKER
---

`Steps to run application`
 - open terminal
 - `docker-compose build`
 - `docker-compose up`
 - `docker-compose stop` -> for stopping the container from running

---
**Below steps are there if you want to run only docker image for that we build image and then container mentioning the ports, here I am binding contianer port 9090 with my local port 9090
`Steps to create docker image`
 - `docker build -t singhsamarth:CRUDJS`
 - `docker run -d -p 9090:9090 singhsamarth:CRUDJS`
---
