import { Category } from "@/types/categoryTypes";

type CategoryItemProps = {
  category: Category;
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
};

export default function CategroyItem({
  category,
  onEdit,
  onDelete,
}: CategoryItemProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
      <label className="flex items-center space-x-3">
        <span>{category.name}</span>
      </label>
      <div className="flex space-x-3">
        <button
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
          onClick={() => onEdit(category)}
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
          onClick={() => onDelete(category)}
          className="text-red-500 hover:text-red-700 "
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
  );
}
