import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "./../../utils/axiosConfig";

const register = async (user) => {
  const response = await axios.post(`${base_url}/user/register`, user);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

// login api u send to server with username and password, then get back refresh token
// at first this refresh token need to store in client storage SECURELY
//then call an special authentication endpoint to get bearer token using refresh token
// this bearer token also need to store in client side storage
// after that then token can be used in the api calls, but if the expiration time finish, then need to do the refresh token to get back bearer token flow again

// store refresh tokan in login api call,  refresh token need to store at client side, then use it to request for bearer token
const login = async (user) => {
  const response = await axios.post(`${base_url}/user/login`, user);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}/user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}/user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
  const response = await axios.get(`${base_url}/user/cart`, config);
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}/user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductFromCart = async (cartDetail) => {
  const response = await axios.put(
    `${base_url}/user/update-product-cart/${cartDetail.cartId}/${cartDetail.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `${base_url}/user/cart/create-order`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getUserOrders = async () => {
  const response = await axios.get(`${base_url}/user/getmyorders`, config);
  if (response.data) {
    return response.data;
  }
};
const updateUser = async (data) => {
  const response = await axios.put(
    `${base_url}/user/edit-user`,
    data.data,
    data.config2
  );
  if (response.data) {
    return response.data;
  }
};
const forgotPassToken = async (data) => {
  const response = await axios.post(`${base_url}/user/forgot-password`, data);
  if (response.data) {
    return response.data;
  }
};

const resetPass = async (data) => {
  const response = await axios.put(
    `${base_url}/user/reset-password/:${data.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};

// const emptyCart = async (data) => {
//   const response = await axios.delete(`${base_url}/user/empty-cart`, data);
//   if (response.data) {
//     return response.data;
//   }
// };

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
  getUserOrders,
  updateUser,
  forgotPassToken,
  resetPass,
  // emptyCart,
};
