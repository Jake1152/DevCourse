// 임진호
const ensureAuthorization = require("../auth"); // 인증모듈
const jwt = require("jsonwebtoken");
const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const addLike = (req, res) => {
  const book_id = req.params.id;

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
    let sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";

    let values = [authorization.id, book_id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.error(err);
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "잘못된 요청입니다." });
      }

      return res.status(StatusCodes.CREATED).json(results);
    });
  }
};

const removeLike = (req, res) => {
  const { id } = req.params;
  const { user_id } = req.query;

  const sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?";
  const values = [user_id, id];
  console.log(sql);

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.OK).json(results);
  });
};

module.exports = { addLike, removeLike };
// 임진호
