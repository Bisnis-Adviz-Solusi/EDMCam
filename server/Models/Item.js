import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

export default mongoose.Model("Item", itemSchema);
