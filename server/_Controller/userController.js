dotenv().config;
import User from "../_Models/User.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../_Models/User.js";
const secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const { name, phoneNumber, email, password, confirmPassword, role } = req.body;

    //VALIDASI

    //EMPTY FORM
    if (!email || !password || !confirmPassword || !phoneNumber || !name) {
      return res.status(400).json({
        message: "Fill all forms",
      });
    }

    // CHECK VALID PHONE NUMBER
    if (!validator.isMobilePhone(phoneNumber, "id-ID")) {
      return res.status(400).json({
        message: "Invalid phone number",
      });
    }

    //CHECK VALID EMAIL
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    //CHECK PASSWORD LENGTH
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password should at least 6 character",
      });
    }

    //PASS REGEX (MANUAL)
    const regex = [/[a-z]/, /[A-Z]/, /\d/, /[@.#$!%^&*.?]/];
    //.every() soa
    const isStrong = regex.every((element) => element.test(password));
    if (!isStrong) {
      return res.status(400).json({
        message: "Password is not strong enough",
      });
    }

    //PASS REGEX (VALIDATOR)
    if (!validator.isStrongPassword(password, { minLength: 6 })) {
      return res.status(400).json({
        message: "Password is not strong enough",
      });
    }

    //CONFIRM PASSWORD
    if (confirmPassword !== password) {
      return res.status(400).json({
        message: "Password do not match",
      });
    }

    //CHECK USER EXIST
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User with this email already exist",
      });
    }

    //HASH PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

    //CREATE USER
    const createUser = await User.create({
      name,
      email,
      password: hashPassword,
      phoneNumber,
      role: "customer",
    });
    return res.status(200).json({
      createUser,
      message: "Register user successfull",
    });
  } catch (error) {
    console.log("THIS IS ERROR>>>", error);
    return res.status(500).json({
      message: "Invalid server Error",
    });
  }
};

//===============//

const login = async (req, res) => {
  try {
    //REQUEST BODY DATA
    const { email, password } = req.body;

    //FUNCTION FOR FIND USER FROM DATABASE
    const user = await User.findOne({ email });
    //VALIDATE IF USER NOT FOUND
    if (!user) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    //CHECK PASSWORD
    //COMPARE PASSWORD USING BCRYPT
    const isMatch = await bcrypt.compare(password, user.password);

    //VALIDATE IF PASSWORD NOT MATCH
    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    //CREATE JWT TOKEN
    const createToken = jwt.sign(
      {
        id: _id,
        email: user.email,
      },
      secret,
      { expiresIn: "3d" }
    );
    res.status(200).json({
      createToken,
      message: "Login success",
    });
  } catch (error) {
    console.log("ERROR BG ==>", error);
    return res.status(500).json({
      message: "Invalid Server Error",
    });
  }
};

export default {
  register,
  login,
};
