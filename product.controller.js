// controller/product.controller.js

const Product = require("../models/product.model");

// GET /products
async function getAllProducts(req, res) {
  try {
    const products = await Product.find(); // fetch all from DB
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
}

// POST /products
async function addProduct(req, res) {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    await newProduct.save(); // save to DB
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send({ error: "Invalid data" });
  }
}

module.exports = { getAllProducts, addProduct };
