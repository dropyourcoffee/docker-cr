
# Docker-CR(Container Registry)


This is an application that allows user to host a private docker container registry with web-user-interface.


## Features

 - Private Docker Registry
 - Web UI for Image Inspection
 - AWS S3 Support for Image Layers (TBU)
 
 

## Overview

This system consists of three microservices; a React-based web service, Rest API backend service and the registry service.


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
