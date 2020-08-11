import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo    
} from "../controllers/videoController"; 

const videoRouter = express.Router(); //export const videoRouter = express.Router();는 이 변수만 export한다는 것 

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter; //export default는 파일로(전체를) export한다는 것
                             