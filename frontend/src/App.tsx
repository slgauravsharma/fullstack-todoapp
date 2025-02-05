import { Routes, Route } from "react-router";
import TodoContainer from "@/containers/TodoContainer";
import CategoryContainer from "@/containers/CategoryContainer";
import { CommonRoutes } from "@/utils/enums";
import Navbar from "@/components/shared/Navbar";
import NotFound from "@/components/shared/NotFound";
import Loader from "./components/shared/Loader";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<TodoContainer />} />
          <Route path={CommonRoutes.TODOS} element={<TodoContainer />} />
          <Route
            path={CommonRoutes.CATEGORIES}
            element={<CategoryContainer />}
          />
          <Route path={CommonRoutes.NOT_FOUND} element={<NotFound />} />
        </Routes>
        <Loader />
      </main>
    </>
  );
}

export default App;
