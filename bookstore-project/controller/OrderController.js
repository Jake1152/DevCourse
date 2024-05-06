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

  // SELCT book_id, quantity FROM cartItmes WHERE IN [1,2,3]
  // items를 가지고 장바구니에서 book_id, quantity 조회
  sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;
  console.log("sql : ", sql);

  let [orderItems, fields] = await conn.query(sql, [items]);
  console.log("order_id : ", order_id);
  // let orderItems = await conn.query(sql, [items]);

  console.log("orderItems : ", orderItems);
  console.log("fields : ", fields);
  // orderedBook 테이블 삽입
  sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?`;

  values = [];
  orderItems.forEach((item) => {
    values.push([order_id, item.book_id, item.quantity]);
  });
  console.log("values : ", values);

  results = await conn.query(sql, [values]);
  console.log("results : ", results);

  const result = await deleteCartItems(conn, items);

  return res.status(StatusCodes.OK).json(result);
};

/**
 * execute vs query 차이점
 */
const deleteCartItems = async (conn, items) => {
  const sql = `DELETE FROM cartItems WHERE id IN (?)`;

  // const result = await conn.execute(sql, [items]);
  const result = await conn.query(sql, [items]);
  return result;
  // return res.status(StatusCodes.OK).json(result);
};

const getOrders = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: true,
  });

  const sql = `SELECT orders.id, created_at, address, receiver, contact,
                      book_title, total_quantity, total_price
                FROM orders 
                LEFT JOIN delivery
                ON orders.delivery_id = delivery.id`;
  const [rows, fields] = await conn.query(sql);

  res.status(StatusCodes.OK).json(rows);
  // res.status(StatusCodes.OK).json({ message: "getOrders" });
};

// const conn = await mariadb.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   dateStrings: true,
// });

const getOrderDetail = async (req, res) => {
  const orderId = req.params.id;
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: true,
  });

  const sql = `SELECT book_id, title, author, price, quantity
                FROM orderedBook
                LEFT JOIN books
                ON orderedBook.book_id = books.id`;
  const [rows, fields] = await conn.query(sql);

  res.status(StatusCodes.OK).json(rows);
  // res.status(StatusCodes.OK).json({ message: "getOrders" });
};

module.exports = { order, getOrders, getOrderDetail };
// 임진호
