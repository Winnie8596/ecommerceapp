const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getaCategory,
} = require('../controllers/categoryCtrl');

// Create category
router.post('/create-category', authMiddleware, isAdmin, createCategory);

// Update category
router.put('/:id', authMiddleware, isAdmin, updateCategory);

// delete category
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);

// get all categories
router.get('/', getAllCategories);

// get a category
router.get('/:id', getaCategory);

module.exports = router;
