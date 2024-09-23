const express = require('express');
const { uploadImage, deleteImage } = require('../controllers/uploadCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { uploadPhotoProduct, productImgResize } = require('../middlewares/uploadImages');

const router = express.Router();

// upload img
router.post(
    '/',
    authMiddleware,
    isAdmin,
    uploadPhotoProduct.array('images', 10),
    productImgResize,
    uploadImage,
);

// delete img
router.delete('/delete-image/:id', authMiddleware, isAdmin, deleteImage);

module.exports = router;
