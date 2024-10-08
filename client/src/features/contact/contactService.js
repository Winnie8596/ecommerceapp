import axios from "axios";
import { base_url } from "../../utils/base_url";
// import { config } from "./../../utils/axiosConfig";

const postQuery = async (contactData) => {
  const response = await axios.post(
    `${base_url}/enq/create-enquiry`,
    contactData
  );
  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postQuery,
};
