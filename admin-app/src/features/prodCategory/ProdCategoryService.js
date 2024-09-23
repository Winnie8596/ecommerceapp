import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}/category/`);
  return response.data;
};

const createProdCategory = async (category) => {
  const response = await axios.post(
    `${base_url}/category/create-category`,
    category,
    config
  );
  return response.data;
};

const updateProdCategory = async (category) => {
  const response = await axios.put(
    `${base_url}/category/${category.id}`,
    { title: category.categoryData.title },
    config
  );
  return response.data;
};

const getProdCategory = async (id) => {
  const response = await axios.get(`${base_url}/category/${id}`, config);
  console.log('API Response: ', response);
  return response.data;
};

const deleteProdCategory = async (id) => {
  const response = await axios.delete(`${base_url}/category/${id}`, config);
  return response.data;
};

const productCategoryService = {
  getProductCategories,
  createProdCategory,
  getProdCategory,
  deleteProdCategory,
  updateProdCategory,
};

export default productCategoryService;
