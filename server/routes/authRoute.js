const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginAdmin,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPassword,
  resetPassword,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  // emptyCart,
  // applyCoupon,
  createOrder,
  // getOrder,
  // getAllOrder,
  // getOrderByUserId,
  // updateOrderStatus,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  getMonthWiseOrderIncome,
  getMonthWiseOrderCount,
  getYearlyTotalOrders,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  emptyCart,
} = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { checkout, paymentVerification } = require("../controllers/paymentCtrl");

// Register user
router.post("/register", registerUser);
// forgot password
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);
// update password
router.put("/password", authMiddleware, updatePassword);
// Login
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
// user add to cart
router.post("/cart", authMiddleware, userCart);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
// apply coupon
// router.post("/cart/apply-coupon", authMiddleware, applyCoupon);

// create order
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/all-users", getAllUsers);
router.get("/getmyorders", authMiddleware, getMyOrders);
router.get("/cart", authMiddleware, getUserCart);
// get user cart
// get wishlist
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/order/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/getmonthwiseorderincome", authMiddleware, getMonthWiseOrderIncome);
router.get("/getmonthwiseordercount", authMiddleware, getMonthWiseOrderCount);
router.get("/getyearlytotalorders", authMiddleware, getYearlyTotalOrders);
router.get("/:id", authMiddleware, isAdmin, getSingleUser);

// get orders
// router.post(
//   "/order/getorderbyuser/:id",
//   authMiddleware,
//   isAdmin,
//   getOrderByUserId
// );

// refresh token
router.post("/refresh", handleRefreshToken);

// logout
router.post("/logout", logoutUser);

// router.get("/order/get-orders", authMiddleware, getOrder);

router.get(
  "/order/getsingleorder/:id",
  authMiddleware,
  isAdmin,
  getSingleOrder
);
// router.put("/order/updateorder/:id", authMiddleware, isAdmin, updateOrder);

// delete user cart
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
// router.delete("/empty-cart", authMiddleware, emptyCart);

// update quantity
router.delete(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);

// Delete user
router.delete("/:id", authMiddleware, isAdmin, deleteUser);
// router.delete("/empty-cart", authMiddleware, emptyCart);

// update order status
// router.put(
//   "/order/update-order/:id",
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );

// Update user
router.put("/edit-user", authMiddleware, updateUser);

// save address
router.put("/save-address", authMiddleware, saveAddress);

// Block user
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

// Unblock user
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
