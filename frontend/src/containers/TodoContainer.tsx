import Popconfirm from "@/components/shared/Popconfirm";
import TodoHeader from "@/components/todos/TodoHeader";
import TodoList from "@/components/todos/TodoList";
import LayoutContainer from "@/containers/LayoutContainer";
import { addCategories } from "@/features/todos/categorySlice";
import {
  addTodos,
  removeTodo,
  setFilterByStatus,
  setSelectedFilterCategory,
  setSelectedTodo,
  setShowLoder,
  setSortByDate,
  toggleShowTodoDeleteConfirmModal,
  toggleShowTodoModal,
  updateTodo,
} from "@/features/todos/todosSlice";
import { fetchCategoriesService } from "@/services/categoryService";
import {
  fetchTodosService,
  removeTodoService,
  updateTodoStatusService,
} from "@/services/todoService";
import { RootState } from "@/store";
import { Todo } from "@/types/todoTypes";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function TodoContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.category);
  const {
    todos,
    showTodoDeleteConfirmModal,
    selectedTodo,
    sortByDate,
    filterByStatus,
    selectedFilterCategory,
  } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    async function inti() {
      try {
        const todoListResponse = await fetchTodosService();
        dispatch(addTodos(todoListResponse));
      } catch {
        toast.error("Unable to fetch todo list");
      }
    }
    if (!todos.length) {
      inti();
    }
  }, [dispatch, todos.length]);

  useEffect(() => {
    async function inti() {
      try {
        const todoListResponse = await fetchCategoriesService();
        dispatch(addCategories(todoListResponse));
      } catch {
        toast.error("Unable to fetch category list");
      }
    }
    if (!categories.length) {
      inti();
    }
  }, [dispatch, categories.length]);

  const onEditTodo = (todo: Todo) => {
    dispatch(setSelectedTodo(todo));
    dispatch(toggleShowTodoModal());
  };

  const onTodoPreDelete = (todo: Todo) => {
    dispatch(setSelectedTodo(todo));
    dispatch(toggleShowTodoDeleteConfirmModal());
  };

  const onDeleteCategory = async () => {
    try {
      dispatch(setShowLoder(true));
      await removeTodoService(selectedTodo?.id as number);
      dispatch(removeTodo(selectedTodo?.id as number));
      dispatch(setSelectedTodo(null));
      dispatch(toggleShowTodoDeleteConfirmModal());
      toast.success("Todo deleted successfully");
    } catch {
      toast.error("Unable to delete todo");
    } finally {
      dispatch(setShowLoder(false));
    }
  };

  const toggleTodoStatus = async (todo: Todo) => {
    try {
      const updatedTodo = {
        ...todo,
        isCompleted: !todo?.isCompleted,
      };
      const todoUpdatedResponse = await updateTodoStatusService(updatedTodo);
      dispatch(updateTodo(todoUpdatedResponse));
      toast.success("Todo status updated successfully");
    } catch {
      toast.error("Unable to update todo status");
    }
  };

  return (
    <LayoutContainer
      header={
        <TodoHeader
          categories={categories}
          selectedFilterCategory={selectedFilterCategory}
          setSelectedFilterCategory={(status: string) =>
            dispatch(setSelectedFilterCategory(status))
          }
          filterByStatus={filterByStatus}
          onStatusChange={(status: string) =>
            dispatch(setFilterByStatus(status))
          }
          sortByDate={sortByDate}
          setSortByDate={(selectedSortDate) =>
            dispatch(setSortByDate(selectedSortDate))
          }
        />
      }
    >
      <TodoList
        onDelete={onTodoPreDelete}
        onEdit={onEditTodo}
        toggleTodoStatus={toggleTodoStatus}
      />
      {showTodoDeleteConfirmModal && (
        <Popconfirm
          title={"Are you sure you want to remove todo?"}
          onCancel={() => {
            dispatch(setSelectedTodo(null));
            dispatch(toggleShowTodoDeleteConfirmModal());
          }}
          onConfirm={onDeleteCategory}
        />
      )}
    </LayoutContainer>
  );
}
