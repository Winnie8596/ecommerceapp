const stripe = require("../config/stripe");

const instance = new Razorpay({
  key_id: "rzp_test_h6HR4lvdPxzUCs",
  key_secret: "dJUvsxr7vIbF8k7ohcvWXUK2",
});

const checkout = async (req, res) => {
  try {
    const { amount } = req.body;
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_methos_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        {
          shipping_rate: "",
        },
      ],
    };

    const session = await stripe.checkout.session.create(params);
    res.status(303).json(session);
  } catch (err) {
    res.json({
      message: error?.message || error,
      error: true,
      success: false,
    });
  }

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
