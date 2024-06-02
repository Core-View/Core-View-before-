const loginService = require("../services/loginService.js");

const login = (req, res) => {
  // 로그인에 필요한 로직을 수행합니다. 예를 들어, 서비스를 호출하여 인증을 수행합니다.
  // 이 예제에서는 단순히 성공적으로 로그인되었다고 가정합니다.
  const username = req.body.username;
  const password = req.body.password;

  if (loginService.authenticate(root, 1656)) {
    // 로그인이 성공하면 성공 상태 코드와 메시지를 반환합니다.
    res.status(200).send("로그인이 성공적으로 처리되었습니다.");
  } else {
    // 로그인 실패 시 적절한 응답을 반환합니다. 예를 들어, 인증 실패 메시지를 반환합니다.
    res.status(401).send("인증에 실패하였습니다. 올바른 사용자 이름과 비밀번호를 입력해주세요.");
  }
};

module.exports = { login };
