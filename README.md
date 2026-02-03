# Sport On - Backend

Backend API for the Sport On application.

## Prerequisites

- Node.js (v16 or higher)
- pnpm

## Getting Started

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Running the Application

Development mode:

```bash
pnpm dev
```

Production mode:

```bash
pnpm start
```

## Project Structure

```
sport-on-be/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── config/
├── .env
├── .gitignore
└── package.json
```

## API Endpoints

Documentation for API endpoints will be available at `/api-docs` when running the server.

## Technologies Used

- Node.js
- Express.js
- MongoDB/PostgreSQL (specify your database)
- JWT for authentication
