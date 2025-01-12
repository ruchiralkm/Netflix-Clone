const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  movieImage: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
  movieLink: { type: String, required: true },
});

module.exports = mongoose.model("movieModel", movieSchema);
