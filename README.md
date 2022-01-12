📺 [WeTube]

## WeTube

Node.js를 사용하여 나만의 Youtube 만들어보기  
Create your own Youtube site using Node.js.
![Youtube (1)](https://user-images.githubusercontent.com/66726731/149139194-99ae0071-dc48-40ab-b1d0-66132a64367e.png) ![Youtube(2)](https://user-images.githubusercontent.com/66726731/149139454-ff8d95ee-6bb6-415e-83ac-69d02f46644e.jpg) 
![Youtube(4)](https://user-images.githubusercontent.com/66726731/149139556-c280405d-839e-4518-bec1-b764ce808e9d.jpg)


## Configuration

1. Frontend: Vanilla.js(Pug Template)
2. Backend : Node.js
3. Database: mongoDB Atlas
4. A W S : EC2(Ubuntu), S3

## Quickstart

### Prerequisite

- node v12.x
- npm 6.x

### Required File

위 저장소를 클론한 후 /myYoutube 위치에 .env 파일을 추가해주세요. 내용은 다음과 같습니다.  
If you cloned this repo, please add the .env file in /myYoutube  
The .env file is ..

```sh
MONGO_URL = "mongodb://localhost:27017/yourDBname"
PORT = "Your port number"
COOKIE_SECRET = "anything"
GH_ID = "Your github developer Access ID"
GH_SECRET = "Your github developer Secret Key"
FB_ID = "Your facebook developer Access ID"
FB_SECRET = "Your facebook developer Secret Key"
AWS_KEY = "Your AWS IAM Access ID"
AWS_PRIVATEE_KEY = "Your AWS IAM Secret Key"
```

### Install

```sh
npm install
```

### Run program

Backend를 수정하고 서버를 실행하여 확인하고 싶다면 터미널에 다음과 같이 입력해주세요.  
If you modify your backend project and want to run the server for checking..

```sh
npm run dev:server
```

Frontend를 수정하고 서버상에서 어떻게 실행되는지 확인하고 싶다면 터미널에 다음과 같이 입력해주세요.  
If you modify your frontend project and want to check the change on server..

```sh
npm run dev:assets
```

가급적이면 터미널을 분할하여 두 내용을 다 실행시킨 후에 작업하시는 것도 좋습니다.  
I just recommend run both at the same time.

## Reference links

[Passport JS](http://www.passportjs.org/)  
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web)  
[Github Developer](https://developer.github.com/program/)  
[Facebook Developer](https://developers.facebook.com/)  
[Webpack-cli](https://www.npmjs.com/package/webpack-cli)  
[Multer-S3](https://www.npmjs.com/package/multer-s3)  
[Mongoose](https://mongoosejs.com/)  
[Axios](https://www.npmjs.com/package/axios)  
[AWS SDK](https://aws.amazon.com/ko/sdk-for-node-js/)

![image](https://user-images.githubusercontent.com/66726731/113316637-8b116200-9349-11eb-84ef-052c4f405ad7.png)


## Pages:

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [x] Video Detail
- [x] Edit Video

## Contact

이용하시다가 궁금한 점이 있으시면 이쪽으로 연락 부탁드립니다.  
최한나 - hnc24@naver.com
