import { Category } from "@/types/categoryTypes";
import { Todo } from "@/types/todoTypes";
import { useLayoutEffect, useState } from "react";

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (todo: Todo) => void;
  defaultState: Todo;
  categories: Category[];
}

const initialTodoState = {
  id: undefined,
  title: "",
  description: "",
  dueDate: "",
  categoryId: "",
};

export default function TodoModal({
  isOpen,
  onClose,
  onSubmit,
  defaultState,
  categories,
}: TodoModalProps) {
  console.log({
    isOpen,
    defaultState,
    initialTodoState,
  });
  const [formState, setFormState] = useState(defaultState ?? initialTodoState);
  const { title, description, dueDate, categoryId } = formState || {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  const onFormFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  useLayoutEffect(() => {
    setFormState(defaultState);
  }, [defaultState]);

  if (!isOpen) return null;
  const isEditMode = defaultState?.id;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-lg font-semibold">
          {isEditMode ? "Edit" : "Add"} Todo
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={title || ""}
              onChange={onFormFieldChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={description || ""}
              onChange={onFormFieldChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-700"
            >
              category
            </label>
            <select
              id="categoryId"
              name="categoryId"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={categoryId || ""}
              onChange={onFormFieldChange}
            >
              {categories.length ? (
                <>
                  <option>selected category</option>
                  {categories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </>
              ) : (
                <option>No category</option>
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={dueDate || ""}
              onChange={onFormFieldChange}
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!(title && description && dueDate)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isEditMode ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
