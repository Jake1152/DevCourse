const express = require("express");
const router = express.Router();

const { addLike, removeLike } = require("../controller/LikeController");

// router.route("/:id").post(addLike).delete(removeLike);

router.post("/:id", addLike);
router.delete("/:id", removeLike);

module.exports = router;
