const express = require("express");
const router = express.Router();
const orders = require("../controllers/orders");

router.post("/", orders.postOrder);
router.get("/:orderId", orders.getOrderById);
module.exports = router;
