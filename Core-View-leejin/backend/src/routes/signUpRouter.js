const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");

// 회원가입 및 이메일 인증 코드 전송
router.post("/email", signUpController.signUp);

module.exports = router;
