import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://spare-sphere-1.onrender.comapi/v1/user/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      localStorage.setItem("token", res.data.token);
      if (res.data.success) {
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white items-center justify-center px-6">
      {/* Form Container */}
      <div className="w-full max-w-4xl bg-gray-600 rounded-3xl shadow-lg flex overflow-hidden">
        {/* Left Side: Image with animation */}
        <motion.div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('./Components/images/home1.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Optional text overlay (can be removed if not needed) */}
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <motion.h2
              className="text-4xl font-extrabold text-orange-500 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to Our Platform
            </motion.h2>
          </div>
        </motion.div>

        {/* Right Side: Login Form */}
        <div className="w-1/2 p-10">
          <motion.div
            className="w-full max-w-md mx-auto bg-gray-600 shadow-lg rounded-3xl p-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-4">Login</h2>
            <p className="text-center text-gray-400 mb-6">Welcome back! Please enter your credentials.</p>
            
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-md font-semibold text-gray-300">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="w-full mt-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-md font-semibold text-gray-300">Password</label>
                <motion.input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  className="w-full mt-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:bg-orange-700 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Login
              </motion.button>
            </form>
            
            <p className="text-sm text-center text-gray-400 mt-4">
              Don't have an account? <a href="/signup" className="text-orange-500 hover:underline">Sign Up</a>
            </p>
            <div className="text-center mt-4">
              <a href="/forgot-password" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
