//Database와 연결

import mongoose from "mongoose";


mongoose.connect(
    "mongodb://localhost:27017/WeTube", // 여기서 우리한테 요청하는건 string으로 된 Database, 어디에 Database가 저장되어있는지 알려줌
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