const endpoints = {
  fetchOrAddTodos: "/todos",
  updateTodoStatus: (todoId: number) => `/todos/${todoId}/status`,
  removeOrUpdateTodo: (todoId: number) => `/todos/${todoId}`,
  fetchOrAddCategory: "/categories",
  removeOrUpdateCategory: (categoryId: number) => `/categories/${categoryId}`,
};

export default endpoints;
