const pool = require('../../config/databaseSet');

const signUp = async (username, email, password) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    return { success: true, id: result.insertId };
  } catch (error) {
    console.error('Error signing up:', error);
    return { success: false, error: '회원가입에 실패했습니다.' };
  }
};

const create_code = () => {
  let n = Math.floor(Math.random() * 1000000);
  return n.toString().padStart(6, "0");
};

module.exports = { signUp, create_code };
