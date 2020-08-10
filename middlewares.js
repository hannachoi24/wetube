import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next(); //미들웨어가 커넥션과 라우트들 사이에 있어서 다음함수들(router)로 넘어가야함

}; //locals는 정보들을 템플릿, 컨트롤러 어디에서든 쓸 수 있음
   //locals에 로컬 변수를 저장하면, 이 변 수들을 템플릿에서 사용할 수 있음 -> 템플릿을 직접 수정하지 않고 여기서 수정 하면 됨