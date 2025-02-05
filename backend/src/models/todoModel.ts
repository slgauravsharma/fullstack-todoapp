export interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  createdDate: string;
  isCompleted: boolean;
  categoryId?: number;
}

export interface Category {
  id: number;
  name: string;
}
