import React, { useEffect, useState } from "react";
import AdminNav from "../Nav/AdminNav";

const AdminViewMovies = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/Movies/movies");
        const data = await response.json();
        setMovies(data); // Set the fetched data in the state
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <AdminNav />
      <h1>View Movies</h1>
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie._id} style={{ marginBottom: "20px" }}>
              <h3>{movie.title}</h3>
              <img
                src={`http://localhost:5000/${movie.movieImage}`} // Correctly reference the image URL
                alt={movie.title}
                style={{ width: "200px", height: "auto" }}
              />
              <p>Genre: {movie.genre}</p>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminViewMovies;
