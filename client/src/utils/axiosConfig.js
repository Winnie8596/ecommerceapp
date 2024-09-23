const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

// const customerData = localStorage.getItem("customer");
// const token = customerData ? JSON.parse(customerData).token : null;

// export const config = {
//   headers: {
//     Authorization: token ? `Bearer ${token}` : "",
//     Accept: "application/json",
//   },
// };
