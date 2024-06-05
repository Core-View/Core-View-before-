const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');

const virtualCompilerRouter = require('./virtualCompilerRouter');
const signUpRouter = require("./signUpRouter");
const loginRouter = require("./loginRouter");
const mypageRouter = require("./mypageRouter");


require('../../config/passport-setup'); // 경로 수정
require('dotenv').config({ path: './src/routes/.env' });

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/sign", signUpRouter);
app.use("/login", loginRouter);
app.use('/api', virtualCompilerRouter);
app.use("/mypage", mypageRouter);
app.use('/auth', authRouter);
app.use('/', profileRouter);

console.log('MAIL_REFRESH:', process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});