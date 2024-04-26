// const express = require("express");
// const router = express.Router();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "Youtube",
  dateStrings: true,
});

module.exports = connection;
