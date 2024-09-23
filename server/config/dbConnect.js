const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/crud");
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
