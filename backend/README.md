# TODO Backend App

A TODO backend application built using **Node.js**, **Express.js**, **TypeScript**, and an **In-Memory Database**.

## Features

- Create, Read, Update, and Delete (CRUD) operations for TODO items and CATEGRORY items.
- Lightweight in-memory database for quick storage.
- API endpoints built with **Express.js**.

## Installation & Running the Project

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Steps to Run Locally

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. For production build:
   ```sh
   npm run build
   ```

## Folder Structure

```
backend/
├── src/
│   ├── controllers/  # Handles request logic
│   ├── middleware/  # Handles error/app logic
│   ├── models/       # Data models
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── server.ts      # Entry point
│   ├── .env           # env variables
│   ├── .nodemon      # app hotreload
├── package.json
├── tsconfig.json
├── README.md
```

## API Endpoints

| Method | Endpoint                      | Description               |
| ------ | ----------------------------- | ------------------------- |
| GET    | `/todos`                      | Fetch all TODO items      |
| POST   | `/todos`                      | Create a new TODO         |
| PUT    | `/todos/:id`                  | Update a TODO by ID       |
| DELETE | `/todos/:id`                  | Delete a TODO by ID       |
| PUT    | `/todos/:id/status`           | Update a TODO status      |
| GET    | `/todos/category/:categoryId` | Fetch TODO by CATEGORY ID |
| GET    | `/categories`                 | Fetch all CATEGORY items  |
| POST   | `/categories`                 | Create a new CATEGORY     |
| PUT    | `/categories/:id`             | Update a CATEGORY by ID   |
| DELETE | `/categories/:id`             | Delete a CATEGORY by ID   |
