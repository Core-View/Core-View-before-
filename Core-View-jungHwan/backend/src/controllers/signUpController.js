const signUpService = require("../services/signUpService");
const mailer = require("./mailer.js");

const signUp = (req, res) => {
  const { username, email, password } = req.body;
  // 회원가입 서비스 호출
  const result = signUpService.signUp(username, email, password);
  if (result.success) {
    // 회원가입 성공 시 인증 이메일 전송
    const code = signUpService.create_code();
    mailer.sendMail(
      email,
      "<Core-view> 이메일 인증코드입니다",
      `<p>이메일 인증코드입니다. ${code}를 입력해주세요</p>`
    );
    res.status(200).json({ message: "회원가입이 성공적으로 완료되었습니다. 이메일로 전송된 코드를 확인하세요." });
  } else {
    res.status(400).json({ message: result.error });
  }
};

const auth = (req, res) => {
  const email = req.body.email;
  const code = signUpService.create_code();

  mailer.sendMail(
    email,
    "<Core-view> 이메일 인증코드입니다",
    `<p>이메일 인증코드입니다. ${code}를 입력해주세요</p>`
  );

  res.status(200).send({ code: code });
};

module.exports = { signUp, auth };
