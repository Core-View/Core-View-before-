const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");

// 로그인
router.post("/login", loginController.login);

// 로그아웃
router.post("/logout", logoutController.logout);

module.exports = router;
