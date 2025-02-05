import { Request, Response, NextFunction } from "express";
import { db } from "@/services/inMemoryDB";
import { Category } from "@/models/todoModel";

export const createCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Category name is required" });
    return;
  }

  const newCategory: Category = {
    id: Date.now(),
    name,
  };

  const createdCategory = db.addCategory(newCategory);
  res.status(201).json(createdCategory);
};

export const getCategories = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categories = db.getCategories();
  res.json(categories);
};

export const updateCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "Category name is required" });
    return;
  }

  const updatedCategory = db.updateCategory(Number(id), { name });
  if (!updatedCategory) {
    res.status(404).json({ error: "Category not found" });
    return;
  }

  res.json(updatedCategory);
};

export const deleteCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log({ id });
  const deleted = db.deleteCategory(Number(id));
  if (!deleted) {
    res.status(404).json({ error: "Category not found" });
    return;
  }

  res.status(204).send();
};
