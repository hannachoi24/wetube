import {videos} from "../db"; //home 화면에 접속하면 video 목록을 받아옴
import routes from "../routes"; //default export할 때는 이런형식으로 import

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos }); //render(템플릿, 템플릿에 추가할 정보가 담긴 객체) 함수의 인자로 템플릿 파일의 이름을 입력하면 됨(views폴더에 파일명이home이고 확장자가 pug인 것을 찾은 후 보여줌)
};                                                //home 템플릿에 videos가 전달됨
                                                                               
export const search = (req, res) => {
  const {query: { term: searchingBy }
} = req; //= const searchingBy = req,query.term 
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => 
  res.render("upload", { pageTitle: "Upload"});

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
}; 


export const videoDetail = (req, res) => 
  res.render("videoDetail", { pageTitle: "Video Detail"});

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => 
  res.render("deleteVideo", { pageTitle: "Delete Video"});



