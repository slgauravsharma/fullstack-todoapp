import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Category, CategoryState } from "@/types/categoryTypes";

const initialState: CategoryState = {
  categories: [],
  showCategoryModal: false,
  showCategoryDeleteConfirmModal: false,
  selectedCategory: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    toggleShowCategoryModal: (state) => {
      state.showCategoryModal = !state.showCategoryModal;
    },
    toggleShowCategoryDeleteConfirmModal: (state) => {
      state.showCategoryDeleteConfirmModal =
        !state.showCategoryDeleteConfirmModal;
    },
    setSelectedCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addCategories,
  addCategory,
  updateCategory,
  removeCategory,
  toggleShowCategoryModal,
  toggleShowCategoryDeleteConfirmModal,
  setSelectedCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
