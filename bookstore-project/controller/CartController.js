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
  const { user_id, selected } = req.body;

  console.log(user_id, selected);

  const authorization = ensureAuthorization(req, res);
  // return 된 값이 auth에 들어옴 에러 발생함
  // response를 두번 발생시키게 됨

  if (authorization instanceof TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
    });
  } else {
    let sql = `SELECT cartItems.id, book_id, title, summary, quantity, price \
                  FROM cartItems 
                  LEFT JOIN books
                  ON cartItems.book_id = books.id
                  WHERE user_id=? AND cartItems.id IN (?)`;
    let values = [authorization.id, selected];
    if (selected) {
      // 주문서 작성 시 선택한 장바구니 목록 조회
      sql += `AND cartItems.id IN (?)`;
      values.push(selected);
    }

    conn.query(sql, values, (err, results) => {
      if (err) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "잘못된 요청입니다." });
      }

      return res.status(StatusCodes.OK).json(results);
    });
  }
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

const ensureAuthorization = (req, ㄱㄷㄴ) => {
  try {
    let receivedJwt = req.headers["authorization"];
    console.log("received jwt : ", receivedJwt);

    let decodedJwt = jwt.verify(receivedJwt, process.PRIVATE_KEY);
    console.log(decodedJwt);

    return decodedJwt;
  } catch (err) {
    console.error(err);

    // return res.status(StatusCodes.UNAUTHORIZED).json({
    //   message: "로그이 세션이 만료되었습니다. 다시 로그인 하세요.",
    // });
    return err;
  }
};

module.exports = { addToCart, getCartItems, removeCartItems };
// 임진호
