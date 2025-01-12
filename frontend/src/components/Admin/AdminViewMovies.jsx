import React, { useEffect, useState } from "react";
import AdminNav from "../Nav/AdminNav";
import "./css/AdminAddMovies.css";

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
    <>
      <AdminNav />
      <div className="bgImg">
        <div className="min-h-screen py-8">
          <div className="container py-8 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center text-gray-300">
              Movies List{" "}
            </h1>

            {movies.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md table-auto">
                  <thead className="text-white bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 font-medium text-left">Title</th>
                      <th className="px-6 py-3 font-medium text-left">Image</th>
                      <th className="px-6 py-3 font-medium text-left">Genre</th>
                      <th className="px-6 py-3 font-medium text-left">Year</th>
                      <th className="px-6 py-3 font-medium text-left">
                        Rating
                      </th>
                      <th className="px-6 py-3 font-medium text-left">
                        Movie Link
                      </th>
                      <th className="px-6 py-3 font-medium text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((movie) => (
                      <tr
                        key={movie._id}
                        className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200"
                      >
                        <td className="px-6 py-4 font-medium text-gray-800">
                          {movie.title}
                        </td>
                        <td className="px-6 py-4">
                          <img
                            src={`http://localhost:5000/${movie.movieImage}`}
                            alt={movie.title}
                            className="w-24 h-auto rounded-lg shadow-md"
                          />
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {movie.genre}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {movie.year}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {movie.rating}
                        </td>
                        <td className="px-6 py-4 text-blue-500 underline">
                          <a
                            href={movie.movieLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <button className="w-16 p-1 text-white bg-red-600 rounded-md">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500">No movies available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewMovies;
