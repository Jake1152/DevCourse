// 임진호
const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const addLike = (req, res) => {
  // return res.status(200).json({ message: "좋아요 추가." });
  // req.params에서는 URL 값을 liked_book_id가 아니라 id로 보고있기에 { id }로 구조 분해 할당 해야한다.
  const { id } = req.params;
  const { user_id } = req.body;

  const sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";

  const values = [user_id, id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "잘못된 요청입니다." });
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
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
