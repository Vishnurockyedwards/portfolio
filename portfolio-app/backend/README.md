# backend/README.md

# Portfolio Backend

This is the backend for the Portfolio application, built using Node.js and Express. It provides an API for handling contact form submissions from the frontend.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:

   ```
   cd portfolio-app/backend
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

### Running the Server

To start the server, run the following command:

```
npm start
```

The server will run on `http://localhost:5000` by default. You can change the port by setting the `PORT` environment variable.

### API Endpoints

- **POST /api/contact**: Handles contact form submissions. Expects a JSON body with the following fields:
  - `name`: The name of the person submitting the form.
  - `email`: The email address of the person submitting the form.
  - `message`: The message content.

### Example Request

```json
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to get in touch!"
}
```

### Response

On successful submission, the server will respond with:

```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### Error Handling

In case of an error, the server will respond with an appropriate error message and status code.

## License

This project is licensed under the MIT License. See the LICENSE file for details.