const signUpService = require("../services/signUpService.js");
const mailer = require("./mailer.js");

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

module.exports = { auth };
