// movieController.js
const Movie = require("../models/movieModel");

// Get Movies Controller
const getMovies = async (req, res) => {
  let Movies;

  try {
    // Fetch all movies from the database
    Movies = await Movie.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to retrieve movies" });
  }

  // If no movies are found, return a 404 error
  if (!Movies || Movies.length === 0) {
    return res.status(404).json({ message: "No Movies found" });
  }

  // Return movies in a success response
  return res.status(200).json(Movies);
};

// Add a new movie Controller
const addMovie = async (req, res) => {
  const { title, genre, year, rating } = req.body;

  // Validate the required fields
  if (!title || !req.file || !genre || !year || !rating) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new movie entry in the database
    const newMovie = new Movie({
      title,
      movieImage: req.file.path, // Store the file path of the image
      genre,
      year,
      rating,
    });

    // Save the movie to the database
    await newMovie.save();

    // Return a success response
    res.status(201).json({
      message: "Movie added successfully",
      movie: newMovie,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add movie" });
  }
};

// Export controllers
module.exports = {
  getMovies,
  addMovie,
};
