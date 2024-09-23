const asyncHandler = require("express-async-handler");
const Brand = require("../models/brandModel");
const validateMongoDbId = require("../utils/validateMongodbId");

// Create Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

// update Brand
const updateBrand = asyncHandler(async (req, res) => {
  try {
    const updateBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updateBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// delete Brand
const deleteBrand = asyncHandler(async (req, res) => {
  validateMongoDbId(req.params.id);
  try {
    const deleteBrand = await Brand.findByIdAndDelete(req.params.id);
    res.json("Brand deleted successfully");
  } catch (error) {
    throw new Error(error);
  }
});

// get all categories
const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const getBrand = await Brand.find({});
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// get a Brand
const getaBrand = asyncHandler(async (req, res) => {
  validateMongoDbId(req.params.id);
  try {
    const getBrand = await Brand.findById(req.params.id);
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrand,
  getaBrand,
};
