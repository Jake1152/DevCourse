const express = require("express");
const router = express.Router();
const { allBooks, bookDetail } = require("../controller/BookController");

router.route("/").get(allBooks);

router.route("/:id").get(bookDetail);

// router
//   .route("/join")
//   .post([
//     body("username").notEmpty().isString().withMessage("이름을 입력해주세요."),
//     validate,
//     body("password")
//       .notEmpty()
//       .isString()
//       .withMessage("비밀번호를 입력해주세요."),
//     validate,
//   ]);

module.exports = router;
// 임진호
