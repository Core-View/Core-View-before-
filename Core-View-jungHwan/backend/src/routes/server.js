const express = require("express");
const app = express();
const cors = require("cors");
const signUpRouter = require("./signUpRouter.js");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/sign", signUpRouter);



// 회원가입 라우터 추가
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  console.log("회원가입 정보:");
  console.log("이름:", username);
  console.log("이메일:", email);
  console.log("비밀번호:", password);
  res.status(200).send("회원가입이 완료되었습니다.");
});

console.log(process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
