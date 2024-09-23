const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getaBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  disLikeBlog,
  uploadImage,
} = require("../controllers/blogCtrl");
const {
  uploadPhotoBlog,
  blogImgResize,
} = require("../middlewares/uploadImages");

// Create blog
router.post("/create-blog", authMiddleware, isAdmin, createBlog);

// upload img
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhotoBlog.array("images", 2),
  blogImgResize,
  uploadImage
);

// like blog
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, disLikeBlog);

// Update blog
router.put("/:id", authMiddleware, isAdmin, updateBlog);

// get a blog
router.get("/:id", getaBlog);

// get all blogs
router.get("/", getAllBlogs);

// delete a blog
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
