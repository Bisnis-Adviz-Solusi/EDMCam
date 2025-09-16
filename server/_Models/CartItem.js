import mongoose from "mongoose";

const { Schema } = mongoose;

const cartItemSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    unitPriceSnapshot: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    productId: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
      required: true,
    },
  },
  { timestamps: false }
);

export default mongoose.model("CartItem", cartItemSchema);
