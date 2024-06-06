// services/mypageService.js
const pool = require('../../config/databaseSet');

class MypageService {
  async getUserInfoByUsername(username) {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query("SELECT username, email, password FROM users WHERE username = ?", [username]);
      connection.release();
      return rows[0];
    } catch (error) {
      console.error("Error fetching user information:", error);
      throw error;
    }
  }

  async updateUser(username, newEmail, newPassword) {
    try {
      const connection = await pool.getConnection();
      const query = "UPDATE users SET email = ?, password = ? WHERE username = ?";
      const result = await connection.query(query, [newEmail, newPassword, username]);
      connection.release();
      return result.affectedRows; // 수정된 행의 수를 반환
    } catch (error) {
      console.error("Error updating user information:", error);
      throw error;
    }
  }
}

module.exports = new MypageService();
