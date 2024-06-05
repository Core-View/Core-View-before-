const express = require('express');
const router = express.Router();

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

router.get('/profile', isLoggedIn, (req, res) => {
  res.send(`Hello, ${req.user.displayName}`);
});

module.exports = router;