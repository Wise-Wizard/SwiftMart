const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");

//Router Call
const router = express.Router();

//Fetch All Products from MongoDB
router.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//Fetch Single Product using ID
router.get(
  "/products/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product NOt Found!" });
    }
  })
);
module.exports = router;
