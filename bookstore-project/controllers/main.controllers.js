const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "main controller" });
  return;
});

module.exports = router;
