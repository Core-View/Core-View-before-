const session = require('express-session');

// 세션 미들웨어 설정
const sessionMiddleware = session({
  secret: 'your_secret_key', // 세션 데이터를 암호화할 때 사용할 키
  resave: false, // 세션 데이터가 변경되지 않았더라도 세션을 항상 저장할지 여부
  saveUninitialized: false // 초기화되지 않은 세션을 저장할지 여부
});

// 미들웨어 함수
const authenticateSession = (req, res, next) => {
  if (req.session.user) {
    // 세션에 사용자 정보가 있는 경우 다음 미들웨어로 이동
    next();
  } else {
    // 세션에 사용자 정보가 없는 경우 로그인 페이지로 리다이렉트 또는 에러 처리
    res.status(401).send('인증이 필요합니다.');
  }
};

module.exports = {
  sessionMiddleware,
  authenticateSession
};
