import { useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="bg-black">
        {/* <h1>Welcome, {state.name}!</h1>
      <p>Email: {state.email}</p> */}

        {/* Pass state.name to Nav */}
        <Nav userName={state.name} userEmail={state.email} />
        <Carousel />

        <div className="flex items-center justify-center min-h-screen p-4 mt-[-200px] bg-black">
          <div className="grid grid-cols-1 gap-6 max-w-8xl sm:grid-cols-4">
            {/* Movie Card 1 */}
            <div className="overflow-hidden transition-transform duration-300 bg-gray-900 rounded-lg shadow-lg hover:scale-105">
              <img
                src="https://dnm.nflximg.net/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABShbW-dwcF0WdzxNH6Wrw42S0VoyMM8gvcOoQ4PhLLD2F-NMiotNJBl5sQGjhKeSh0FuMFj8CFaFkL955pBwjNPpwL4qhGHc5wOcTrhQUnzOcB162aWglEX60Dlbm-VJo0YwIw.jpg"
                alt="Movie 1"
                className="object-cover w-full h-52"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold text-white">Inception</h2>
                <p className="mb-4 text-white">
                  A mind-bending thriller by Christopher Nolan.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="text-white">⭐ 8.8</span>
                  <span className="text-white">Genre: Sci-Fi</span>
                  <span className="text-white">2010</span>
                </div>
                <div className="p-1 mt-2">
                  <button className="flex items-center px-4 py-2 font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
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

            {/* Movie Card 2 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
