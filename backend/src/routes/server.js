const dotenv = require('dotenv');
dotenv.config(); // 환경 변수 로드

const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');

const app = express();
const signUpRouter = require('./signUpRouter');
const loginRouter = require('./loginRouter');

require('../../config/passport-setup'); // 경로 수정

app.use(cors());
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/sign', signUpRouter);
app.use('/sign', loginRouter);
app.use('/auth', authRouter);
app.use('/', profileRouter);

console.log('MAIL_REFRESH:', process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
