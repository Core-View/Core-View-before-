const signUpService = require("../services/signUpService");
const mailer = require("./mailer");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await signUpService.signUp(username, email, password);
    if (result.success) {
      const code = signUpService.create_code();
      await mailer.sendMail(
        email,
        "<Core-view> 이메일 인증코드입니다",
        `<p>이메일 인증코드입니다. ${code}를 입력해주세요</p>`
      );
      res.status(200).json({ message: "회원가입이 성공적으로 완료되었습니다. 이메일로 전송된 코드를 확인하세요.", code: code });
    } else {
      res.status(400).json({ message: result.error });
    }
  } catch (error) {
    console.error('Error in signUp controller:', error);
    res.status(500).json({ message: '서버 에러가 발생했습니다.' });
  }
};

const auth = async (req, res) => {
  const email = req.body.email;
  const code = signUpService.create_code();

  try {
    await mailer.sendMail(
      email,
      "<Core-view> 이메일 인증코드입니다",
      `<p>이메일 인증코드입니다. ${code}를 입력해주세요</p>`
    );
    res.status(200).send({ code: code });
  } catch (error) {
    console.error('Error in auth controller:', error);
    res.status(500).json({ message: '서버 에러가 발생했습니다.' });
  }
};

module.exports = { signUp, auth };
