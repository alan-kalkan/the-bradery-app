const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

router.get("/", products.getAllProducts);
router.get("/getProductStripeId", products.getProductStripeId);
module.exports = router;
