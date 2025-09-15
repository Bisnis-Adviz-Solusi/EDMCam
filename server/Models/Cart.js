import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    totalPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    cartItemsId: {
      type: [Schema.Types.ObjectId],
      ref: "CartItem",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
