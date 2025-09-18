dotenv().config;
// REQUIRE JWT
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

// CREATE ARROW FUNCTION
const authentication = async (req, res, next) => {
  // USE TRY CATCH
  try {
    // GET TOKEN FROM HEADERS (AUTHORIZATION)
    const dataHeader = req.headers["authentication"];
    // SPLIT HEADER TO GET TOKEN
    const token = dataHeader && dataHeader.split(" ")[1];

    // VALIDATE IF NO TOKEN RETURN ERROR
    if (!token) {
      res.status(401).json({
        message: "Token not found",
      });
    }

    // DECLARE VARIABLE FOR JWT.VERIFY()
    const verifyToken = jwt.verify(token, secret);
    console.log("DECODED(AUTH.JS)>>>>>", verifyToken);

    if (!verifyToken) {
      return res(401).json({
        message: "Invalid Token",
      });
    }
    req.user = verifyToken;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Invalid Server Error (token)",
    });
  }
};

export default authentication;
