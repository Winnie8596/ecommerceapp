const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
    createEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getAllEnquiry,
    getaEnquiry,
} = require('../controllers/enqCtrl');

// Create Enquiry
router.post('/create-enquiry', createEnquiry);

// Update Enquiry
router.put('/:id', authMiddleware, isAdmin, updateEnquiry);

// delete Enquiry
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry);

// get all Enquiry
router.get('/', getAllEnquiry);

// get a Enquiry
router.get('/:id', getaEnquiry);

module.exports = router;
