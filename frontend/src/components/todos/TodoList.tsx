import { RootState } from "@/store";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useCallback, useMemo } from "react";
import type { Todo } from "@/types/todoTypes";

interface TodoListProps {
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  toggleTodoStatus: (todo: Todo) => void;
}

export default function TodoList({
  onEdit,
  onDelete,
  toggleTodoStatus,
}: TodoListProps) {
  const {
    todos,
    showLoader,
    sortByDate,
    filterByStatus,
    selectedFilterCategory,
  } = useSelector((state: RootState) => state.todos);
  const { categories } = useSelector((state: RootState) => state.category);

  const getCategoryName = useCallback(
    (todoMappedCategoryId: number) => {
      return (
        categories.find((category) => category.id === todoMappedCategoryId)
          ?.name || ""
      );
    },
    [categories]
  );

  const todoList = useMemo(() => {
    return todos
      .filter((todoItem) => {
        const categroyCondition =
          todoItem.categoryId === selectedFilterCategory ||
          !selectedFilterCategory;
        const filterStatusCondition =
          (!todoItem.isCompleted && filterByStatus === "active") ||
          (todoItem.isCompleted && filterByStatus === "completed") ||
          !filterByStatus;
        if (categroyCondition && filterStatusCondition) {
          return true;
        }
        return false;
      })
      .sort((a, b) => {
        const dateA = new Date(a[sortByDate as keyof Todo] as string).getTime();
        const dateB = new Date(b[sortByDate as keyof Todo] as string).getTime();
        return dateA - dateB;
      });
  }, [todos, selectedFilterCategory, filterByStatus, sortByDate]);

  return (
    <div className="h-[82vh] overflow-y-auto space-y-4 p-2">
      {todoList.length ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            categoryName={getCategoryName(Number(todo.categoryId))}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <>
          {!showLoader && (
            <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center col-span-full">
              No Todos Found
            </div>
          )}
        </>
      )}
    </div>
  );
}
