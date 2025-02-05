import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Todo, TodoState } from "@/types/todoTypes";

const initialState: TodoState = {
  todos: [],
  showTodoModal: false,
  showLoader: false,
  showTodoDeleteConfirmModal: false,
  selectedTodo: null,
  sortByDate: "createdDate",
  filterByStatus: "",
  selectedFilterCategory: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleShowTodoModal: (state) => {
      state.showTodoModal = !state.showTodoModal;
    },
    setShowLoder: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;
    },
    toggleShowTodoDeleteConfirmModal: (state) => {
      state.showTodoDeleteConfirmModal = !state.showTodoDeleteConfirmModal;
    },
    setSelectedTodo: (state, action: PayloadAction<Todo | null>) => {
      state.selectedTodo = action.payload;
    },
    setSortByDate: (state, action: PayloadAction<string>) => {
      state.sortByDate = action.payload;
    },
    setFilterByStatus: (state, action: PayloadAction<string>) => {
      state.filterByStatus = action.payload;
    },
    setSelectedFilterCategory: (state, action: PayloadAction<string>) => {
      state.selectedFilterCategory = action.payload;
    },
  },
});

export const {
  addTodos,
  addTodo,
  updateTodo,
  removeTodo,
  toggleShowTodoModal,
  setShowLoder,
  toggleShowTodoDeleteConfirmModal,
  setSelectedTodo,
  setSortByDate,
  setFilterByStatus,
  setSelectedFilterCategory,
} = todoSlice.actions;
export default todoSlice.reducer;
