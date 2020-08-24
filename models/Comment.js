import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now, // 현재 날짜를 반환하는 function
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;

/* video와 comment를 연결하는방법 #1: comment에 연결된 videoID를 줄것인가
    video: { 
        type: mongoose.Schema.Types.ObjectId, // 이 comment는 video와 연결되어 있음
        ref: "Video" // 어떤 objectID가 어느 model에서 온건지를 알려줌
    }
    */
