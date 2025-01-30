# Public API for Basic Information Retrieval

This project is a simple public API developed using Node.js, Express, and TypeScript. It provides basic information including a registered email address, the current date and time in ISO 8601 format, and the GitHub URL of the project's codebase.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## API Documentation

### Endpoint

- **GET** `/api`

### Request Format

No request body is required.

### Response Format

On a successful request (200 OK), the API will return a JSON response in the following format:

```json
{
  "email": "youremail@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Example Usage

You can test the API using a tool like Postman or curl:

```sh
curl -X GET http://localhost:3000/api
```

This will return the required information in JSON format.

## Deployment

The API is deployed to a publicly accessible endpoint. Ensure that CORS is properly configured to allow requests from different origins.

## Code Structure

- `src/app.ts`: Entry point of the application.
- `src/controllers/index.ts`: Contains the logic for handling requests.
- `src/routes/index.ts`: Defines the API routes.
- `src/services/datetimeService.ts`: Provides the current date and time.
- `src/types/index.ts`: Defines the response structure.

[Node.js](https://hng.tech/hire/nodejs-developers)