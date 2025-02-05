import { Todo } from "@/types/todoTypes";

type TodoItemProps = {
  todo: Todo;
  categoryName?: string;
  toggleTodoStatus: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
};

export default function TodoItem({
  todo,
  categoryName,
  toggleTodoStatus,
  onEdit,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col space-y-3 border border-gray-200">
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleTodoStatus(todo)}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span
            className={`text-lg font-medium ${
              todo.isCompleted ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.title}
          </span>
          {categoryName && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              {categoryName}
            </span>
          )}
        </label>
      </div>
      <p className="text-gray-600 text-sm">{todo.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-xs">
          <span className="font-semibold text-gray-700">Due Date:</span>{" "}
          {todo.dueDate}
        </p>
        <div className="flex space-x-4">
          <button
            className="text-blue-500 hover:text-blue-700 transition cursor-pointer"
            onClick={() => onEdit(todo)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487a2.126 2.126 0 0 1 3.003 3.003l-10.58 10.58a4.252 4.252 0 0 1-1.412.94l-3.527 1.176a1 1 0 0 1-1.273-1.273l1.176-3.527a4.252 4.252 0 0 1 .94-1.412l10.58-10.58z"
              />
            </svg>
          </button>
          <button
            className="text-red-500 hover:text-red-700 transition cursor-pointer"
            onClick={() => onDelete(todo)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3a1 1 0 00-1 1v1H5a1 1 0 000 2h14a1 1 0 000-2h-3V4a1 1 0 00-1-1H9zm9 5H6l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
