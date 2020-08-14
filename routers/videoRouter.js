import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    getEditVideo,
    postEditVideo    
} from "../controllers/videoController"; 
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router(); //export const videoRouter = express.Router();는 이 변수만 export한다는 것 

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); // postUpload함수는 해당 file에 접근(URL방식으로)

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo); // deleteVideo는 string을 return하는 함수

export default videoRouter; //export default는 파일로(전체를) export한다는 것
                             