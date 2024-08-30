const { ProductModel } = require("../model/product");
const mongoose = require("mongoose");
const ProductController = require("../controllers/ProductController")
const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
const router = express.Router();
// Create a new router
router.get("/products", ProductController.GetAllProductDetails);
router.post("/post-product", ProductController.AddProduct);
router.get("/product/:id", ProductController.GetAllByProduct);
router.get("/products/:category", ProductController.GetByCategory);

module.exports = router
/*
http://localhost:8890/product
http://localhost:8890/post-product
http://localhost:8890/products/:getbyid
http://localhost:8890/products/:category
*/