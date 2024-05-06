// 임진호
const express = require("express");
const router = express.Router();
const {
  order,
  getOrders,
  getOrderDetail,
} = require("../controller/OrderController");

router.use(express.json());

router.post("/", order); // 주문 생성
router.get("/", getOrders); // 주문 조회
router.get("/:id", getOrderDetail); // 주문 상세조회

module.exports = router;