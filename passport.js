import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy()); // Strategy는 로그인 하는 방법(어떤거로 로그인을 할지)

passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: "http://localhost:4000/auth/github/callback",
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser()); // 쿠키에는 오직 user.id만 담아서 보내도록함
passport.deserializeUser(User.deserializeUser());
