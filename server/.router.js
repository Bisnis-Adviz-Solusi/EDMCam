import express from "express";
import userController from "./_Controller/userController.js";
const router = express.Router();

//USER ROUTER
router.post("/register", userController.registerCustomer);
router.post("/register", userController.registerAdmin);
router.post("/login", userController.login);
router.get("/users", userController.getAllUsers);
router.get("/user/:name", userController.getUserbyName);
router.put("/user/:id", userController.updateUserbyUser);
router.delete("/user/:id", userController.deleteUserbyId)

export default router;
