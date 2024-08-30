const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    price: {
        type: "String",

    }
    ,
    description: {
        type: "String",
    }
    ,
    category: {
        type: "String",
    },
    images: {
        type: Array, // Can also define a sub-schema if needed
        default: []
    },
    reviews: {
        type: Array, // Can also define a sub-schema if needed
        default: []  // Default to an empty array if no reviews are provided
    }


})
const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
/**{
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
  "images": [
    "data:image/jpeg;base64,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"

  ],
  "reviews": [
    {
      "rating": 5,
      "comment": "Not as described!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "mohan",
      "reviewerEmail": "mohan.gonzalez@x.dummyjson.com"
    }
  ]
} */