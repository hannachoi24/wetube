import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join " });
};

export const postJoin = async (req, res, next) => {
  // join을 처리하는 controller를 middleware로 탈바꿈
  //method가 post인(join.pug) 경로에서만 작동
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join " }); //post로 이동해서 join화면을 render
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};
// join하면 login창으로가고 그다음 home화면으로 갈 수 있게 하려고 -> globalRouter.js에서도 이름 변경

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
}); // local은 설치해준 Strategy의 이름

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  // cb는 passport에서 제공되는 callback함수(인증에 성공한 상황에서 호출됨)
  const {
    _json: { id, avatar_url: avataUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user); // 사용자 인증성공 또는 일치 그다음 쿠키에 저장
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avataUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.send(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To Do: Process Log Out
  req.logout();
  res.redirect(routes.home);
};

export const getMe = (req, res) => {
  // 해당 id를 가진 사용자를 아래 userDetail에서 찾도록 하는게 싫어서
  res.render("userDetail", { pageTitle: "User Detail", user: req.user }); // user(바로 지금 로그인한 사용자)를 req.user로 전달
  // userDetail 페이지는 user라는 obj를 전달받음
};

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

/*
res.send말고 HTML 페이지를 넘기려면 res.render or res.redirect를 써야함
인자안에 텍스트 이름이 pug 파일 이름과 같아야함 그래야 render 함수 자체가 views폴더로 가서 
알아서 함수 인자로 들어온 텍스트와 views 폴더에 있는 파일을 매칭해서 그 HTML을 뿌려줌
*/
