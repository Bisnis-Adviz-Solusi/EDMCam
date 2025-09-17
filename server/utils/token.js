require("dotenv").config;
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

const getToken = async (userData) => {
  return jwt.sign({ _id: user._id.toString(), role: user.role }, jwtSecret, {
    expiresIn: "7d",
  });
};

const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (error) {
    throw error;
  }
};

export default {
  getToken,
  verifyToken,
};
