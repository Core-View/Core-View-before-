const loginService = require("../services/loginService.js");

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (loginService.authenticate(username, password)) {
    res.status(200).send("로그인이 성공적으로 처리되었습니다.");
  } else {
    res.status(401).send("인증에 실패하였습니다. 올바른 사용자 이름과 비밀번호를 입력해주세요.");
  }
};

module.exports = { login };