const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // Make sure to add this
const productRoute = require("./routes/ProductRoute")
// middle ware 
app.use(express.json()); // Middleware to parse JSON request bodies
// Load environment variables from .env file
dotenv.config();

// Port Configuration
port = process.env.PORT || 8890
app.listen(port, () => {
    console.log("server start")
})
// Routes
// app.get("/home", (req, res) => {
//     res.json("home page")
// });
app.use("/", productRoute);

// Database Connection
const dbURI = process.env.MONGODB
mongoose.connect(dbURI
)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });