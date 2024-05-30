const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
app.use("/login", loginRouter); // 추가: 로그인 라우터 사용
app.use("/logout", logoutRouter); // 추가: 로그아웃 라우터 사용
router.post("/", loginController.login);
router.post("/", logoutController.logout);

module.exports = router;
