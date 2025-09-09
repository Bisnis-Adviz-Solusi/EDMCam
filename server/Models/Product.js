import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
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
    updatedAt: {
        type: Date,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
});

export default mongoose.model("Product", productSchema);
