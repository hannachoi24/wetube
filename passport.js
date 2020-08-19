import passport from "passport";
import User from "./models/User";

passport.use(User.creatStrategy()); // Strategy는 로그인 하는 방법(어떤거로 로그인을 할지)
