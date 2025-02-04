import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate();

  // Fetch movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/Movies/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies based on the search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-[10px]">
      <div className="flex flex-col items-center min-h-screen p-4 bg-black">
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search your favourite movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 mb-6 text-white border border-gray-900 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <div className="grid w-full grid-cols-1 gap-6 max-w-7xl sm:grid-cols-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie._id}
                className="overflow-hidden transition-transform duration-300 bg-[#0F0F0F] rounded-lg shadow-lg hover:scale-105"
              >
                <img
                  src={`http://localhost:5000/${movie.movieImage}`}
                  alt={movie.title}
                  className="object-cover w-full h-52"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-bold text-white">
                    {movie.title}
                  </h2>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="text-white">⭐ {movie.rating}</span>
                    <span className="text-white">Genre: {movie.genre}</span>
                    <span className="text-white">{movie.year}</span>
                  </div>
                  <div className="p-1 mt-2">
                    <button
                      className="flex items-center px-4 py-2 font-semibold text-white transition-all"
                      onClick={() =>
                        navigate("/ViewMovies", { state: { movie } })
                      }
                    >
                      See more
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
