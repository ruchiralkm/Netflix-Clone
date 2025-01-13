// AdminAddMovies.jsx
import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../Nav/AdminNav";
import "./css/AdminAddMovies.css";

const AdminAddMovies = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    movieImage: "",
    genre: "",
    year: "",
    rating: "",
    movieLink: "",
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
    formData.append("movieLink", movieData.movieLink);

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
    <>
      <AdminNav />
      <div className="bgImg">
        <div className="flex flex-col items-center min-h-screen py-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-6 bg-black rounded-lg shadow-lg"
          >
            <h1 className="mb-6 text-4xl font-bold text-white">
              Add New Movies
            </h1>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Movie Title"
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-gray-900 border border-none rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Movie Image
              </label>
              <input
                type="file"
                name="movieImage"
                required
                onChange={handleFileChange}
                className="w-full px-4 py-2 text-white border border-none rounded-lg shadow-sm bg-slate-900"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Genre
              </label>
              <input
                type="text"
                name="genre"
                required
                onChange={handleChange}
                placeholder="Action, Comedy, etc."
                className="w-full px-4 py-2 text-white bg-gray-900 border border-none rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Year
              </label>
              <input
                type="number"
                name="year"
                required
                onChange={handleChange}
                placeholder="Release Year"
                className="w-full px-4 py-2 text-white bg-gray-900 border border-none rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                step="0.1"
                required
                placeholder="1.5, 2.5, 3.5, etc."
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-gray-900 border border-none rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Movie Link
              </label>
              <input
                type="text"
                name="movieLink"
                required
                onChange={handleChange}
                placeholder="https://www.example.com"
                className="w-full px-4 py-2 text-white bg-gray-900 border border-none rounded-lg shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition-all duration-300 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
            >
              Add Movie
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminAddMovies;
