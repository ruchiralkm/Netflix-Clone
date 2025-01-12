import React, { useState } from "react";
import { Link } from "react-router-dom";

const WelcomeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg bg-black/100">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">
            <img
              src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
              alt="Netflix Logo"
              className="w-auto h-8" // Adjust height and width as needed
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
          <button className="w-24 p-2 text-white bg-red-700 rounded-sm">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-white bg-black lg:hidden">
          <button className="w-24 p-1 text-white bg-red-700 rounded-sm">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default WelcomeNav;
