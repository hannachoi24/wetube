const path = require("path"); // path는 컴퓨터나 서버에서의 전체 경로를 갖게 하는 것
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //웹팩에게 CSS를 가지고 뭘 어떻게 할지 알려 줄 수 있음

const MODE = process.env.WEBPACK_ENV; // env를 받음, package,json에 있는 이름과 같아야함
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // ENTRY는 파일들이 어디에서 왔는가?
const OUTPUT_DIR = path.join(__dirname, "static"); // OUTPUT은 파일들을 어디에 넣을 것인가?, "static" 이라는 폴더로 보내라(export) 할 것임

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    // 모듈을 발견할 때 마다 다음의 rules를 따르라
    rules: [
      {
        test: /\.(js)$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss)$/, // scss파일을 만나게 되면
        use: [
          MiniCssExtractPlugin.loader,
          // 이 plugin(텍스트 추출)을 사용하도록 (내부에서는 SCSS파일을 일반적인 CSS로 통역)
          "css-loader", // webpack이 CSS를 이해할 수 있도록 가르쳐줌

          {
            loader: "postcss-loader", // CSS를 받아서, 우리가 postcss에 주는 plugin을 가지고 CSS를 변환(CSS 호환성 관련된 것 해결)
            options: {
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })]; // cover 99.5%는 거의 모든 브라우저와 호환
              },
            },
          },
          "sass-loader",
        ], // 웹팩은 작성 한 거 와는 반대 순서로 실행
      },
    ],
  },
  output: {
    // output은 객체여야함
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ], // ("저장할파일")
  stats: {
    entrypoints: false,
    children: false,
  },
};

module.exports = config;
