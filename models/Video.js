// DB 모델을 작성한다.
// Video 자체를 DB에 저장하진 않을 것이다(서버에 저장). 즉, byte를 저장하는 것이 아니라 video의 link를 저장한다.

import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0 // 처음 video가 생성되면 views를 0이 되게함
    },
    createdAt: {
        type: Date,
        default: Date.now // 현재 날짜를 반환하는 function
    }
});
// 이제 이 스키마(definition)를 이용하여 model(document)을 만들어준다.
// 모델의 이름은 "Video", Video 모델의 스키마는 VideoSchema
const model = mongoose.model("Video", VideoSchema);
export default model;
// 모델이 만들어짐을 알리기 위해 init.js에 import 해준다.