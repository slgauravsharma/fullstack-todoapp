import CategoryHeader from "@/components/category/CategoryHeader";
import CategoryList from "@/components/category/CategoryList";
import CategoryModal from "@/components/category/CategoryModal";
import Popconfirm from "@/components/shared/Popconfirm";
import LayoutContainer from "@/containers/LayoutContainer";
import {
  addCategories,
  addCategory,
  removeCategory,
  setSelectedCategory,
  toggleShowCategoryDeleteConfirmModal,
  toggleShowCategoryModal,
  updateCategory,
} from "@/features/todos/categorySlice";
import { setShowLoder } from "@/features/todos/todosSlice";
import {
  addCategoryService,
  fetchCategoriesService,
  removeCategoryService,
  updateCategoryService,
} from "@/services/categoryService";
import { RootState } from "@/store";
import { Category } from "@/types/categoryTypes";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function CategoryContainer() {
  const dispatch = useDispatch();
  const {
    categories,
    selectedCategory,
    showCategoryModal,
    showCategoryDeleteConfirmModal,
  } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    async function inti() {
      try {
        const todoListResponse = await fetchCategoriesService();
        dispatch(addCategories(todoListResponse));
      } catch {
        toast.error("Unable to fetch category list");
      }
    }
    if (!categories.length) {
      inti();
    }
  }, [dispatch, categories.length]);

  const onToggleShowCategoryModal = () => dispatch(toggleShowCategoryModal());

  const onAddOrUpdateCategory = async (categoryModalState: Category) => {
    const isEditMode = categoryModalState?.id;
    try {
      dispatch(setShowLoder(true));
      const apiCall = isEditMode ? updateCategoryService : addCategoryService;
      const categoryResponse = await apiCall(categoryModalState);
      const addOrUpdateCategory = isEditMode ? updateCategory : addCategory;
      dispatch(addOrUpdateCategory(categoryResponse));
      dispatch(setSelectedCategory(null));
      onToggleShowCategoryModal();
      toast.success(
        `Category ${isEditMode ? "updated" : "added"} successfully`
      );
    } catch {
      toast.error(`Unable to ${isEditMode ? "update" : "add"} category`);
    } finally {
      dispatch(setShowLoder(false));
    }
  };

  const onDeleteCategory = async () => {
    try {
      dispatch(setShowLoder(true));
      await removeCategoryService(selectedCategory?.id as number);
      dispatch(removeCategory(selectedCategory?.id as number));
      dispatch(setSelectedCategory(null));
      dispatch(toggleShowCategoryDeleteConfirmModal());
      toast.success("Category deleted successfully");
    } catch {
      toast.error("Unable to delete category");
    } finally {
      dispatch(setShowLoder(false));
    }
  };

  const onEditCategory = (category: Category) => {
    dispatch(setSelectedCategory(category));
    onToggleShowCategoryModal();
  };

  const onCategoryPreDelete = (category: Category) => {
    dispatch(setSelectedCategory(category));
    dispatch(toggleShowCategoryDeleteConfirmModal());
  };

  return (
    <LayoutContainer
      header={<CategoryHeader onNewCategory={onToggleShowCategoryModal} />}
    >
      <CategoryList onDelete={onCategoryPreDelete} onEdit={onEditCategory} />
      {showCategoryDeleteConfirmModal && (
        <Popconfirm
          title={"Are you sure you want to remove category?"}
          onCancel={() => {
            dispatch(setSelectedCategory(null));
            dispatch(toggleShowCategoryDeleteConfirmModal());
          }}
          onConfirm={onDeleteCategory}
        />
      )}
      {showCategoryModal && (
        <CategoryModal
          isOpen={showCategoryModal}
          onClose={() => {
            dispatch(setSelectedCategory(null));
            onToggleShowCategoryModal();
          }}
          onSubmit={onAddOrUpdateCategory}
          defaultState={selectedCategory as Category}
        />
      )}
    </LayoutContainer>
  );
}
