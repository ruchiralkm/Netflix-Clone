import React from "react";
import AdminNav from "../Nav/AdminNav";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div className="bbg">
        <div
          className="flex items-center justify-center min-h-screen gap-6 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/1600x900')",
          }}
        >
          {/* 1st Box */}
          <div className="p-10 bg-black rounded-lg shadow-lg bg-opacity-70 w-96">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Add Movies
            </h2>

            <div className="flex justify-center">
              <Link to="/AdminAddMovies">
                {" "}
                <button className="text-white">Click here ➤</button>
              </Link>
            </div>
          </div>

          {/* 2nd Box */}
          <div className="p-10 bg-black rounded-lg shadow-lg bg-opacity-70 w-96">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              View Movies
            </h2>

            <div className="flex justify-center">
              <Link to="/AdminViewMovies">
                {" "}
                <button className="text-white">Click here ➤</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
