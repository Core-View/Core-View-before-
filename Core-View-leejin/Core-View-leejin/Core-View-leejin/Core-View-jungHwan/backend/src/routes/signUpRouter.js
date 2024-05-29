const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");

// 회원가입 이메일 전송
router.post("/email", signUpController.auth);

module.exports = router;
