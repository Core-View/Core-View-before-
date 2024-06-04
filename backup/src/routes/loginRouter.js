const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController'); // 상대 경로 확인

router.post('/', loginController.login);

module.exports = router;
