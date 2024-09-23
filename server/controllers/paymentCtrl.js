const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: "rzp_test_h6HR4lvdPxzUCs",
  key_secret: "dJUvsxr7vIbF8k7ohcvWXUK2",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "MYR",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerification,
};
