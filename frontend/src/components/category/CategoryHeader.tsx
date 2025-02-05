const CategoryHeader = ({ onNewCategory }: { onNewCategory: () => void }) => (
  <div className="flex gap-2 mb-2">
    <div>All Categories</div>
    <button
      className="bg-blue-600 text-white rounded-lg cursor-pointer text-sm p-2 ml-auto cursor-pointer"
      onClick={onNewCategory}
    >
      + New Category
    </button>
  </div>
);

export default CategoryHeader;
