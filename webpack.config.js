const path = require("path"); // path는 컴퓨터나 서버에서의 전체 경로를 갖게 하는 것

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // ENTRY는 파일들이 어디에서 왔는가?
const OUTPUT_DIR = path.join(__dirname, "static"); // OUTPUT은 파일들을 어디에 넣을 것인가?, "static" 이라는 폴더로 보내라(export) 할 것임

const config = {
  entry: ENTRY_FILE,
  output: {
    // output은 객체여야함
    path: OUTPUT_DIR,
    filename: "[name].[format]",
  },
};

module.exports = config;
