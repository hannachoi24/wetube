import express from "express";
import passport from "passport";
import routes from "../routes"; // 이 디렉토리 바깥에서 실행되야되기 때문에 ../
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
  githubLogin,
  postGithubLogIn,
  getMe,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin); // postJoin에서 가입을 시킬 것이고 그 정보를 postLogin에 전달해 로그인 시킴

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home); // home은 controllers/videoController에서 home을 auto import함 -> export 해줬을 때만 작동
globalRouter.get(routes.search, search); // search도 마찬가지
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin); // githubLogin는 우리를 깃헙웹사이트로 보내주는 역할

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn // userController에 있음
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
