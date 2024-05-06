const maria = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = maria.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: true, // 시간대 맞추기
});

module.exports = connection;
