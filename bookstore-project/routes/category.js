const express = require("express");
const router = express.Router();

const { allCategory } = require("../controller/CategoryController");

router.route("/").get(allCategory);

module.exports = router;
