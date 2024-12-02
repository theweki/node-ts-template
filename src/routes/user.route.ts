import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/").get(getUsers).post(createUser);

export { userRouter };
