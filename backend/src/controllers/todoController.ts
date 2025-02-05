import { Request, Response } from "express";
import { Todo } from "@/models/todoModel";
import { db } from "@/services/inMemoryDB";

export const createTodo = (req: Request, res: Response) => {
  const { title, description, dueDate, categoryId } = req.body;
  if (!title || !description || !dueDate) {
    res.status(400).json({
      error: "title, description and dueDate all fields are required",
    });
    return;
  }

  const newTodo: Todo = {
    id: Date.now(),
    title,
    description,
    dueDate,
    isCompleted: false,
    categoryId,
    createdDate: new Date().toISOString().split("T")[0],
  };

  const createdTodo = db.addTodo(newTodo);
  res.status(201).json(createdTodo);
};

export const getTodos = (req: Request, res: Response) => {
  const todos = db.getTodos();
  res.json(todos);
};

export const getTodosByCategory = (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.categoryId);
  const todos = db.getTodosByCategory(categoryId);
  res.json(todos);
};

export const updateTodoStatus = (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id);
  const { isCompleted } = req.body;
  const todo = db.getTodoById(todoId);

  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  todo.isCompleted = isCompleted;
  const updatedTodo = db.updateTodo(todo);
  res.json(updatedTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id);
  const { title, description, dueDate, categoryId, isCompleted } = req.body;

  const todo = db.getTodoById(todoId);
  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.dueDate = dueDate || todo.dueDate;
  todo.categoryId = categoryId || todo.categoryId;
  const updatedTodo = db.updateTodo(todo);
  res.json(updatedTodo);
};

export const deleteTodo = (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id);
  const isDeleted = db.deleteTodo(todoId);

  if (!isDeleted) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  res
    .status(200)
    .json({ success: true, message: `Todo ${todoId} deleted successfully` });
};
