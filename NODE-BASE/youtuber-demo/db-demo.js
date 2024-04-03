// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "Youtube",
});

// A simple SELECT query
connection.query("SELECT * FROM `users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

// // Using placeholders
// connection.query(
//   "SELECT * FROM `users`",
//   ["Page", 45],
//   function (err, results) {
//     console.log(results);
//   }
// );
