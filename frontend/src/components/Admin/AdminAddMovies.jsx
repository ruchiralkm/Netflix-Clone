// AdminAddMovies.jsx
import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../Nav/AdminNav";

const AdminAddMovies = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    movieImage: "",
    genre: "",
    year: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleFileChange = (e) => {
    setMovieData({ ...movieData, movieImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", movieData.title);
    formData.append("movieImage", movieData.movieImage);
    formData.append("genre", movieData.genre);
    formData.append("year", movieData.year);
    formData.append("rating", movieData.rating);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/Movies/add-movie",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to add movie");
    }
  };

  return (
    <div>
      <AdminNav />
      <h1>Add Movies</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required onChange={handleChange} />
        </div>
        <div>
          <label>Movie Image:</label>
          <input
            type="file"
            name="movieImage"
            required
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" name="genre" required onChange={handleChange} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" name="year" required onChange={handleChange} />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AdminAddMovies;
