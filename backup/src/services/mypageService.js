const pool = require('../../config/databaseSet');

class UserService {
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
}

module.exports = new UserService();
