import mongoose, { mongo, Schema } from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userPhoneNumber: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["On Going", "Done", "Failed"],
    required: true,
  },
  grandTotal: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  isDeleted: {
    type: Boolean,
  },
  itemId: {
    type: [Schema.Types.ObjectId],
    ref: "Item",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.Model("Order", orderSchema);
