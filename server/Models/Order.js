import mongoose, { Schema } from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userNameSnapshot: {
      type: String,
      required: true,
    },
    userPhoneNumberSnapshot: {
      type: Number,
      required: true,
    },
    userEmailSnapshot: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    statusOrder: {
      type: String,
      enum: ["PAID", "PACKED", "SHIPPED", "DELIVERED", "COMPLETED", "CANCELED"],
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    hasRefund: {
      type: Boolean,
    },
    //use partial indexes expression on controller.
    //see documentation: https://www.mongodb.com/docs/manual/core/index-partial/
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    itemId: {
      type: [Schema.Types.ObjectId],
      ref: "Item",
      required: true,
    },
    orderItemsId: {
      type: [Schema.Types.ObjectId],
      ref: "OrderItems",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refundId: {
      type: Schema.Types.ObjectId,
      ref: "Refund",
      default: null,
    },
    orderPaymentId: {
      type: Schema.Types.ObjectId,
      ref: "OrderPayment",
      required: true,
    },
  },
  //same thing as declaring createdAt and updatedAt fields.
  { timestamps: true },

  //avoid duplicate data if user spam clicks like they're in a stroke
  { collection: "Order", versionKey: true }
);

export default mongoose.model("Order", orderSchema);
