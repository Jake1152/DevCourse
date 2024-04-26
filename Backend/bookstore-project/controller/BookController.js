// 임진호
const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const allBooks = (req, res) => {
  let { category_id, news, limit, currentPage } = req.query;

  console.log("category_id : ", category_id);
  console.log("news : ", news);
  console.log("limit : ", limit);
  console.log("currentPage : ", currentPage);

  let offset = limit * (currentPage - 1);

  console.log("offset : ", offset);

  let sql = "SELECT * FROM books";
  let values = [];

  if (category_id && news) {
    sql +=
      " WHERE category_id=? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 12 MONTH) AND NOW()";
    values = [category_id];
  } else if (category_id) {
    sql += " WHERE category_id=?";
    values = [category_id];
  } else if (news) {
    sql +=
      " WHERE category_id=? BETWEEN DATE_SUB(NOW(), INTERVAL 12 MONTH) AND NOW()";
    values = news;
  }
  sql += " LIMIT ? OFFSET ?";
  values.push(parseInt(limit), parseInt(offset));
  console.log(`sql : ${sql}`);
  console.log(`values : ${values}`);
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};
// 임진호
const bookDetail = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  // const sql = "SELECT * FROM books WHERE id = ?";
  const sql =
    "SELECT * \
    FROM books \
    LEFT JOIN category \
    ON books.category_id = cateogory.id\
    WHERE books.id= ?";

  conn.query(sql, id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

module.exports = { allBooks, bookDetail };
// 임진호
