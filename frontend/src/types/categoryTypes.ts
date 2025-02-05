export interface CategoryState {
  categories: Category[];
  showCategoryModal: boolean;
  showCategoryDeleteConfirmModal: boolean;
  selectedCategory: Category | null;
}
export interface Category {
  id?: number;
  name: string;
}
