import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join "});
};

export const postJoin = (req, res) => { //method가 post인(join.pug) 경로에서만 작동
  const {
    body: { name, email, password, password2 }
  } = req; 
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join "}); //post로 이동해서 join화면을 render
  } else {
    //To Do: Register User
    //To Do: Log user in
    res.redirect(routes.home); //위에다 import routes를 해줘야함(외부디렉토리형식으로)
  }   
};
// join하면 login창으로가고 그다음 home화면으로 갈 수 있게 하려고 -> globalRouter.js에서도 이름 변경

export const login = (req, res) => res.render("login", { pageTitle: "Log In"} );
export const logout = (req, res) => res.render("logout", { pageTitle: "Log Out"});
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password"});

/*
res.send말고 HTML 페이지를 넘기려면 res.render or res.redirect를 써야함
인자안에 텍스트 이름이 pug 파일 이름과 같아야함 그래야 render 함수 자체가 views폴더로 가서 
알아서 함수 인자로 들어온 텍스트와 views 폴더에 있는 파일을 매칭해서 그 HTML을 뿌려줌
*/


