import React from "react";
import { useLocation } from "react-router-dom";

// Function to map movie title to YouTube video ID
const getYouTubeVideoId = (title) => {
  const movieVideoIds = {
    Inception: "YoHD9XEInc0",
    "The Matrix": "vKQi3bBA1y8",
    Interstellar: "zSWdZVtXT7E",
    // Add more movie titles and their corresponding video IDs here
  };

  return movieVideoIds[title] || "S0IWuCdeBME"; // Default video if not found
};

const WatchMovie = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return <p className="text-white">No movie to watch.</p>;
  }

  // Get the YouTube video ID for the movie title
  const videoId = getYouTubeVideoId(movie.title);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white bg-black">
      <div className="max-w-4xl p-6 bg-[#0F0F0F] rounded-lg shadow-lg">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="mb-4 text-3xl font-bold">{movie.title}</h1>
      </div>
    </div>
  );
};

export default WatchMovie;
