import express from "express"
import userController from "./_Controller/userController.js";
const router = express.Router();

router.post("/register", userController.register);


export default router