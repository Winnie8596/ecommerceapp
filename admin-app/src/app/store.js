import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/products/productSlice";
import brandReducer from "../features/brands/brandSlice";
import prodCategoryReducer from "../features/prodCategory/ProdCategorySlice";
import colorReducer from "../features/colors/colorSlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice";
import enquiryReducer from "../features/enquiries/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupons/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    products: productReducer,
    brands: brandReducer,
    prodCategories: prodCategoryReducer,
    colors: colorReducer,
    blogs: blogReducer,
    blogCategories: blogCategoryReducer,
    enquiries: enquiryReducer,
    upload: uploadReducer,
    coupons: couponReducer,
  },
});
