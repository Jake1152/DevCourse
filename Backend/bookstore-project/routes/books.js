const express = require("express");
const router = express.Router();

const { allBooks, bookDetail } = require("../controller/BookController");

router.route("/").get(allBooks);
router.route("/:id").get(bookDetail);

module.exports = router;
