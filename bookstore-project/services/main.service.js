const express = require("express");
const router = express.Router();
const controller = require("../controllers/main.controllers");

/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
  return;
});

module.exports = router;
