const express = require("express");
const router = express.Router();

const { join } = require("../controller/UserController");

// router.route("/").post(join);
router.post("/", (req, res) => {
  // const { email, password } = req.body;

  // const sql = `INSERT INTO users (email, password) VALUES (${email}, ${password})`;
  // let values = [email, password];

  // conn.query(sql, values, (err, resulst) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(StatusCodes.BAD_REQUEST);
  //   }

  return res.status(StatusCodes.CREATED);
  // });
});

module.exports = router;
