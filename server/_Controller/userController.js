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
        message: "Password should include unique character",
      });
    }

    //PASS REGEX (VALIDATOR)
    if (!validator.isStrongPassword(password, { minLength: 6 })) {
      return res.status(400).json({
        message: "Password should include unique character",
      });
    }

    //CONFIRM PASSWORD
    if (confirmPassword !== password) {
      return res.status(400).json({
        message: "Password does not match!",
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
    ("");
    //HASH PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

    //CONFIRM PASSWORD (MANUAL)
    if (confirmPassword !== password) {
      return res.status(400).json({
        message: "Password does not match!",
      });
    }

    //CHECK USER EXIST
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User with this email already exist",
      });
    }

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

    if (!email || !password) {
      return res.status(400).json({
        message: "Fill all forms",
      });
    }
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
        _id: user._id,
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
      message: "Invalid Server Error (Login)",
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
    //REQ PARAMS
    const { name } = req.params;
    //GET SESUAI PARAM
    const getName = await User.findOne({ name: { $regex: name, $options: "i" } });
    //VALIDASI
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
    const { _id } = req.params;
    const { name, phoneNumber, password, confirmPassword, email } = req.body;

    // const userData = await User.findById(_id);
    // console.log("USER DATA==>", userData);
    // console.log("USER email==>", userData.email);
    // console.log("ini PARAM ID", _id);
    // console.log("ini yang dari login", req.user._id);

    //VALIDASI YANG LOGIN SIAPA
    if (String(req.user._id) !== String(_id) && req.user.role !== "admin") {
      return res.status(400).json({ message: "Not Authorized to change this user" });
    }

    const userData = await User.findById(_id);
    // console.log("data user yang mau diubah", userData);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    //VALID PHONE NUMBER
    if (phoneNumber) {
      if (!validator.isMobilePhone(phoneNumber)) {
        return res.status(400).json({ message: "Invalid Phone Number" });
      }
      userData.phoneNumber = phoneNumber;
    }

    //VALID EMAIL
    if (email) {
      if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
      }

      // CARI DI DB KALO ADA ORANG LAIN PAKE EMAIL ITU DENGAN ID YANG BEDA KECUALI ID DIA
      const emailExist = await User.findOne({ email });
      //  ERROR UPDATE USER DATA 500 ==> TypeError: Cannot read properties of null (reading '_id')
      //GIMANA BJIR GANGETI
      //KALO EMAIL EXIST CEK ID
      //brrti kalo email sama id sama dia ga ngirim respon,
      if (emailExist) {
        if (req.params._id !== emailExist._id.toString()) {
          //KALO ADA SKIP
          // console.log("INI REQ PARAMS ID", typeof req.params._id);
          // console.log("INI EMAIL EXIST ID", typeof emailExist._id.toString());
          // console.log("INI EMAIL EXIST PUNYA ORANG BANG", emailExist);
          //note: emailExist._id itu bentuknya object gan
          return res.status(400).json({ message: "Email already registered" });
        }
      }
      userData.email = email;
    }

    //CHECK PASSWORD LENGTH
    if (password !== undefined && password !== null && password !== "") {
      if (password.length < 6) {
        return res.status(400).json({ message: "Password should at least 6 characters" });
      }
      //PASSNYA UNIQ
      if (!validator.isStrongPassword(password, { minLength: 6 })) {
        return res.status(400).json({ message: "Password should include numbers and unique characters" });
      }
      //PASSWORDNYA MATCH
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Password does not match!" });
      }
      const hashed = await bcrypt.hash(password, 10);
      userData.password = hashed;
    }

    //IF USER CUMA ISI BEBERAPA DATA
    //JADI PAKE ..REQ.BODY BIAR AMBIL DATA SEBELUMNYA
    const dataFilledByUser = { ...req.body };
    console.log("DATA YANG DIISI USER", dataFilledByUser);
    //KEY ITU NAMA PROPERTY/ ELEMENTNYA (KEK NAME, PHONE NUMBER DLL)
    for (let key in dataFilledByUser) {
      //KALO ADA DATA UNDEFINED, KEY LAMA DIPUSH KE YANG BARU
      if (dataFilledByUser[key] !== undefined && dataFilledByUser[key] !== "" && dataFilledByUser !== null) {
        userData[key] = dataFilledByUser[key];
      }
    }

    const updateData = await userData.save();
    console.log("INI DATA YANG DI UPDATE (UPDATE BY USER) ===>", updateData);

    return res.status(200).json({ updateData, message: "Update user data success!" });
  } catch (error) {
    console.log("ERROR UPDATE USER DATA 500 ==>", error);
    return res.status(500).json({ message: "Invalid Server Error (UPDATE USER DATA)" });
  }
};

//===============//

const deleteUserbyId = async (req, res) => {
  try {
    const { _id } = req.params;
    const userExist = await User.exists({ _id });
    if (!userExist) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    if (req.user._id !== _id && req.user.role !== "admin") {
      return res.status(401).json({ message: "Not Authorized to delete this user" });
    }
    const deleteUser = await User.findByIdAndDelete(_id);
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
