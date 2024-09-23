import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  createColors,
  resetState,
  getColor,
  updateColor,
} from "../features/colors/colorSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Color name is required"),
});

const AddColor = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const location = useLocation();
  const getColorId = location.pathname.split("/")[3];

  const newColor = useSelector((state) => state.colors);

  const { isSucess, isError, isLoading, createColor, colorName, updatedColor } =
    newColor;

  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getColor(getColorId));
      formik.values.title = colorName;
    } else {
      dispatch(resetState());
    }
  }, [getColorId]);

  useEffect(() => {
    if (isSucess && createColor) {
      toast.success("Color added successfully!");
    }
    if (isSucess && updatedColor) {
      toast.success("Color updated successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSucess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getColorId !== undefined) {
        const data = { id: getColorId, colorData: values };
        dispatch(updateColor(data));
      } else {
        dispatch(createColors(values));
        formik.resetForm();
      }
      setTimeout(() => {
        dispatch(resetState());
        // navigate('/admin/color-list');
      }, 500);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getColorId !== undefined ? "Edit" : "Add"} Color
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="color"
            label="Color"
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
            {getColorId !== undefined ? "Edit" : "Add"} Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
