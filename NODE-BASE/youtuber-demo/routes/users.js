const express = require("express");
const router = express.Router();
const connection = require("../mariadb");

// const isExistObject = require("../utils/util");
// import isExistObject from "../utils/util";
const isExistObject = (obj) => {
  // console.log("Object.keys(obj).length : ", Object.keys(obj).length);
  if (Object.keys(obj).length === 0) return false;
  return true;
};

// req body parse
router.use(express.json());

// let db = new Map();
// db.set(myId++, {"userId" : })

//회원 조회, 탈퇴
router
  .route("/users")
  .get((req, res) => {
    const { email } = req.body;

    let sql = `SELECT * FROM users WHERE email = ?`;

    try {
      connection.query(sql, email, (err, results) => {
        // if (loginUser && isExistObject(loginUser)) { // undefined가 넘어오기에 {}인지 확인할 필요 없다.
        if (results && isExistObject(results)) {
          return res.status(200).json(results);
        } else {
          return res.status(404).json({
            message: "그런 유저는 없습니다.",
          });
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  })
  .delete((req, res) => {
    const { email } = req.body;

    const sql = `DELETE FROM users WHERE email ?`;

    try {
      connection.query(sql, email, (err, results) => {
        // if (loginUser && isExistObject(loginUser)) { // undefined가 넘어오기에 {}인지 확인할 필요 없다.
        if (results && isExistObject(results)) {
          return res.status(200).json(results);
        } else {
          return res.status(404).json({
            message: "그런 유저는 없습니다.",
          });
        }
      });
    } catch (err) {
      return res.status(500).json({ message: "Server Error" });
    }
  });

// login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let query = `SELECT * FROM users WHERE email = ?`;

  try {
    connection.query(query, email, (err, results, fields) => {
      const loginUser = results[0];

      if (
        loginUser &&
        isExistObject(loginUser) &&
        loginUser.password === password
      ) {
        res.status(200).json({
          message: `${loginUser.name}님 로그인 되었습니다.`,
        });
      } else {
        res.status(404).json({
          message: "아이디 또는 비밀번호가 일치하지 않습니다.",
        });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error.");
  }
});

// join
router.post("/join", (req, res) => {
  const { email, name, password, contact } = req.body;

  // INSERT INTO users (email, name, password, contact) VALUES ("j42@gmail.com", "jinho", "1111", "gmail");
  let sql = `INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)`;
  if (!email || !name || !password || !contact) {
    return res.status(400).json({ message: "정보를 제대로 입력해주세요." });
  }
  let values = [email, name, password, contact];
  console.log("values : ", values);
  try {
    connection.query(sql, values, (err, results) => {
      console.log("results : ", results);
      if (results && isExistObject(results)) {
        return res.status(200).json(results);
      } else {
        return res.status(400).json({ message: "이미 가입된 회원입니다." });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error." });
  }
});

module.exports = router;
