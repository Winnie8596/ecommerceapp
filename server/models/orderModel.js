const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  // {
  //   products: [
  //     {
  //       product: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: "Product",
  //       },
  //       count: Number,
  //       color: String,
  //     },
  //   ],
  //   paymentIntent: {},
  //   orderStatus: {
  //     type: String,
  //     default: "Not Processed",
  //     enum: [
  //       "Not Processed",
  //       "Cash on Delivery",
  //       "Processing",
  //       "Dispatched",
  //       "Cancelled",
  //       "Delivered",
  //     ],
  //   },
  //   orderby: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // },
  // { timestamps: true }
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        requried: true,
      },
      city: {
        type: String,
        requried: true,
      },
      state: {
        type: String,
        requried: true,
      },
      other: {
        type: String,
        requried: true,
      },
      postcode: {
        type: Number,
        requried: true,
      },
    },
    paymentInfo: {
      razorpayOrderId: {
        type: String,
        required: true,
      },
      razorpayPaymentId: {
        type: String,
        required: true,
      },
    },

    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        color: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Color",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    month: {
      type: String,
      default: new Date().getMonth(),
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalPriceAfterDiscount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Ordered",
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
