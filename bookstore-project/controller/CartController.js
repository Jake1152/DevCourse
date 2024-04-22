// 임진호
const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const addToCart = (req, res) => {
  const { book_id, quantity, user_id } = req.body;

  const sql =
    "INSERT INTO cartItems (book_id, quantity, user_id VALUES(?, ?, ?)";
  const values = [book_id, quantity, user_id];

  conn.query(sql, values, (err, results) => {
    if (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "잘못된 요청입니다." });
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

const getCartItems = (req, res) => {
  const { book_id, quantity, user_id } = req.body;

  console.log(book_id, quantity, user_id);

  const sql =
    "SELECT cartItems.id, book_id, title, summary, quantity, price \
              FROM cartItems LEFT JOIN books \
              On cartItems.book_id = books.id";
  const values = [book_id, quantity, user_id];

  conn.query(sql, values, (err, results) => {
    if (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "잘못된 요청입니다." });
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

// 임진호
const removeCartItems = (req, res) => {
  const { id } = req.body;

  const sql = "DELETE FROM cartItems WHERE id = ?";

  conn.query(sql, id, (err, results) => {
    if (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "잘못된 요청입니다." });
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

module.exports = { addToCart, getCartItems, removeCartItems };
// 임진호
