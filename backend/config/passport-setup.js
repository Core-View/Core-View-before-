const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

// 환경 변수를 로드
dotenv.config(); // 환경 변수 로드

console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID); // 디버그용 로그
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET); // 디버그용 로그

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
function(token, tokenSecret, profile, done) {
  // 사용자 인증 로직을 여기에 추가합니다.
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});