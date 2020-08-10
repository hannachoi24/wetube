import express from "express";
import routes from "../routes"; // 이 디렉토리 바깥에서 실행되야되기 때문에 ../
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home); // home은 controllers/videoController에서 home을 auto import함 -> export 해줬을 때만 작동
globalRouter.get(routes.search, search); // search도 마찬가지
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);





export default globalRouter;