import {
  toggleShowTodoModal,
  addTodo,
  setShowLoder,
  updateTodo,
  setSelectedTodo,
} from "@/features/todos/todosSlice";
import { addTodoService, updateTodoService } from "@/services/todoService";
import { RootState } from "@/store";
import { Todo } from "@/types/todoTypes";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/shared/Sidebar";
import TodoModal from "../components/shared/TodoModal";
import { CommonRoutes } from "@/utils/enums";
import { useNavigate } from "react-router";

const LayoutContainer = ({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showTodoModal, selectedTodo } = useSelector(
    (state: RootState) => state.todos
  );
  const { categories } = useSelector((state: RootState) => state.category);
  const onToggleShowTodoModal = () => dispatch(toggleShowTodoModal());
  const onAddOrUpdateTodo = async (todoModalState: Todo) => {
    const isEditMode = todoModalState?.id;
    try {
      dispatch(setShowLoder(true));
      const apiCall = isEditMode ? updateTodoService : addTodoService;
      const todoResponse = await apiCall(todoModalState);
      const addOrUpdateCategory = isEditMode ? updateTodo : addTodo;
      dispatch(addOrUpdateCategory(todoResponse));
      dispatch(setSelectedTodo(null));
      onToggleShowTodoModal();
      navigate(CommonRoutes.TODOS);
      toast.success(`Todo ${isEditMode ? "updated" : "added"} successfully`);
    } catch {
      toast.error(`Unable to ${isEditMode ? "update" : "add"} todo`);
    } finally {
      dispatch(setShowLoder(false));
    }
  };

  return (
    <div className="flex">
      <Sidebar onNewTodo={onToggleShowTodoModal} />
      {showTodoModal && (
        <TodoModal
          isOpen={showTodoModal}
          onClose={() => {
            dispatch(setSelectedTodo(null));
            onToggleShowTodoModal();
          }}
          onSubmit={onAddOrUpdateTodo}
          defaultState={selectedTodo as Todo}
          categories={categories}
        />
      )}
      <div className="flex-1 p-6">
        <div className="text-xl font-bold">{header}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutContainer;
