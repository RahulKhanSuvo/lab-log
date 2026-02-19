import { Router } from "express";
import { userController } from "./user.controller";

const userRouter = Router()
userRouter.post("/register", userController.userRegister)
userRouter.post("/login", userController.loginUser)
export default userRouter