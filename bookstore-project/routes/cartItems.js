const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../controller/CartController");

router.post("/", addToCart); // 장바구니 아이템 추가
router.get("/", getCartItems); // 장바구니에 담긴 아이템 가져오기
router.delete("/", removeCartItems); // 장바구니에 있는 아이템 제거

module.exports = router;
// 임진호
