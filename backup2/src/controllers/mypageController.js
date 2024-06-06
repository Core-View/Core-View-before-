// controllers/mypageController.js
const userService = require('../services/mypageService'); // 모듈명 수정

class UserController {
  async getUser(req, res) {
    const username = req.params.username;
    try {
      const userInfo = await userService.getUserInfoByUsername(username); // userService로 수정
      res.json(userInfo);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Error fetching user information" });
    }
  }

  async updateUser(req, res) {
    const username = req.params.username;
    const { email, password } = req.body;
    try {
      const result = await userService.updateUser(username, email, password); // userService로 수정
      res.json({ message: "User updated successfully", affectedRows: result });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Error updating user information" });
    }
  }
}

module.exports = new UserController();
