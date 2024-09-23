import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  createBrands,
  getBrand,
  resetState,
  updateBrand,
} from "../features/brands/brandSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Brand name is required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const getBrandId = location.pathname.split("/")[3];

  const newBrand = useSelector((state) => state.brands);
  const { isSucess, isError, isLoading, createBrand, brandName, updatedBrand } =
    newBrand;

  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getBrand(getBrandId));
      formik.values.title = brandName;
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);

  useEffect(() => {
    if (isSucess && createBrand) {
      toast.success("Brand added successfully!");
    }
    if (isSucess && updatedBrand) {
      toast.success("Brand updated successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSucess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateBrand(data));
      } else {
        dispatch(createBrands(values));
        formik.resetForm();
      }
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/brand-list");
      }, 1000);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getBrandId !== undefined ? "Edit" : "Add"} Brand
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            id="brand"
            type="text"
            label="Brand Name"
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
            {getBrandId !== undefined ? "Edit" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
