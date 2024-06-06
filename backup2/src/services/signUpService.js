const crypto = require('crypto');
const { hashPassword } = require('../utils/cryptoUtils');
const pool = require('../../config/databaseSet');

// 회원가입 함수
const signUp = async (username, email, password) => {
  try {
    const [existingUsers] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return { success: false, error: '이미 등록된 이메일입니다.' };
    }

    // 랜덤 salt 생성
    const salt = crypto.randomBytes(32).toString('hex');

    // 비밀번호 해싱
    const hashedPassword = hashPassword(password, salt);

    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, salt) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, salt]
    );

    if (result.affectedRows > 0) {
      // 성공 시 반환
      return { success: true, id: result.insertId };
    } else {
      return { success: false, error: '회원가입에 실패했습니다.' };
    }
  } catch (error) {
    console.error('Error signing up:', error);
    return { success: false, error: '서버 에러가 발생했습니다.' };
  }
};

module.exports = { signUp };
