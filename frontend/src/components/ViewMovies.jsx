import React from "react";
import { useLocation } from "react-router-dom";
import { Play, Info } from "lucide-react";
import Nav from "./Nav/Nav";

const ViewMovies = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return <p className="text-white">No movie details available.</p>;
  }

  return (
    <>
      <Nav />
      <div className="relative min-h-screen bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`http://localhost:5000/${movie.movieImage}`}
            alt=""
            className="object-cover w-full h-full opacity-70"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-start justify-end min-h-screen px-8 pb-16 md:px-16">
          {/* Movie Title */}
          <h1 className="mb-4 text-5xl font-bold tracking-wider text-white md:text-7xl">
            {movie.title}
          </h1>

          {/* Movie Details */}
          <div className="flex flex-wrap gap-4 mb-6 text-lg text-gray-300">
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span> {movie.rating}
            </span>
            <span>{movie.year}</span>
            <span>{movie.genre}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={movie.movieLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white transition-colors bg-red-600 rounded-md hover:bg-red-700"
            >
              <Play size={20} />
              Play Now
            </a>
            <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white transition-colors rounded-md bg-gray-700/50 hover:bg-gray-700">
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>

        {/* Additional Details Panel */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-1/2 " />
      </div>
    </>
  );
};

export default ViewMovies;
