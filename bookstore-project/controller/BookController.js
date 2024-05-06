// 임진호
const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const allBooks = (req, res) => {
  let { category_id, news, limit, currentPage } = req.query;

  let offset = limit * (currentPage - 1);

  console.log("offset : ", offset);

  let sql =
    "SELECT SQL_CALC_FOUND_ROWS *, (SELECT count(*) FROM likes WHERE books.id=1) books";
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
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results.length) return res.status(StatusCodes.CREATED).json(results);
    else return res.status(StatusCodes.NOT_FOUND).end();
  });

  sql = "SELECT found_rows()";
  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};
// 임진호
const bookDetail = (req, res) => {
  // let { id } = req.params;

  let authorization = ensureAuthorization(req, res);

  if (authorization instanceof jwt.TokenExpiredError) {
    return (
      res.status(StatusCodes.UNAUTHORIZED),
      json({
        messsage: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
      })
    );
  } else if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다.",
    });
  } else {
    let { user_id } = req.body;

    let book_id = req.params.id;
    book_id = parseInt(book_id);
    // const sql = "SELECT * FROM books WHERE id = ?";
    let sql = `SELECT *, 
                (SELECT count(*) FROM likes WHERE liked_book_id=book.id),
                (SELECT EXISTS (SELECT * FROM likes WHERE user_id=book.user_id),
              FROM books
              LEFT JOIN category
              ON books.category_id = category.category_id
              WHERE books.id=?`;
    let values = [authorization.id, book_id];

    // const sql =
    //   "SELECT * \
    //   FROM books \
    //   LEFT JOIN category \
    //   ON books.category_id = cateogory.id\
    //   WHERE books.id= ?";

    conn.query(sql, values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.CREATED).json(results);
    });
  }
};

module.exports = { allBooks, bookDetail };
// 임진호
