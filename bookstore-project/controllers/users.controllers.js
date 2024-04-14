const express = require("express");
const router = express.Router();

// router.route("/", (req, res));

router.use("/", (req, res) => {
  return res.json({ message: "users controller" });
});

exports.module = router;
