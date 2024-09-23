import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  createBlogCategories,
  resetState,
  getBlogCategory,
  updateBlogCategory,
} from "../features/blogCategory/blogCategorySlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Blog Category name is required"),
});

const AddBlogCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const getBlogCategoryId = location.pathname.split("/")[3];

  const newBlogCategory = useSelector((state) => state.blogCategories);

  const {
    isSuccess,
    isError,
    isLoading,
    createBlogCategory,
    categoryName,
    updatedCategory,
  } = newBlogCategory;

  useEffect(() => {
    if (getBlogCategoryId !== undefined) {
      dispatch(getBlogCategory(getBlogCategoryId));
      formik.values.title = categoryName;
    } else {
      dispatch(resetState());
    }
  }, [getBlogCategoryId]);

  useEffect(() => {
    if (isSuccess && createBlogCategory) {
      toast.success("Blog Category added successfully!");
    }
    if (isSuccess && updatedCategory) {
      toast.success("Blog Category updated successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogCategoryId !== undefined) {
        const data = { id: getBlogCategoryId, categoryData: values };
        dispatch(updateBlogCategory(data));
      } else {
        dispatch(createBlogCategories(values));
        formik.resetForm();
      }
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/blog-category-list");
      }, 500);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getBlogCategoryId !== undefined ? "Edit" : "Add"} Blog Category
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Blog Category"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getBlogCategoryId !== undefined ? "Edit" : "Add"} Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogCategory;
