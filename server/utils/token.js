require("dotenv").config;
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

const getSignInToken = async (_id) => {
  return jwt.sign({ _id }, jwtSecret, {
    expiresIn: "7d",
  });
};

