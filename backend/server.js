// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Request Sharing
app.use(express.json()); // Parse incoming JSON requests

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Define API routes
app.use("/api/users", userRoutes); // User routes
app.use("/api/Movies", movieRoutes); // Movie routes

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
