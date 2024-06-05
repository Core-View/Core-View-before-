const express = require('express');
const router = express.Router();
const virtualCompilerController = require('../controllers/virtualCompilerController');

router.post('/compile', virtualCompilerController.compileCode);

module.exports = router;
