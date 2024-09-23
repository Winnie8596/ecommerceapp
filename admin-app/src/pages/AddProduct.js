import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Select } from "antd";
import { toast } from "react-toastify";

import CustomInput from "../components/CustomInput";
import { getBrands } from "./../features/brands/brandSlice";
import { getCategories } from "./../features/prodCategory/ProdCategorySlice";
import { getColors } from "./../features/colors/colorSlice";
import { uploadImg, deleteImg } from "../features/upload/uploadSlice";
import {
  createProducts,
  getProduct,
  resetState,
  updateProduct,
} from "../features/products/productSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  category: Yup.string().required("Category is required"),
  tags: Yup.string().required("Tag is required"),
  color: Yup.array()
    .min(1, "Pick at least one color")
    .required("Color is required"),
  quantity: Yup.number().required("Quantity is required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getProductId = location.pathname.split("/")[3];
  const [color, setColor] = useState([]);
  const brandState = useSelector((state) => state.brands.brands);
  const categoryState = useSelector((state) => state.prodCategories.categories);
  // const colorState = useSelector((state) => state.colors.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.products);
  const productColorState = useSelector((state) => state.products.productColor);
  const img = [];
 
  const {
    isSuccess,
    isError,
    isLoading,
    createProduct,
    updatedProduct,
    productTitle,
    productDescription,
    productPrice,
    productBrand,
    productCategory,
    productTags,
    productColor,
    productQuantity,
    prodImg
  } = newProduct;

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
    if (getProductId !== undefined) {
      dispatch(getProduct(getProductId));
      
     
     
    } 
    
  }, [getProductId,dispatch]);


  

  useEffect(() => {
    if (isSuccess && createProduct) {
      toast.success("Product added successfully!");
    }
    if (isSuccess && updatedProduct) {
      toast.success("Product updated successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading]);

  const coloropt = (productColorState || []).map((i) => ({
    value: i._id,
    label: i.title,
  }));
  console.log("Product Color State:", productColorState);


  
  // imgState.forEach((i) => {
  //   img.push({
  //     public_id: i.public_id,
  //     url: i.url,
  //   });
  // });

  useEffect(() => {
    if (productColor) {
      setColor(productColor);  // Set colors when product is fetched
    }
    if (prodImg) {
      img.push(prodImg);  // Push existing images
    }
  }, [productColor, prodImg]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: productTitle || "",
      description: productDescription || "",
      price: productPrice || "",
      brand: productBrand || "",
      category: productCategory || "",
      tags: productTags || "",
      color: productColor || [],
      quantity: productQuantity || "",
      images: prodImg || [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getProductId) {
        const data = { id: getProductId, productData: values };
        dispatch(updateProduct(data));
      } else {
        dispatch(createProducts(values));
        setTimeout(function(){
          formik.resetForm();
        setColor(null);
       
       }, 2000);

        
      }
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/product-list");
      }, 500);
    },
  });

 

  return (
    <div>
      <h3 className="mb-4 title">
        {getProductId !== undefined ? "Edit" : "Add"} Product
      </h3>
      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-1"
        >
          <CustomInput
            type="text"
            label="Product Title"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />

          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <div>
            <label htmlFor="" className="m-2">
              Product Description
            </label>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>

          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>

          <CustomInput
            type="number"
            label="Product Price"
            name="price"
            onCh={formik.handleChange("price")}
            onBl={formik.handleBlur("price")}
            val={formik.values.price}
          />

          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>

          <select
            name="brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            className="form-control py-3"
            id=""
          >
            <option value="">Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>

          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>

          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3"
            id=""
          >
            <option value="">Select Category</option>
            {categoryState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>

          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          <select
            name="tags"
            onChange={formik.handleChange("tags")}
            onBlur={formik.handleBlur("tags")}
            value={formik.values.tags}
            className="form-control py-3"
            id=""
          >
            <option value="" disabled>
              Select Tags
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
          </select>

          <div className="error">
            {formik.touched.tags && formik.errors.tags}
          </div>

          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select Colors"
            value={color}  // Set the value from the `color` state
            onChange={(value) => setColor(value)}  // Update the state when selecting new colors
            options={coloropt}  // Pass options correctly
          />

          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>

          <CustomInput
            type="number"
            label="Product Quantity"
            name="quantity"
            onCh={formik.handleChange("quantity")}
            onBl={formik.handleBlur("quantity")}
            val={formik.values.quantity}
          />

          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>

          <div className="bg-white border-1 text-center py-3 mb-3">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="mb-0">
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          <div className="show-images d-flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteImg(i.public_id))}
                    className="btn-close position-absolute bg-white rounded-circle"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getProductId !== undefined ? "Edit" : "Add"} Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
