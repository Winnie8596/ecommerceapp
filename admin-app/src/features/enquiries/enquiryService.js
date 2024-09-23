import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getEnquiries = async () => {
  const response = await axios.get(`${base_url}/enq/`);
  return response.data;
};

const deleteEnq = async (id) => {
  const response = await axios.delete(`${base_url}/enq/${id}`, config);
  return response.data;
};

const getEnq = async (id) => {
  const response = await axios.get(`${base_url}/enq/${id}`);
  return response.data;
};

const updateEnq = async (enq) => {
  const response = await axios.put(
    `${base_url}/enq/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};

const enquiryService = {
  getEnquiries,
  deleteEnq,
  getEnq,
  updateEnq,
};

export default enquiryService;
