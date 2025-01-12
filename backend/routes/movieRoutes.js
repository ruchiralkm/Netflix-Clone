// movieRoutes.js
const express = require("express");
const multer = require("multer");
const movieController = require("../controllers/movieController"); // Ensure the correct path to controller
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define where the uploaded files should go
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Use a timestamp as a unique filename
  },
});

const upload = multer({ storage });

// Route to Get All Movies
router.get("/movies", movieController.getMovies); // Calls getMovies from movieController

// Route to Add a New Movie
router.post(
  "/add-movie",
  upload.single("movieImage"),
  movieController.addMovie
); // Calls addMovie from movieController

// Export the router
module.exports = router;
