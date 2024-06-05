const pool = require('../../config/databaseSet'); // config 폴더가 src와 같은 상위 폴더에 있음
const bcrypt = require('bcryptjs');

async function authenticate(username, password) {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      console.log('사용자를 찾을 수 없음');
      return false; // 사용자를 찾을 수 없음
    }

    const user = rows[0];
    console.log('데이터베이스에서 찾은 사용자:', user);

    // 비밀번호 비교 (plain text 비교)
    const isMatch = password === user.password;
    console.log('비밀번호 비교 결과:', isMatch);
    return isMatch;
  } catch (err) {
    console.error('인증 중 오류 발생:', err);
    throw err;
  }
}

module.exports = { authenticate };
