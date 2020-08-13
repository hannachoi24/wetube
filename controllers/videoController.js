import routes from "../routes"; //default export할 때는 이런형식으로 import
import Video from "../models/Video";

export const home = async (req, res) => { //async는 JS가 어떤부분을 기다려주게함(JS는 한번에 많은일을해서 기다려주지않기때문에)
  try{
  const videos = await Video.find({}); //Database에 있는 모든 Video를 가져옴 
  res.render("home", { pageTitle: "Home", videos }); //render(템플릿, 템플릿에 추가할 정보가 담긴 객체) 함수의 인자로 템플릿 파일의 이름을 입력하면 됨(views폴더에 파일명이home이고 확장자가 pug인 것을 찾은 후 보여줌)
                                                     //home 템플릿에 videos가 전달됨
  } catch(error) {                                          
  console.log(error);
  res.render("home", { pageTitle: "Home", videos: [] });
  }                                                                                                    
};           

export const search = (req, res) => {
  const {query: { term: searchingBy }
} = req; //= const searchingBy = req,query.term 
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// upload 또한 upload를 준비하기 위한 get 페이지와 실제 데이터를 보내는 post 페이지가 필요하다.
export const getUpload = (req, res) => 
  res.render("upload", { pageTitle: "Upload"});

export const postUpload = async(req, res) => {
  const {                         // const { body, file } 를 통해 body와 file을 받아와 요청하는 정보들을 확인한다. 이는 pug와 db.js를 확인해야하는 듯 하다.
    body: { title, description },
    file: { path } // 파일을 form으로 부터 받아올 필요없어짐
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title, // 위와같음
    description
    // 여기있는 fileUrl, title, description은 videoDB의 속성이다.  
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
}; 


export const videoDetail = (req, res) => 
  res.render("videoDetail", { pageTitle: "Video Detail"});

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => 
  res.render("deleteVideo", { pageTitle: "Delete Video"});



