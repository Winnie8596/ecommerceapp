const asyncHandler = require('express-async-handler');
const Enquiry = require('../models/enqModel');
const validateMongoDbId = require('../utils/validateMongodbId');

// Create Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// update Enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
    try {
        const updateEnquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updateEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// delete Enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
    validateMongoDbId(req.params.id);
    try {
        const deleteEnquiry = await Enquiry.findByIdAndDelete(req.params.id);
        res.json('Enquiry deleted successfully');
    } catch (error) {
        throw new Error(error);
    }
});

// get all categories
const getAllEnquiry = asyncHandler(async (req, res) => {
    try {
        const getEnquiry = await Enquiry.find({});
        res.json(getEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// get a Enquiry
const getaEnquiry = asyncHandler(async (req, res) => {
    validateMongoDbId(req.params.id);
    try {
        const getEnquiry = await Enquiry.findById(req.params.id);
        res.json(getEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createEnquiry, updateEnquiry, deleteEnquiry, getAllEnquiry, getaEnquiry };
