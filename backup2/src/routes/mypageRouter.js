// routes/mypageRouter.js
const express = require('express');
const router = express.Router();
const mypageController = require('../controllers/mypageController');

router.get('/:username', mypageController.getUser);
router.put('/:username', mypageController.updateUser);

module.exports = router;
