import mongoose from "mongoose";

const { Schema } = mongoose;

const orderPaymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    statusOrderPayment: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED", "CANCELLED", "EXPIRED"],
      required: true,
    },
    midtransOrderId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("OrderPayment", orderPaymentSchema);
