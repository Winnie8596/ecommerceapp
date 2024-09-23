import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));

  // If no customer data or no token, render the children (open route)
  if (!getTokenFromLocalStorage || !getTokenFromLocalStorage.token) {
    return children;
  }

  // If a token exists, redirect to the home page
  return <Navigate to="/" replace={true} />;
};
