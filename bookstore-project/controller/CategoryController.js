const { StatusCodes } = require("http-status-codes");
const conn = require("../mariadb");

const allCategory = (req, res) => {
  // 카테고리 전체 목록 리스트
  const sql = `SELECT * FROM category`;

  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    console.log("results : ", results);
    return res.status(StatusCodes.OK).json(results);
  });
};

module.exports = { allCategory };
// 임진호
