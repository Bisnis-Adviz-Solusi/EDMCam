import mongoose from "mongoose";
const { Schema } = mongoose;

const inventoryMovementSchema = new Schema(
  {
    /*{
update stok item biar ga over
x = item
RESERVED: x lagi dipesan customer tapi belum dibayar,
COMMIT: x udah dibayar cuma belom dikirim,
DELIVERED: x lagi dikirim,
RESTOCK: Stock x ditambahin,
ADJUST: Admin bikin kesalahan jadi harus adjust x nya (basically cepu)
}*/
    movementType: {
      type: String,
      enum: ["RESERVED", "COMMIT", "DELIVERED", "RESTOCK", "ADJUST"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    //asal berubahnya
    referenceType: {
      type: String,
      enum: ["REFUND", "ORDER", "ADJUST"],
      required: true,
    },
    refundId: {
      type: Schema.Types.ObjectId,
      ref: "Refund",
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("InventoryMovement", inventoryMovementSchema);
