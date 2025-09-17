import User from "../_Models/User";
import validator from "validator";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { name, phoneNumber, email, password, confirmPassword } = req.body;

    //VALIDASI

    //EMPTY FORM
    if (!email || !password || !confirmPassword || !phoneNumber || !name) {
      return res.status(400).json({
        message: "Fill all forms",
      });
    }

    // CHECK VALID PHONE NUMBER
    if (!validator.isMobilePhone(phoneNumber, (locale = "id-ID"))) {
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
    if (password.length > 6) {
      return res.status(400).json({
        message: "Password should at least 6 character",
      });
    }

    //PASS REGEX (MANUAL)
    const regex = [
      /[a-z]/, // Lowercase
      /[A-Z]/, // Uppercase
      /\d/, // Digit
      /[@.#$!%^&*.?]/, // Special character
    ];

    if (!regex.test(password)) {
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
    const hashPassword = bcrypt.hash(password, 10);

    //CREATE USER
    const createUser = await User.create({
      name,
      email,
      password: hashPassword,
      phoneNumber,
      role,
    });
    return res.status(200).json({
      createUser,
      message: "Register user successfull",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Invalid server Error",
    });
  }
};
