import mongoose from "mongoose";

const { Schema } = mongoose;

//use compound indexes for name, description, and category
//see documentation: https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
const productSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
    },
    stock: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Product", productSchema);
