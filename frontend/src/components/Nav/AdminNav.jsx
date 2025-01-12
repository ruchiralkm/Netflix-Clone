import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls Movies dropdown

  return (
    <nav className="shadow-lg bg-black/100">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/AdminHome">
            <img
              src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
              alt="Netflix Logo"
              className="w-auto h-8"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-8 text-white lg:flex">
          <button className="w-auto p-2 text-white">
            <Link to="/login">Home</Link>
          </button>
          <div className="relative">
            <button
              className="w-auto p-2 text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Movies
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 w-40 mt-2 bg-black border border-gray-700 rounded-md shadow-lg">
                <Link
                  to="/AdminAddMovies"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  Add Movies
                </Link>
                <Link
                  to="/AdminViewMovies"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  View Movies
                </Link>
              </div>
            )}
          </div>
          <button className="w-24 p-2 text-white bg-red-700 rounded-sm">
            <Link to="/login">Logout</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col text-white bg-black lg:hidden">
          <button className="w-auto p-2 text-white">
            <Link to="/login">Home</Link>
          </button>
          <div className="relative">
            <button
              className="w-auto p-2 text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Movies
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col px-4 py-2 text-sm bg-black">
                <Link to="/add-movies" className="py-1 hover:text-red-400">
                  Add Movies
                </Link>
                <Link to="/view-movies" className="py-1 hover:text-red-400">
                  View Movies
                </Link>
              </div>
            )}
          </div>
          <button className="w-auto p-1 text-white bg-red-700 rounded-sm">
            <Link to="/login">Logout</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;
