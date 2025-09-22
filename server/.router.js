import express from "express";
import userController from "./_Controller/userController.js";
import authentication from "./middleware/authentication.js";
import authorization from "./middleware/authorization.js";
const router = express.Router();

//USER ROUTER
router.post("/registerCustomer", userController.registerCustomer);
router.post("/registerAdmin", userController.registerAdmin);
router.post("/login", userController.login);
router.get("/users", authentication, authorization("admin"), userController.getAllUsers);
router.get("/user/:name", authentication, authorization("admin"), userController.getUserbyName);
router.put("/user/:_id", authentication, userController.updateUserbyUser);
router.delete("/user/:_id", authentication, userController.deleteUserbyId);

export default router;
