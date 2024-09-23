import React, { useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    createProdCategories,
    getProdCategory,
    resetState,
    updateProdCategory,
} from '../features/prodCategory/ProdCategorySlice';

let schema = Yup.object().shape({
    title: Yup.string().required('Product Category name is required'),
});

const AddCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const getCategoryId = location.pathname.split('/')[3];

    const newProdCategory = useSelector((state) => state.prodCategories);

    const { isSucess, isError, isLoading, createProdCategory, categoryName, updatedCategory } =
        newProdCategory;

    useEffect(() => {
        if (getCategoryId !== undefined) {
            dispatch(getProdCategory(getCategoryId));
            formik.values.title = categoryName;
        } else {
            dispatch(resetState());
        }
    }, [getCategoryId]);

    useEffect(() => {
        if (isSucess && createProdCategory) {
            toast.success('Product Category added successfully!');
        }
        if (isSucess && updatedCategory) {
            toast.success('Product Category updated successfully!');
        }
        if (isError) {
            toast.error('Something went wrong!');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSucess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: categoryName || '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getCategoryId !== undefined) {
                const data = { id: getCategoryId, categoryData: values };
                dispatch(updateProdCategory(data));
            } else {
                dispatch(createProdCategories(values));
                formik.resetForm();
            }
            setTimeout(() => {
                dispatch(resetState());
                navigate('/admin/category-list');
            }, 500);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">{getCategoryId !== undefined ? 'Edit' : 'Add'} Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Category Name"
                        name="title"
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                        val={formik.values.title}
                    />
                    <div className="error">{formik.touched.title && formik.errors.title}</div>

                    <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
                        {getCategoryId !== undefined ? 'Edit' : 'Add'} Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
