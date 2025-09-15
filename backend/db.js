const mysql = require('mysql');

// Create connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'system',  // replace with your MySQL password
  database: 'smart_classroom'
});

// Test connection immediately
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ DB connection failed:', err.message);
  } else {
    console.log('✅ DB connected successfully!');
    connection.release();
  }
});

// Export pool for use in other files
module.exports = pool;
