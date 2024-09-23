const asyncHandler = require("express-async-handler");
const { uploadImg, deleteImg } = require("../utils/cloudinary");
const fs = require("fs");

// uplaod image
const uploadImage = asyncHandler(async (req, res) => {
  const uploader = (path) => uploadImg(path, "images");
  const urls = [];

  // Check if req.files exists and is iterable
  if (req.files && req.files.length > 0) {
    try {
      for (const file of req.files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path); // Clean up original file
      }
      const images = urls.map((file) => file);
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Error uploading files" });
    }
  } else {
    res.status(400).json({ error: "No files were uploaded" });
  }
});

// delete image
const deleteImage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = deleteImg(req.params.id, "images");
    res.json({
      message: "Image deleted successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  uploadImage,
  deleteImage,
};
