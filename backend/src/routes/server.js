const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport'); // 추가
const session = require('express-session'); // 추가
const authRouter = require('./authRouter.js'); // 추가
const profileRouter = require('./profileRouter.js'); // 추가

dotenv.config();

const app = express();
const signUpRouter = require('./signUpRouter.js');
const loginRouter = require('./loginRouter.js');

require('../config/passport-setup.js'); // 추가

app.use(cors());
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
})); // 추가

app.use(passport.initialize()); // 추가
app.use(passport.session()); // 추가

app.use('/sign', signUpRouter);
app.use('/sign', loginRouter);
app.use('/auth', authRouter); // 추가
app.use('/', profileRouter); // 추가

console.log(process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});