import express from "express";
import routes from "../routes";
import {  //page에 해당
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile); //userDetail보다 위에 있어야함 -> id가 editProfile로 인식
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter; 

/* 라우트를 만들지 않으면 페이지로 이동이 안됨 get method인 이유는 editProfile의 화면을 보려면 
일단 get으로 받아와야함 post method는 editProfile.pug의 내용들을 전달해줘야되기 때문 
*/
