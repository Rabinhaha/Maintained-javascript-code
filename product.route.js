// routes/product.routes.js

const express = require("express");
const router = express.Router();

// FIXED: correct relative path and function names
const {
  getAllProducts,
  addProduct,
} = require("../controller/product.controller.js");

router.get("/", getAllProducts); // GET /products
router.post("/", addProduct); // POST /products

module.exports = router;
