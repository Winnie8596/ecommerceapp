const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
    createCoupon,
    getAllCoupons,
    getACoupons,
    updateCoupon,
    deleteCoupon,
} = require('../controllers/couponCtrl');

// Create coupon
router.post('/create-coupon', authMiddleware, isAdmin, createCoupon);

// get all coupons
router.get('/', authMiddleware, isAdmin, getAllCoupons);

// get a coupons
router.get('/:id', authMiddleware, isAdmin, getACoupons);

// update coupon
router.put('/:id', authMiddleware, isAdmin, updateCoupon);

// delete coupon
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
