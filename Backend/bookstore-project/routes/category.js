const express = require("express");
const router = express.Router();
const { allCategory } = require("../controller/CategoryController");

router.route("/").get(allCategory); // 카테고리 전체 목록 조회

module.exports = router;
// 임진호
