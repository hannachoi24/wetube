import dotenv from "dotenv";
import express from "express"; //express를 import 해줌
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose"; // mongoDB와의 연결을 하기위해
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import "./passport";

dotenv.config();

const app = express(); //express를 실행한 결과를 app 상수로 만들었음

const CokieStore = MongoStore(session);

// middleware

app.use(helmet()); //보안기능
app.set("view engine", "pug"); // (name, value)
app.use("/uploads", express.static("uploads")); // directory에서 file을 전달하는 middleware 함수(file만)
app.use("/static", express.static("static"));
app.use(cookieParser()); //cookie를 전달받아서 사용할 수 있도록 만들어주는 middleware
app.use(bodyParser.json()); //유저가 json을 전송하면 서버가 json을 이해할 수 있게
app.use(bodyParser.urlencoded({ extended: true })); //유저가 일반적인 html form을 전송한다면 서버가 urlencoded를 이해할 수 있게
app.use(morgan("dev")); //middleware을 먼저 그 다음 route 작성
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection }), // CokieStore와 mongo 간의 연결(CokieStore를 데이터베이스에 연결하기위해)
  })
);
app.use(passport.initialize()); // passport가 찾은 그 사용자를 req.user로 만들어줌
app.use(passport.session()); // cookieparser로부터 내려와 session 이라는 것을 저장시켜줌

app.use(localsMiddleware); //local변수에 접근하도록하기위해

app.use(routes.home, globalRouter); //검색, 홈 등등을 다룸
app.use(routes.users, userRouter); //누군가 /user 경로에 접속하면 이 Router 전체를 사용하겠다는 의미
app.use(routes.videos, videoRouter);

export default app; //누군가가 내 파일을 불러올 때(import) app obj를 주겠다는 의미(app.js를 init.js에서 사용)
