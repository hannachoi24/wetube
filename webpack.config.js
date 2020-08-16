const path = require("path"); // path는 컴퓨터나 서버에서의 전체 경로를 갖게 하는 것
const ExtractCSS = require("extract-text-webpack-plugin"); //웹팩에게 CSS를 가지고 뭘 어떻게 할지 알려 줄 수 있음

const MODE = process.env.WEBPACK_ENV; // env를 받음, package,json에 있는 이름과 같아야함
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // ENTRY는 파일들이 어디에서 왔는가?
const OUTPUT_DIR = path.join(__dirname, "static"); // OUTPUT은 파일들을 어디에 넣을 것인가?, "static" 이라는 폴더로 보내라(export) 할 것임

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(scss)$/, // scss파일을 찾아줌
        use: ExtractCSS.extract([
          {
            loader: "css-loader", // webpack이 CSS를 이해할 수 있도록 가르쳐줌
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ]), // 웹팩은 작성할 때와는 반대 순서로 실행
      },
    ],
  },
  output: {
    // output은 객체여야함
    path: OUTPUT_DIR,
    filename: "[name].[format]",
  },
};

module.exports = config;
