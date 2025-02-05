import express from "express";
import {
  createTodo,
  getTodos,
  getTodosByCategory,
  updateTodoStatus,
  updateTodo,
  deleteTodo,
} from "@/controllers/todoController";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/category/:categoryId", getTodosByCategory);
router.patch("/:id", updateTodo);
router.patch("/:id/status", updateTodoStatus);
router.delete("/:id", deleteTodo);

export default router;
