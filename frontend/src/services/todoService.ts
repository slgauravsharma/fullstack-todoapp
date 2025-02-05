import axiosInstance from "@/utils/axios";
import endpoints from "@/utils/endpoints";
import type { Todo } from "@/types/todoTypes";

export const fetchTodosService = (): Promise<Todo[]> => {
  return axiosInstance.get(endpoints.fetchOrAddTodos);
};

export const addTodoService = (data: Todo): Promise<Todo> => {
  return axiosInstance.post(endpoints.fetchOrAddTodos, data);
};

export const updateTodoService = (data: Todo): Promise<Todo> => {
  return axiosInstance.patch(
    endpoints.removeOrUpdateTodo(data.id as number),
    data
  );
};

export const updateTodoStatusService = ({
  isCompleted,
  id,
}: Todo): Promise<Todo> => {
  return axiosInstance.patch(endpoints.updateTodoStatus(id as number), {
    isCompleted,
  });
};

export const removeTodoService = (id: number): Promise<Todo> => {
  return axiosInstance.delete(endpoints.removeOrUpdateTodo(id));
};
