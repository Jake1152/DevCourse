// 임진호
const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const order = async (req, res) => {
  const { items, delivery, totalQuantity, totalPrice, userId, firstBookTitle } =
    req.body;

  let delivery_id;
  let order_id;
  let sql = "INSERT INTO delivery (address, receiver, con VALUES(?, ?, ?)";
  let values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
  // conn.query(sql, values, (err, results) => {
  //   if (err) {
  //     return res
  //       .status(StatusCodes.BAD_REQUEST)
  //       .json({ message: "잘못된 요청입니다." });
  //   }
  //   return res.status(StatusCodes.CREATED).json(results);
  // });
  let [results] = await conn.query(sql, values);

  delivery_id = results.insertIdl;

  // SELECT book_id, quantity FROM cartItems WHERE IN [1,2,3];
  // order_id

  sql =
    "INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES (?, ?, ?, ?, ?)";

  values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "잘못된 요청입니다." });
    }
    return res.status(StatusCodes.CREATED).json(results);
  });
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
