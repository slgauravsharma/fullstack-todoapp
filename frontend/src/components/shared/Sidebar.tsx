import { RootState } from "@/store";
import { CommonRoutes } from "@/utils/enums";
import { useSelector } from "react-redux";
import { Link, useMatch } from "react-router";

export default function Sidebar({ onNewTodo }: { onNewTodo: () => void }) {
  const { todos } = useSelector((state: RootState) => state.todos);
  const { categories } = useSelector((state: RootState) => state.category);
  const currentPageIsTodos = useMatch(CommonRoutes.TODOS);
  const currentPageIsCategory = useMatch(CommonRoutes.CATEGORIES);

  return (
    <aside className="w-64 bg-gray-100 p-4 h-screen">
      <button
        className="w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer"
        onClick={onNewTodo}
      >
        + New Todo
      </button>
      <nav className="mt-4 flex flex-col gap-3">
        <Link
          to={CommonRoutes.TODOS}
          className={`font-semibold cursor-pointer ${
            currentPageIsTodos ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {`Todos (${todos?.length})`}
        </Link>
        <hr className="w-full border-gray-300" />
        <Link
          to={CommonRoutes.CATEGORIES}
          className={`font-semibold cursor-pointer ${
            currentPageIsCategory ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {`Categories (${categories?.length})`}
        </Link>
      </nav>
    </aside>
  );
}
