import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Loader = () => {
  const { showLoader } = useSelector((state: RootState) => state.todos);
  if (!showLoader) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 z-50">
      <div className="w-16 h-16 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
