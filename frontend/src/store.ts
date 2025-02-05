import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "@/features/todos/todosSlice";
import categoryReducer from "@/features/todos/categorySlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
