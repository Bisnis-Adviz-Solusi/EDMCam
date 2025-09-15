import mongoose from mongoose
const { Schema } = mongoose

const refundItemSchema = new Schema({
    quantity:{
        type: Number,
        required: true
    },
    unitPriceSnapshots:{
        type: Number,
        required: true
    },
    totalPriceRefundIntems:{
        type: Number,
        required: true
    },
    refundId:{
        type: Schema.Types.ObjectId,
        ref: "Refund",
        required: true
    },
    orderItemId:{
        type: Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true
    }
},{timestamps: false})