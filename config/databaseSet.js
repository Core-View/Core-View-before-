// backend/config/databaseSet.js

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const createUser = async (username, email, password) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
      [username, email, password]
    );
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = { createUser };
