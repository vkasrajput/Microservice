# Assignment - Dockerized and Scalable Application

## Overview

This project demonstrates a dockerized application consisting of a Receiver Service and a Listener Service, utilizing MongoDB for data persistence and Redis for a Pub/Sub architecture. The setup is managed using Docker Compose, allowing for easy deployment and the ability to scale to multiple instances (pods) on a single machine.

## Technologies Used

* **Docker:** For containerizing the application services.
* **Docker Compose:** For defining and managing multi-container Docker applications.
* **MongoDB:** The chosen database for data storage.
* **Redis:** Used for the Publish/Subscribe (Pub/Sub) mechanism.
* **Node.js (Likely):** Based on the Dockerfiles, the services are likely built with Node.js.

## Project Structure
 
 Okay, here's a basic README.md file you can adapt for your project. Remember to replace the placeholder text with details specific to your application and Git repository.

Markdown

# Assignment - Dockerized and Scalable Application

## Overview

This project demonstrates a dockerized application consisting of a Receiver Service and a Listener Service, utilizing MongoDB for data persistence and Redis for a Pub/Sub architecture. The setup is managed using Docker Compose, allowing for easy deployment and the ability to scale to multiple instances (pods) on a single machine.

## Technologies Used

* **Docker:** For containerizing the application services.
* **Docker Compose:** For defining and managing multi-container Docker applications.
* **MongoDB:** The chosen database for data storage.
* **Redis:** Used for the Publish/Subscribe (Pub/Sub) mechanism.
* **Node.js (Likely):** Based on the Dockerfiles, the services are likely built with Node.js.

## Project Structure

.
├── Receiver-Service/
│   ├── Dockerfile
│   |─ ... (Your Receiver Service code)
|   |---   receiver.env
├── Listener-Service/
│   ├── Dockerfile
│   | ...  (Your Listener Service code)
|   |──    listener.env
├── docker-compose.yml
`




* **`Receiver-Service/`:** Contains the Dockerfile and source code for the Receiver Service. This service likely handles incoming requests and may publish messages to Redis and/or store data in MongoDB.

* **`Listener-Service/`:** Contains the Dockerfile and source code for the Listener Service. This service likely subscribes to messages from Redis and may process them and/or store data in MongoDB.

* **`docker-compose.yml`:** Defines the Docker services (Redis, MongoDB, Mongo Express, Receiver Service, Listener Service), their configurations, dependencies, and port mappings.

* **`receiver.env`:** Contains environment variables specific to the Receiver Service.
* **`listener.env`:** Contains environment variables specific to the Listener Service.


## Getting Started

### Prerequisites

* [Docker](https://www.docker.com/get-started) installed on your machine.
* [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Running the Application

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_GIT_REPOSITORY_LINK>
    cd <YOUR_REPOSITORY_DIRECTORY>
    ```
    *(Replace `<YOUR_GIT_REPOSITORY_LINK>` and `<YOUR_REPOSITORY_DIRECTORY>` with your actual Git repository link and directory name.)*

2.  **Start the Docker Compose setup:**
    ```bash  
    Run below command in same pulled repository
    docker-compose up -d --build -d
    ```
    This command will build the Docker images (if necessary) and start all the services in detached mode.

### Accessing the Services

* **Receiver Service:** Accessible on `http://localhost:3000` (or the port you have mapped in `docker-compose.yml`).
* **Listener Service:** Accessible internally within the Docker network. The host port mapping is `4000:3000`, so potentially accessible on `http://localhost:4000` depending on its functionality.
* **MongoDB:** Accessible internally on port `27017`. You can use the `mongo-express` service to view and manage the database.

* **Mongo Express:** Accessible on `http://localhost:8081`. You will be prompted for the basic authentication credentials (configured in `docker-compose.yml`).pass

username:root
password:root

## Note If above not credential not work try with the default passwoed
username:admin
password:pass

## Scaling the Application (Multiple Pods on a Single Host)

To demonstrate scalability to multiple pods on a single machine, you can modify the `docker-compose.yml` file to run multiple instances of the `receiver-service` and/or `listener-service` with different host port mappings.

**Example (running two instances of `receiver-service`):**

*(See the updated `docker-compose.yml` example provided in our previous discussions for how to configure this.)*

After modifying the `docker-compose.yml`, restart the services:

```bash
docker-compose down
docker-compose up -d --build