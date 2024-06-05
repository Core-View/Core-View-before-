const express = require('express');
const userController = require('../controllers/mypageController');
const router = express.Router();

router.get('/:username', userController.getUser.bind(userController));

module.exports = router;
