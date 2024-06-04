const loginService = require("../services/loginService");

const login = async (req, res) => {
  const { username, password } = req.body;

  console.log('로그인 시도:', username, password);

  try {
    const isAuthenticated = await loginService.authenticate(username, password);

    if (isAuthenticated) {
      // 인증 성공 시 성공 상태 코드와 메시지 반환
      res.status(200).send("로그인이 성공적으로 처리되었습니다.");
    } else {
      // 인증 실패 시 적절한 응답 반환
      res.status(401).send("인증에 실패하였습니다. 올바른 사용자 이름과 비밀번호를 입력해주세요.");
    }
  } catch (error) {
    // 서버 오류 시 응답
    res.status(500).send("서버 오류가 발생했습니다.");
  }
};

module.exports = { login };
