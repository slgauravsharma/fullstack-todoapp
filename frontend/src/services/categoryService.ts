import axiosInstance from "@/utils/axios";
import endpoints from "@/utils/endpoints";
import type { Category } from "@/types/categoryTypes";

export const fetchCategoriesService = (): Promise<Category[]> => {
  return axiosInstance.get(endpoints.fetchOrAddCategory);
};

export const addCategoryService = (data: Category): Promise<Category> => {
  return axiosInstance.post(endpoints.fetchOrAddCategory, data);
};

export const updateCategoryService = (data: Category): Promise<Category> => {
  return axiosInstance.put(
    endpoints.removeOrUpdateCategory(data.id as number),
    data
  );
};

export const removeCategoryService = (
  categoryId: number
): Promise<Category> => {
  return axiosInstance.delete(endpoints.removeOrUpdateCategory(categoryId));
};
