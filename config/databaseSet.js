const mysql = require('mysql2/promise');
require('dotenv').config({ path: './config/.env' });

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', //본인 mysql user명
    password: '1656', //본인 비밀번호
    database: 'userdb', // 테이블명
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
  .then(conn => {
    console.log('Connected to the database');
    conn.release();
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

module.exports = {
    pool
};

