import mongoose from "mongoose";
const { Schema } = mongoose;
const orderItemsSchema = new Schema({
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
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
});

export default mongoose.model("OrderItem", orderItemsSchema);
