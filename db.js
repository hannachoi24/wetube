//Database와 연결

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //dotenv.config함수로 .env 파일 안에 있는 정보를 불러올 수 있음

mongoose.connect(
   process.env.MONGO_URL,  // 찾은 모든 변수들을 process.env.key에 저장
   {
     useNewUrlParser: true,
     useFindAndModify: false
   }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB"); //connect을 열고 연결확인여부 함수 생성
const handleError = error => console.log('❌ Error on DB Connection:${error}');

db.once("open", handleOpen);
db.on("error", handleError);