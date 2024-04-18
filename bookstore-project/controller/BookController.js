const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const allBooks = (req, res) => {
  const sql = `SELECT * FROM books`;

  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

const bookDetail = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const sql = `SELECT * FROM books WHERE id = ?`;

  conn.query(sql, id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).json({});
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

module.exports = { allBooks, bookDetail };
// 임진호
