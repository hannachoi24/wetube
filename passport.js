import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy()); // Strategy는 로그인 하는 방법(어떤거로 로그인을 할지)

passport.serializeUser(User.serializeUser()); // 쿠키에는 오직 user.id만 담아서 보내도록함
passport.deserializeUser(User.deserializeUser());
