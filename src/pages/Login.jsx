import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h1>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
              type="button"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <a href="#" className="text-indigo-600 hover:underline ml-1">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
