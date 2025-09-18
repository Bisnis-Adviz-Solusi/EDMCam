import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
  try {
    // 1. GET TOKEN DARI HEADER "AUTHORIZATION"
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // 2. VALIDASI KALO TOKEN NGGAK ADA
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    // 3. VERIFY TOKEN
    const decoded = jwt.verify(token, secret);
    console.log("DECODED PAYLOAD >>>>", decoded);

    // 4. SIMPAN DECODE KE REQ.USER
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authentication;
