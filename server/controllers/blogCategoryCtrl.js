const asyncHandler = require('express-async-handler');
const blogCategory = require('../models/blogCategoryModel');
const validateMongoDbId = require('../utils/validateMongodbId');

// Create category
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await blogCategory.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

// update category
const updateCategory = asyncHandler(async (req, res) => {
    try {
        const updateCategory = await blogCategory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error);
    }
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
    validateMongoDbId(req.params.id);
    try {
        const deleteCategory = await blogCategory.findByIdAndDelete(req.params.id);
        res.json('Category deleted successfully');
    } catch (error) {
        throw new Error(error);
    }
});

// get all categories
const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const getCategories = await blogCategory.find({});
        res.json(getCategories);
    } catch (error) {
        throw new Error(error);
    }
});

// get a category
const getaCategory = asyncHandler(async (req, res) => {
    validateMongoDbId(req.params.id);
    try {
        const getCategory = await blogCategory.findById(req.params.id);
        res.json(getCategory);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createCategory, updateCategory, deleteCategory, getAllCategories, getaCategory };
