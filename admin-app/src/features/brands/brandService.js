import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config, getTokenFromLocalStorage } from "../../utils/axiosConfig";

// const getTokenFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const config = {
//   headers: {
//     Authorization: `Bearer ${
//       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//     }`,
//     Accept: "application/json",
//   },
// };

const getBrands = async () => {
  const response = await axios.get(`${base_url}/brand/`);
  return response.data;
};

const createBrands = async (brand) => {
  const response = await axios.post(
    `${base_url}/brand/create-brand`,
    brand,
    config
  );
  return response.data;
};

const updateBrand = async (brand) => {
  const response = await axios.put(
    `${base_url}/brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );
  return response.data;
};

const getBrand = async (id) => {
  const response = await axios.get(`${base_url}/brand/${id}`, config);
  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${base_url}/brand/${id}`, config);
  return response.data;
};

const brandService = {
  getBrands,
  createBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;
