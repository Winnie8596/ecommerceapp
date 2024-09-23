const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
    createColor,
    updateColor,
    deleteColor,
    getAllColor,
    getaColor,
} = require('../controllers/colorCtrl');

// Create Color
router.post('/create-color', authMiddleware, isAdmin, createColor);

// Update Color
router.put('/:id', authMiddleware, isAdmin, updateColor);

// delete Color
router.delete('/:id', authMiddleware, isAdmin, deleteColor);

// get all Color
router.get('/', getAllColor);

// get a Color
router.get('/:id', getaColor);

module.exports = router;
