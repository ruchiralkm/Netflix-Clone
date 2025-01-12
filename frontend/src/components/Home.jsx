import { useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  const { state } = useLocation();

  return (
    <div>
      {/* <h1>Welcome, {state.name}!</h1>
      <p>Email: {state.email}</p> */}

      {/* Pass state.name to Nav */}
      <Nav userName={state.name} userEmail={state.email} />
      <Carousel />

      <div className="flex items-center justify-center min-h-screen p-4 mt-[-200px] bg-gray-100">
        <div className="grid grid-cols-1 gap-6 max-w-8xl sm:grid-cols-4">
          {/* Movie Card 1 */}
          <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
            <img
              src="https://dnm.nflximg.net/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABShbW-dwcF0WdzxNH6Wrw42S0VoyMM8gvcOoQ4PhLLD2F-NMiotNJBl5sQGjhKeSh0FuMFj8CFaFkL955pBwjNPpwL4qhGHc5wOcTrhQUnzOcB162aWglEX60Dlbm-VJo0YwIw.jpg"
              alt="Movie 1"
              className="object-cover w-full h-52"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                Inception
              </h2>
              <p className="mb-4 text-gray-600">
                A mind-bending thriller by Christopher Nolan.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>⭐ 8.8</span>
                <span>Genre: Sci-Fi</span>
                <span>2010</span>
              </div>
              <div className="p-1 mt-2">
                <button>click</button>
              </div>
            </div>
          </div>

          {/* Movie Card 2 */}
        </div>
      </div>
    </div>
  );
};

export default Home;
