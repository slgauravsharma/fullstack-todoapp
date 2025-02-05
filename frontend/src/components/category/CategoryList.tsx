import { RootState } from "@/store";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { Category } from "@/types/categoryTypes";

interface CategoryListProps {
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

export default function CategoryList({ onDelete, onEdit }: CategoryListProps) {
  const { showLoader } = useSelector((state: RootState) => state.todos);
  const { categories } = useSelector((state: RootState) => state.category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.length ? (
        categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <>
          {!showLoader && (
            <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center col-span-full">
              No Categories Found
            </div>
          )}
        </>
      )}
    </div>
  );
}
