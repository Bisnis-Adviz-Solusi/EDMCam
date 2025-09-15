import mongoose from "mongoose";

const { Schema } = mongoose;

const statusRefundSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["REQUESTED", "APPROVED", "REJECTED", "PENDING", "FINISHED"],
    },
    changedBy: {
      type: String,
      enum: ["ADMIN", "SYSTEM"],
    },
  },
  { timestamps: true, _id: false }
);

const refundSchema = new Schema(
  {
    userNameSnapshot: {
      type: String,
      required: true,
    },
    userNumberSnapshot: {
      type: Number,
      required: true,
    },
    //jangan lupa validasi isEmail di controller
    userEmail: {
      type: String,
      required: true,
    },
    refundMethod: {
      type: String,
      enum: ["ITEM_RETURN", "MONEY_RETURN"],
      required: true,
    },
    midtransRefundId: {
      type: String,
    },
    reason: {
      type: String,
      required: true,
    },
    adminNote: {
      type: String,
    },
    statusRefund: {
      type: [statusRefundSchema],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
    },
    deletedAt: {
      type: Date,
      required: fa,
      lse,
    },
    refundItemId: {
      type: [Schema.Types.ObjectId],
      ref: "RefundItem",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Refund", refundSchema);
