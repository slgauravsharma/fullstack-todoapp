export interface TodoState {
  todos: Todo[];
  showTodoModal: boolean;
  showLoader: boolean;
  showTodoDeleteConfirmModal: boolean;
  selectedTodo: Todo | null;
  sortByDate: string;
  filterByStatus: string;
  selectedFilterCategory: string;
}
export interface Todo {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
  isCompleted?: boolean;
  categoryId?: number | string;
}
