const express = require("express");
const router = express.Router();

const { allCategory } = require("./controller/BookController");

router.route("/").get(allCategory);

module.exports = router;
