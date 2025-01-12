import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast
import WelcomeNav from "./Nav/WecomeNav";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      navigate("/home", { state: { name: data.name, email: data.email } });
    } catch (error) {
      // Display error message using toast
      toast.error("Invalid email or password", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <Toaster /> {/* Add Toaster component to display toast messages */}
      <WelcomeNav />
      <div className="bbg">
        <div
          className="flex items-center justify-center min-h-screen bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/1600x900')",
          }}
        >
          <div className="p-10 bg-black rounded-lg shadow-lg bg-opacity-70 w-96">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Sign In
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 mb-4 text-white bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 mb-4 text-white bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Sign In
              </button>
              {/* Remember Me and Help */}
              <div className="flex items-center justify-between mt-4">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-gray-300 hover:underline">
                  Need Help?
                </a>
              </div>
              {/* Already have an account */}
              <p className="mt-4 text-center text-gray-300">
                Don't have an account?{" "}
                <Link to="/register" className="text-red-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
