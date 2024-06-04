const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql"); // mysql 모듈 추가
const signUpRouter = require("./signUpRouter.js");
const loginRouter = require("./loginRouter.js");
const logoutRouter = require("./logoutRouter.js");

dotenv.config();

app.use(cors());
app.use(express.json());

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패: ', err);
    return;
  }
  console.log('MySQL 연결 성공');
});

// 회원가입 라우터
app.use("/signup", signUpRouter);

// 로그인 라우터
app.use("/login", loginRouter);

// 로그아웃 라우터
app.use("/logout", logoutRouter);

// 기본 루트 라우터
app.get("/", (req, res) => {
  res.send("환영합니다!");
});

app.listen(3000, () => {
  console.log("서버가 포트 3000에서 실행 중입니다.");
});
