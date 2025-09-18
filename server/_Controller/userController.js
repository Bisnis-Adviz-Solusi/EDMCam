import dotenv from "dotenv";
import User from "../_Models/User.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const registerCustomer = async (req, res) => {
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

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    //VALIDASI

    //EMPTY FORM
    if (!email || !password || !confirmPassword || !name) {
      return res.status(400).json({
        message: "Fill all forms",
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
      role: "admin",
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
        role: user.role,
      },
      secret,
      { expiresIn: "3d" }
    );
    res.status(200).json({
      createToken,
      message: "Login success",
    });
    //DARI SINI KE VERIFY TOKEN MIDDLEWARE
  } catch (error) {
    console.log("ERROR (USER CONTROLLER LOGIN) ==>", error);
    return res.status(500).json({
      message: "Invalid Server Error",
    });
  }
};

//===============//

const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find();
    return res.status(200).json({ allUser, message: "All User Found" });
  } catch (error) {
    console.log("INI ALL USER GAK ADA (USER CONTROLLER) ==>", error);
    return res.status(500).json({
      message: "Invalid Server Error (GET ALL USER)",
    });
  }
};

//===============//

const getUserbyName = async (req, res) => {
  try {
    const { name } = req.params;
    const getName = await findOne({ name });
    if (!getName) {
      return res.status(400).json({ message: "User Not Found" });
    }
    return res.status(200).json({ getName, message: "User Found" });
  } catch (error) {
    console.log("USER BY NAME ERROR GAN ==>", error);
    return res.status(500).json({
      message: "Invalid Server Error (GET USER BY NAME)",
    });
  }
};

//===============//

const updateUserbyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNumber, password, confirmPassword, email } = req.body;
    console.log("ini PARAM ID", id);
    console.log("ini yang dari login", req.user._id);
    //VALIDASI YANG LOGIN SIAPA
    if (req.user._id !== id || req.user.role !== "admin") {
      return res.send(401).json({ message: "Not Authorized to change this user" });
    }

    const updateData = await User.findByIdAndUpdate(id, {
      name,
      phoneNumber,
      password,
      email,
    });
    console.log("INI DATA YANG DI UPDATE (UPDATE BY USER) ===>", updateData);
    return res.send(200).json({ updateData, message: "Update user data success!" });
  } catch (error) {
    console.log("ERROR UPDATE USER DATA 500 ==>", error);
    return res.status(400).json({ message: "Invalid Server Error (UPDATE USER DATA)" });
  }
};

//===============//

const deleteUserbyId = async (req, res) => {
  try {
    const { _id } = req.params;
    if (req.user._id !== _id || req.user.role !== "admin") {
      return res.send(401).json({ message: "Not Authorized to change this user" });
    }
    const deleteUser = await User.findByIdAndDelete({ id });
    return res.status(200).json({
      deleteUser,
      message: "User deleted",
    });
  } catch (error) {
    console.log("ERROR DI DELETE USER ==>", error);
    return res.status(500).json({ message: "Invalid Server Error (DELETE USER)" });
  }
};

//===============//


export default {
  registerCustomer,
  registerAdmin,
  login,
  getAllUsers,
  getUserbyName,
  updateUserbyUser,
  deleteUserbyId,
};
