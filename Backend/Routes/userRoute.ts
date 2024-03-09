import express from "express";
import userController from "../Controller/userController";
import { protect } from "../Middleware/authMiddleware";

const userRouter = express.Router();

userRouter.post("/api/createUser", userController.createUser);
userRouter.post("/api/loginUser", userController.loginUser);
userRouter.get("/api/getAllUsers", protect, userController.getAllUsers);
userRouter.get("/api/getUserById/:id", protect, userController.getUserById);
userRouter.put(
  "/api/updateUserById/:id",
  protect,
  userController.updateUserById
);
userRouter.delete(
  "/api/deleteUserById/:id",
  protect,
  userController.deleteUserById
);

export default userRouter;
