const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool (Better for performance)
const pool = mysql.createPool({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASS ,
  database: process.env.DB_NAME ,  // Add your database name
  waitForConnections: true,
  connectionLimit: 10, // Limit the number of connections
  queueLimit: 0
});

// Convert pool to promise-based API
const db = pool.promise();  

db.getConnection()
  .then(connection => {
    console.log('✅ Connected to MySQL database');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Database connection error:', err);
  });

module.exports = db;
