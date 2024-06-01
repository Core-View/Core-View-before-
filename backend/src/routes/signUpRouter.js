const signUpController = require("../controllers/signUpController.js");
const express = require("express");
const router = express.Router();

//회원가입
router.post("/email", signUpController.auth);

module.exports = router;
