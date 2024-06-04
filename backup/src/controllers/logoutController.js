const logoutService = require("../services/logoutService.js");

const logout = (req, res) => {
  // 로그아웃에 필요한 로직을 수행합니다. 예를 들어, 세션을 무효화합니다.
  // 이 예제에서는 단순히 성공적으로 로그아웃되었다고 가정합니다.
  logoutService.invalidateSession();

  // 로그아웃이 성공하면 성공 상태 코드와 메시지를 반환합니다.
  res.status(200).send("로그아웃이 성공적으로 처리되었습니다.");
};

module.exports = { logout };
