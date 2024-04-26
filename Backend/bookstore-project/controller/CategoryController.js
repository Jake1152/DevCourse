const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const allCategory = (req, res) => {
  const sql = "SELECT * FROM category";

  conn.query(sql, (err, results) => {
    if (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "잘못된 요청입니다." });
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

module.exports = { allCategory };
// 임진호
