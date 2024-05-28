# docker-dev-setup
Development setup using docker container
<br>
This repository contains a Docker Compose configuration for setting up multiple services, including Nginx, Apache, PHP, Node.js, React.js, PostgreSQL, and MariaDB.

## Services Overview
- **Nginx**: A high-performance web server and reverse proxy server.
- **Apache**: A widely-used web server.
- **PHP**: A server-side scripting language for web development.
- **Node.js**: A JavaScript runtime for building scalable network applications.
- **React.js**: A JavaScript library for building user interfaces.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **MariaDB**: A popular open-source relational database management system.

## Usage
### Prerequisites
- Docker and Docker Compose must be installed on your system.

### Build and Run
1. Clone this repository
2. Build and start container:
   ```sh
   docker-compose up --build
   ```

## Configuration
### Ports
- Nginx:
  - HTTP: `8080:80`
  - HTTPS: `8443:443`
- Apache (httpd):
  - HTTP: `8081:80`
  - HTTPS: `8444:443`
- PHP:
  - PHP-FPM: `9000:9000`
  - Dev Server: `9090:9090`
- Node.js:
  - Default: `3000:3000`
- React.js:
  - Dev Server: `5000:5000`
  - HTTP: `5080:80`
- PostgreSQL:
  - Default: `5433:5432`
- MariaDB:
  - Default: `3307:3306`

### Environment
- PostgreSQL:
  - USER: `postgres`
  - PASSWORD: `123456`
- MariaDB:
  - USER: `root`
  - PASSWORD: `123456`
 
### Volumes
- Nginx:
  - Configuration: `./servers/nginx/config`
  - HTML Content: `./servers/nginx/html`
- Apache (httpd):
  - Configuration: `./servers/apache/config`
  - HTML Content: `./servers/apache/html`
- PHP:
  - Configuration: `./backend/php/config`
  - App: `./backend/php/www`
- Node.js:
  - App: `./backend/nodejs`
- React.js:
  - App: `./frontend/reactjs`
