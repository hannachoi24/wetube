export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

/*
res.send말고 HTML 페이지를 넘기려면 res.render or res.redirect를 써야함
그리고 저기 안에 들어가는 택스트 이름이 pug 파일 이름과 같아야해 그래서 render 함수 자체가 views폴더로 가서 
알아서 함수 인자로 들어온 텍스트와 views 폴더에 있는 파일을 매칭해서 그 HTML을 뿌려줌
*/


