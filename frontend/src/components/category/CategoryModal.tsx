import { Category } from "@/types/categoryTypes";
import { useLayoutEffect, useState } from "react";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (category: Category) => void;
  defaultState: Category;
}

const initialCategoryState = {
  id: "",
  name: "",
};

export default function CategoryModal({
  isOpen,
  onClose,
  onSubmit,
  defaultState,
}: CategoryModalProps) {
  const [formState, setFormState] = useState(
    defaultState ?? initialCategoryState
  );
  const { name } = formState || {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  const onFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <h2 className="text-lg font-semibold">{`${
          isEditMode ? "Edit" : "Add"
        } Category`}</h2>

        <div className="mt-4 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Category Name
            <span className="text-red-500"> *</span>
            <input
              type="text"
              placeholder="Enter category name"
              name="name"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={name ?? ""}
              onChange={onFormFieldChange}
            />
          </label>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!name}
          >
            {isEditMode ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
