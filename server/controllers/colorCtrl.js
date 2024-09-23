const asyncHandler = require("express-async-handler");
const Color = require("../models/colorModel");
const validateMongoDbId = require("../utils/validateMongodbId");

// Create Color
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

// update Color
const updateColor = asyncHandler(async (req, res) => {
  try {
    const updateColor = await Color.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updateColor);
  } catch (error) {
    throw new Error(error);
  }
});

// delete Color
const deleteColor = asyncHandler(async (req, res) => {
  validateMongoDbId(req.params.id);
  try {
    const deleteColor = await Color.findByIdAndDelete(req.params.id);
    res.json("Color deleted successfully");
  } catch (error) {
    throw new Error(error);
  }
});

// get all categories
const getAllColor = asyncHandler(async (req, res) => {
  try {
    const getColor = await Color.find({});
    res.json(getColor);
  } catch (error) {
    throw new Error(error);
  }
});

// get a Color
const getaColor = asyncHandler(async (req, res) => {
  validateMongoDbId(req.params.id);
  try {
    const getColor = await Color.findById(req.params.id);
    res.json(getColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createColor,
  updateColor,
  deleteColor,
  getAllColor,
  getaColor,
};
