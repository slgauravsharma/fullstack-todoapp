import { Todo, Category } from "@/models/todoModel";

class InMemoryDB {
  private todos: Todo[] = [];
  private categories: Category[] = [];

  public getTodos(): Todo[] {
    return this.todos;
  }

  public getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  public getTodosByCategory(categoryId: number): Todo[] {
    return this.todos.filter((todo) => todo.categoryId === categoryId);
  }

  public addTodo(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }

  public updateTodo(updatedTodo: Todo): Todo | undefined {
    const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      return updatedTodo;
    }
    return;
  }

  public deleteTodo(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  public getCategories(): Category[] {
    return this.categories;
  }

  public addCategory(category: Category): Category {
    this.categories.push(category);
    return category;
  }

  public updateCategory(
    id: number,
    updatedFields: Partial<Category>
  ): Category | undefined {
    const category = this.categories.find((category) => category.id === id);
    if (category) {
      Object.assign(category, updatedFields);
      return category;
    }
    return;
  }

  public deleteCategory(id: number): boolean {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      return true;
    }
    return false;
  }
}

const db = new InMemoryDB();

export { db };
