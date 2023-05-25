
# Docker-CR(Container Registry)


`Docker-CR` is an project that provides user to host a private docker container registry with a web-user-interfaced management tool.

Deploy your private container registry with a web ui that provides a complete web management tools at ease!

## Features

 - Private Docker Registry
 - Web UI for Image Inspection
 - AWS S3 Support for Image Layers (TBU)
 
 

## Overview

As shown in the diagram below, the system consists of three microservices; a React-based web service, Rest API backend service and the registry service.

![overview](https://github.com/dropyourcoffee/docker-cr/assets/32614390/bef97291-c1c4-46c1-87dd-ad5059bd5e23)

The `web server` is the implementation of web UI, and the `api server` takes the role of a bridge between the web and the registry REST API.
Uploaded image layers can be stored at different storage systems including local file system, or cloud storage such as AWS S3.



## Quick Start


1. Install `docker-compose`
    ```bash
    sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```

2. Run command.

    ```bash
    cd manifest && docker-compose up
    ```

3. Images can be pushed on your localhost by
   ```bash
   docker push localhost:5000/{image}
   ```


## Environment Variables for Configuration

### API SERVER

|                   |                                                    | Default               |
|-------------------|----------------------------------------------------|-----------------------|
| REGISTRY_ENDPOINT | URL for registry endpoint.                         | http://localhost:5000 |
| REGISTRY_USERNAME | Username for registry for BA(Basic Authentication) |                       |
| REGISTRY_PASSWD   | Password for registry                              |                       |
