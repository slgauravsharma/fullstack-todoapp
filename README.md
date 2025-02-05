# TODO application

A full-stack TODO application built with **React**, **Redux**, **TypeScript**, **Tailwind CSS** (Frontend) and **Node.js**, **Express.js**, **TypeScript**, and an **In-Memory Database** (Backend).

## Features

### Frontend

- Create, Read, Update, and Delete (CRUD) operations for TODO and CATEGORY items.
- Styled using **Tailwind CSS** for a modern UI.
- State management using **Redux**.
- TypeScript for type safety.

### Backend

- Create, Read, Update, and Delete (CRUD) operations for TODO and CATEGORY items.
- Lightweight in-memory database for quick storage.
- API endpoints built with **Express.js**.

## Installation & Running the Project

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Steps to Run Frontend Locally

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. For production build:
   ```sh
   npm run build
   ```

### Steps to Run Backend Locally

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. For production build:
   ```sh
   npm run build
   ```

## Backend Folder Structure

```
backend/
├── src/
│   ├── controllers/  # Handles request logic
│   ├── middleware/   # Handles error/app logic
│   ├── models/       # Data models
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── server.ts     # Entry point
│   ├── .env          # Environment variables
│   ├── .nodemon      # App hot-reload
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
