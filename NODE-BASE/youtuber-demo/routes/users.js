const express = require("express");
const router = express.Router();
const connection = require("../mariadb");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// .env 파일에 설정한 환경변수들을 가져옴
dotenv.config();

// req body parse
router.use(express.json());

// validationResult(req) 함수를 호출하여 요청의 유효성을 검사하고, 오류가 발생하면 해당 오류를 JSON 형식으로 클라이언트에게 반환합니다.
const validate = (req, res) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next(); // 다음 미들웨어 함수로 실행 흐름을 넘김
  } else {
    return res.status(400).json(err.array());
  }
};

const isExistObject = (obj) => {
  if (Object.keys(obj).length === 0) return false;
  return true;
};

//회원 조회, 탈퇴
router
  .route("/users")
  .get(
    [
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("이메일을 형식에 맞게 입력해주세요."),
      validate,
    ],
    (req, res) => {
      const { email } = req.body;

      const sql = `SELECT * FROM users WHERE email = ?`;

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
    }
  )
  .delete(
    [
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("이메일을 형식에 맞게 입력해주세요."),
      validate,
    ],
    (req, res) => {
      const { email } = req.body;

      const sql = `DELETE FROM users WHERE email ?`;

      try {
        connection.query(sql, email, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(400).end();
          } else if (results.affectedRows === 0) {
            return res.status(400).end();
          } else if (results && isExistObject(results)) {
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
    }
  );

// login
router.post(
  "/login",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("이메일을 형식에 맞게 입력해주세요."),
    body("password")
      .notEmpty()
      .isString()
      .withMessage("비밀번호를 입력해주세요."),
    validate,
  ],
  (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = ?`;

    try {
      connection.query(sql, email, (err, results, fields) => {
        if (err) {
          console.error(err);
          return res.status(400).end();
        }

        const loginUser = results?.length >= 1 ? results[0] : null;

        if (
          loginUser &&
          isExistObject(loginUser) &&
          loginUser.password === password
        ) {
          // token 발급 (jwt)
          const token = jwt.sign(
            {
              email: loginUser.email,
              name: loginUser.name,
            },
            process.env.PRIVATE_KEY // 만약 해당 값이 .env에 없으면 undefined되는가 아니면 error인가?
          );

          // res.cookie()
          res.status(200).json({
            message: `${loginUser.name}님 로그인 되었습니다.`,
            token: token,
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
  }
);

// join
router.post(
  "/join",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("이메일을 형식에 맞게 입력해주세요."),
    body("name").notEmpty().isString().withMessage("이름을 입력해주세요."),
    validate,
    body("password")
      .notEmpty()
      .isString()
      .withMessage("비밀번호를 입력해주세요."),
    validate,
    body("contact").notEmpty().isString().withMessage("연락처를 입력해주세요."),
    validate,
  ],
  (req, res) => {
    const { email, name, password, contact } = req.body;

    // INSERT INTO users (email, name, password, contact) VALUES ("j42@gmail.com", "jinho", "1111", "gmail");
    const sql = `INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)`;
    const values = [email, name, password, contact];

    console.log("values : ", values);
    try {
      connection.query(sql, values, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(400).end();
        } else if (results && isExistObject(results)) {
          return res.status(201).json(results);
        } else {
          return res.status(400).json({ message: "이미 가입된 회원입니다." });
        }
      });
    } catch (err) {
      return res.status(500).json({ message: "Server Error." });
    }
  }
);

module.exports = router;
