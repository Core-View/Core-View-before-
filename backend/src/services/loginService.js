const connection = require('../../config/databaseSet'); // 경로 수정

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results.length > 0) {
        resolve(true); // 인증 성공
      } else {
        resolve(false); // 인증 실패
      }
    });
  });
}

module.exports = { authenticate };