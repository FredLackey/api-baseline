# API Baseline

This project is a baseline API for use in proofs-of-concept and sandbox applications. It is built with Node.js and Express.

## Features

*   Express.js server
*   JWT-based authentication for private routes
*   API token authentication for private routes
*   Environment variable based configuration
*   Docker support

## Project Structure

```
.
├── docker-compose.yml
├── Dockerfile
├── package.json
├── src
│   ├── constants.js
│   ├── middleware
│   │   ├── index.js
│   │   ├── req-to-console.js
│   │   ├── require-api-token.js
│   │   └── require-jwt.js
│   ├── routes
│   │   ├── api
│   │   │   ├── index.js
│   │   │   ├── private
│   │   │   └── public
│   │   ├── health.js
│   │   ├── index.js
│   │   └── ux
│   │       ├── index.js
│   │       ├── private
│   │       └── public
│   ├── server.js
│   └── utils
│       ├── index.js
│       └── validate-env.js
└── tests
    └── *.http
```

## Prerequisites

*   Node.js
*   npm

## Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd api-baseline
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

This project uses a `.env` file for environment variables. Create a `.env` file in the root of the project and add the necessary variables. You can use `.env.example` as a template if it exists.

## Usage

### Development

To run the server in development mode with hot-reloading, use:

```sh
npm run dev
```

### Production

To run the server in production mode, use:

```sh
npm start
```

## API Endpoints

The application exposes several endpoints, categorized as public or private.

### Public Endpoints

*   `GET /api/public/do-something-public`
*   `GET /ux/public/get-something-public`

### Private Endpoints

These endpoints require authentication.

*   `POST /api/private/do-something-private` (Requires API Token and JWT)
*   `GET /ux/private/get-something-private` (Requires JWT)

### Health Check

*   `GET /health`

## Testing

The `/tests` directory contains `.http` files that can be used with REST client extensions (like the one in VS Code) to test the endpoints.

## Contact

If you have any questions or need assistance, feel free to get in touch.

- **Name:** Fred Lackey
- **Email:** [fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)
- **Website:** [http://fredlackey.com](http://fredlackey.com)

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details. 