const express = require('express');
const passport = require('passport');
const router = express.Router();

// 구글 로그인 라우터
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// 구글 콜백 라우터
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // 로그인 성공 시 리다이렉트할 경로 설정
    res.redirect('/profile');
  });

// 로그아웃 라우터
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;