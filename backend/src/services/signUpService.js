const connection = require('../../config/databaseSet'); // 경로 수정

function create_code() {
  let n = Math.floor(Math.random() * 1000000);
  return n.toString().padStart(6, '0');
}

function signUp(username, email, password) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], (err, results) => {
      if (err) {
        return reject({ success: false, error: err.message });
      }
      resolve({ success: true });
    });
  });
}

module.exports = { create_code, signUp };