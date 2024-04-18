const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const addLike = (req, res) => {
  return res.status(200).json({ message: "좋아요 추가." });
  // const sql = "SELECT * FROM likes;";

  // conn.query(sql, (err, results) => {
  //   if (err) {
  //     return res
  //       .status(StatusCodes.BAD_REQUEST)
  //       .json({ message: "잘못된 요청입니다." });
  //   }

  //   return res.status(StatusCodes.CREATED).json(results);
  // });
};

const removeLike = (req, res) => {
  return res.status(200).json({ message: "좋아요 삭제." });
  // const sql = "SELECT * FROM likes;";

  // conn.query(sql, (err, results) => {
  //   if (err) {
  //     return res
  //       .status(StatusCodes.BAD_REQUEST)
  //       .json({ message: "잘못된 요청입니다." });
  //   }

  //   return res.status(StatusCodes.CREATED).json(results);
  // });
};

module.exports = { addLike, removeLike };
// 임진호
