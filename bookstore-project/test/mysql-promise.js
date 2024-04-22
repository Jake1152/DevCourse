/* eslint-env es6 */
const mysql = require("mysql2/promise"); // or require('mysql2').createConnectionPromise
mysql
  .createConnection({
    /* same parameters as for non-promise createConnection */
  })
  .then((conn) => conn.query("select foo from bar"))
  .then(([rows, fields]) => console.log(rows[0].foo));
