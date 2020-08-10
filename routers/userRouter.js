import express from "express";
import routes from "../routes";
import { editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);

export default userRouter; 
