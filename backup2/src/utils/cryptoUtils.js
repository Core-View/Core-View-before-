const crypto = require('crypto');
require('dotenv').config();

// 비밀번호 해싱 함수
const hashPassword = (password, salt) => {
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return hashedPassword;
};

module.exports = { hashPassword };
