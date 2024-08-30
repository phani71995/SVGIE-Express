const ProductModel = require("../model/product");
const mongoose = require('mongoose');

async function GetAllProductDetails(requst, response) {
    try {
        const products = await ProductModel.find();
        response.status(200).json(products);
    }
    catch (error) {
        response.status(200).json({
            message: error
        });
    }

}
async function AddProduct(request, response) {
    try {
        console.log("Request Headers:", request.headers);
        console.log("Request Body:", request.body);

        // Destructure the product details from the request body
        const { title, price, description, category, images, reviews } = request.body;

        // Log the title for debugging
        console.log(title);

        // Basic validation
        if (!title || !price || !description || !category) {
            return response.status(400).json({
                message: "Missing required fields: title, price, description, and category are required."
            });
        }

        // Create a new product instance
        const newProduct = new ProductModel({
            title,
            price,
            description,
            category,
            images,
            reviews
        });

        // Save the new product to the database
        await newProduct.save();

        // Send the newly added product as response
        response.status(201).json(newProduct);
    } catch (error) {
        console.error("Error adding product:", error);
        response.status(500).json({
            message: error.message
        });
    }
}


async function GetAllByProduct(req, response) {
    const productId = req.params.id
    try {
        const products = await ProductModel.findById(productId);
        response.status(200).json(products);
    }
    catch (error) {
        response.status(200).json({
            message: error
        });
    }

}
async function GetByCategory(req, res) {
    const category = req.params.category; // Get category from request parameters
    console.log(category)
    try {
        // Find products by category
        const productsByCategory = await ProductModel.find({ category });
        if (productsByCategory.length === 0) {
            // Return 404 if no products are found
            return res.status(404).json({ message: 'No products found for this category' });
        }
        // Return products with 200 status
        res.status(200).json(productsByCategory);
    } catch (error) {
        // Log and return error with 500 status
        console.error("Error fetching products by category:", error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = { GetAllProductDetails, AddProduct, GetAllByProduct, GetByCategory }