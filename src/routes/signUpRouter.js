const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');

// 회원가입 이메일 전송
router.post('/email', signUpController.auth);

// 회원가입
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log('회원가입 정보:');
  console.log('이름:', username);
  console.log('이메일:', email);
  console.log('비밀번호:', password);
  res.status(200).send('회원가입이 완료되었습니다.');
});

module.exports = router;