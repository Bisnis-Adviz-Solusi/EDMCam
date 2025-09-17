import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  googleId: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
