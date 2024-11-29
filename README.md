# use Makefile to build the project

# Frontend build o run

```bash
make all-frontend

```

# Backend build o run

```bash
make all-backend
```

# Sob service build o run

```bash
make all
```

# Cleanup

```bash
make clean
```

# Custom configuration

```bash
make DOCKER_USERNAME=myuser FRONTEND_PORT=8080 all-frontend
```

# basic todo app

## Getting Started

To get started with the project, follow these steps:

1. Clone the Git repository to your local machine using the following command:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd To-do
```

# basic todo app Frontend

# Prerequisites

## Installed Tools:

### Docker: Install Docker.

### Make: Pre-installed on most Linux and macOS systems. For Windows, install via WSL or a package manager like Chocolatey.

### Docker Hub Account: Required for pushing Docker images.

### Configured Tools:

### Docker Hub: Log in to Docker Hub before running the push-backend target.

```bash
docker login
```

# Environment Variables

Ensure the following variables are configured in the Makefile or as environment variables in your shell:

### DOCKER_USERNAME: Your Docker Hub username ().

### PROJECT_VERSION: Version tag for the Docker image (default: latest).

### Frontend_IMAGE_NAME: Docker image name for the frontend .

### Frontend_CONTAINER_NAME: Docker container name .

### Frontend_PORT: Port on which the backend container runs.
