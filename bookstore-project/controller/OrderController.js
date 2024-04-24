// 임진호
const { StatusCodes } = require("http-status-codes");
// const conn = require("../mariadb");
const mariadb = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const order = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: true,
  });
  const { items, delivery, totalQuantity, totalPrice, userId, firstBookTitle } =
    req.body;

  let sql =
    "INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)";
  let values = [delivery.address, delivery.receiver, delivery.contact];
  let [results] = await conn.query(sql, values);
  let delivery_id = results.insertId;
  console.log("delivery_id : ", delivery_id);

  // orders 테이블 삽입
  sql = `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES (?, ?, ?, ?, ?)`;

  values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];

  [results] = await conn.query(sql, values);
  let order_id = results.insertId;
  console.log("order_id : ", order_id);

  // orderedBook 테이블 삽입

  sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?`;

  values = [];
  items.forEach((item) => {
    values.push([order_id, item.book_id, item.quantity]);
  });

  [results] = await conn.query(sql, [values]);
  console.log("results : ", results);

  return res.status(StatusCodes.OK).json(results);
};

const getOrders = (req, res) => {
  res.status(StatusCodes.OK).json({ message: "getOrders" });
};

const getOrderDetail = (req, res) => {
  res.status(StatusCodes.OK).json({ message: "getOrderDetail" });
};

// const addToCart = (req, res) => {
//   const { book_id, quatity, user_id } = req.body;

//   const sql =
//     "INSERT INTO cartItems (book_id, quantity, user_id VALUES(?, ?, ?)";
//   const values = [book_id, quatity, user_id];

//   conn.query(sql, values, (err, results) => {
//     if (err) {
//       return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: "잘못된 요청입니다." });
//     }

//     return res.status(StatusCodes.CREATED).json(results);
//   });
// };

// const getCartItems = (req, res) => {
//   const { book_id, quatity, user_id } = req.body;

//   const sql =
//     "SELECT cartItems.id, book_id, title, summary, quantity, price \
//               FROM cartItems LEFT JOIN books \
//               On getCartImtes.book_id = books.id";
//   const values = [book_id, quatity, user_id];

//   conn.query(sql, values, (err, results) => {
//     if (err) {
//       return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: "잘못된 요청입니다." });
//     }

//     return res.status(StatusCodes.CREATED).json(results);
//   });
// };

// // 임진호
// const removeCartItems = (req, res) => {
//   const { id } = req.body;

//   const sql = "DELETE FROM cartItems WHERE id = ?";

//   conn.query(sql, id, (err, results) => {
//     if (err) {
//       return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: "잘못된 요청입니다." });
//     }

//     return res.status(StatusCodes.CREATED).json(results);
//   });
// };

module.exports = { order, getOrders, getOrderDetail };
// 임진호
