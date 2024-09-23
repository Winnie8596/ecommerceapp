const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrand,
  getaBrand,
} = require("../controllers/brandCtrl");

// Create Brand
router.post("/create-brand", authMiddleware, isAdmin, createBrand);

// Update Brand
router.put("/:id", authMiddleware, isAdmin, updateBrand);

// delete Brand
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

// get all Brand
router.get("/", getAllBrand);

// get a Brand
router.get("/:id", getaBrand);

module.exports = router;
