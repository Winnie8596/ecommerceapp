import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}/blog-category/`);
  return response.data;
};

const createBlogCategory = async (category) => {
  const response = await axios.post(
    `${base_url}/blog-category/create-category`,
    category,
    config
  );
  return response.data;
};

const updateBlogCategory = async (category) => {
  const response = await axios.put(
    `${base_url}/blog-category/${category.id}`,
    { title: category.categoryData.title },
    config
  );
  return response.data;
};

const getBlogCategory = async (id) => {
  const response = await axios.get(`${base_url}/blog-category/${id}`, config);
  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axios.delete(
    `${base_url}/blog-category/${id}`,
    config
  );
  return response.data;
};

const blogCategoryService = {
  getBlogCategories,
  createBlogCategory,
  getBlogCategory,
  deleteBlogCategory,
  updateBlogCategory,
};

export default blogCategoryService;
