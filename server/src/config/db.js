const { createPool } = require("mysql2/promise");
const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "chat_app",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
  connection.release(); // Release connection back to the pool
});

module.exports = pool;
