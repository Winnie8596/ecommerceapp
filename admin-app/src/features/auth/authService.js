import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const login = async (userData) => {
  const response = await axios.post(`${base_url}/user/admin-login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(
    `${base_url}/user/order/getallorders`,
    config
  );
  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}/user/order/getsingleorder/${id}`,
    config
  );
  return response.data;
};

const updateOrder = async (data) => {
  const response = await axios.put(
    `${base_url}/user/order/updateorder/${data.id}`,
    { status: data.status },
    config
  );
  return response.data;
};

const getMonthWiseOrderIncome = async (data) => {
  const response = await axios.get(
    `${base_url}/user/getmonthwiseorderincome`,
    data
  );
  return response.data;
};

const getYearlyStat = async (data) => {
  const response = await axios.get(
    `${base_url}/user/getyearlytotalorders`,
    data
  );
  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
  getMonthWiseOrderIncome,
  getYearlyStat,
  updateOrder,
};

export default authService;
