import { Category } from "@/types/categoryTypes";

interface TodoHeaderProps {
  categories: Category[];
  selectedFilterCategory: string;
  setSelectedFilterCategory: (value: string) => void;
  filterByStatus: string;
  onStatusChange: (value: string) => void;
  sortByDate: string;
  setSortByDate: (value: string) => void;
}

const TodoHeader = ({
  categories,
  selectedFilterCategory,
  setSelectedFilterCategory,
  filterByStatus,
  onStatusChange,
  sortByDate,
  setSortByDate,
}: TodoHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">All Todos</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            id="category"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedFilterCategory}
            onChange={(e) => setSelectedFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category: Category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="status" className="text-sm font-medium text-gray-700">
            Status:
          </label>
          <select
            id="status"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            value={filterByStatus}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
          >
            <option value="dueDate">Due Date</option>
            <option value="createdDate">Creation Date</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
