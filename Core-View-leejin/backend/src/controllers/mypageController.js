const userService = require('../services/mypageService');

class UserController {
  async getUser(req, res) {
    const username = req.params.username;
    try {
      const userInfo = await userService.getUserInfoByUsername(username);
      res.json(userInfo);
     
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Error fetching user information" });
    }
  }
}

module.exports = new UserController();
