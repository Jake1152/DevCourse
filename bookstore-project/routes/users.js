const router = require("express").Router();
const conn = require("../mariadb");
const { StatusCode } = require("http-status-codes");
const join = require("../controller/UserController");

const { body, validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next(); // 다음 미들웨어 함수로 실행 흐름을 넘김
  } else {
    return res.status(400).json(err.array());
  }
};

router.get("/", (req, res) => {
  return res.status(200).json({ message: "users controller" });
});

/**
 * 회원가입을 받는다.
 * 특정 값들을 입력받는다.
 * 
 * CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 * req body로 데이터를 받는다.
 * 
 * id는 autoincrement라서 별도로 입력하지 않는다.
 * username, password는 꼭 입력받아야한다.
 * password의 경우 암호화해서 저장한다.
 * 
 * Q. POST 데이터 탈취 위험, HTTP에서 보호해주는가?, https이면 괜찮은가?
 */
router
  .route("/join")
  .post(
    [
      body("username")
        .notEmpty()
        .isString()
        .withMessage("이름을 입력해주세요."),
      validate,
      body("password")
        .notEmpty()
        .isString()
        .withMessage("비밀번호를 입력해주세요."),
      validate,
    ],
    (req, res) => {
      try {
        const { username, password } = req.body;
        console.log(`${username}, ${password}`);
        res.status(200).send();
        return;
      } catch (err) {
        return res.status(500).json({ message: "Server Error." });
      }
    }
  );

// router.post("/login", (req, res) => {
//   res.status(200).send();
//   return;
// });

module.exports = router;
// 임진호
