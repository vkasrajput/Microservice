# Assignment - Dockerized and Scalable Application

## Overview

This project showcases a fully containerized application featuring a Receiver Service and a Listener Service. We've leveraged MongoDB to handle all our data needs and Redis for its efficient Publish/Subscribe messaging. The entire setup is orchestrated using Docker Compose, which makes deployment straightforward and, importantly, allows us to easily run multiple instances (which we'll refer to as pods) on a single machine to demonstrate scalability.

## Technologies We Used

* **Docker:** The backbone for packaging our application services into isolated containers.
* **Docker Compose:** Our tool of choice for defining and managing all the Docker containers that make up our application.
* **MongoDB:** Our database system, responsible for the persistent storage of application data.
* **Redis:** Used as a fast and reliable message broker, enabling communication between our services via a Publish/Subscribe pattern.
* **Node.js (Likely):** We've probably built our Receiver and Listener Services using Node.js, given the typical needs of such microservices.

## Project Layout

<img width="236" alt="image" src="https://github.com/user-attachments/assets/d22a963c-b796-447a-90a6-16083ce4ab17" />

* **`Receiver-Service/`:** This directory holds everything for the Receiver Service, including its `Dockerfile` (which tells Docker how to build the container image), the application's source code, and potentially a `receiver.env` file for environment-specific settings. This service likely takes in requests and might send out messages via Redis or save information to MongoDB.

* **`Listener-Service/`:** Similarly, this contains the `Dockerfile`, source code, and a possible `listener.env` for the Listener Service. This service is probably set up to listen for messages on a Redis channel, process them, and then interact with MongoDB.

* **`docker-compose.yml`:** This is the central configuration file that defines all the Docker services (like Redis, MongoDB, and our own Receiver and Listener Services), how they should be built or pulled, how they should talk to each other, and what ports they should expose.

## Getting Started - Let's Run It!

### What You'll Need

* Make sure you have [Docker](https://www.docker.com/get-started) installed and running on your machine.
* You'll also need [Docker Compose](https://docs.docker.com/compose/install/) installed.

### Firing Up the Application

1.  **First things first, clone the project:**
    ```bash
    git clone <YOUR_GIT_REPOSITORY_LINK>
    cd <YOUR_REPOSITORY_DIRECTORY>
    ```
   
2.  **Now, let's tell Docker Compose to build and run everything:**
    # Navigate to the cloned repository directory and run:
    
    docker-compose up --build -d

 ### Peeking at the Services

* **Receiver Service:** You can access the Receiver Service by pointing your web browser http://localhost:3000 . 

* **Listener Service:** The Listener Service is also running and you can likely reach it on `http://localhost:4000

* **MongoDB:** for database connect http://localhost:27017 on mongodb compass or use your shell


