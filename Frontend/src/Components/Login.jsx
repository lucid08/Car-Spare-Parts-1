import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import loginimg from './images/login4.jpg';

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://spare-sphere-1.onrender.com/api/v1/user/login`, input, {
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
    <div className="flex min-h-screen bg-gray-300 text-white items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl bg-gray-500 shadow-lg flex flex-col sm:flex-row overflow-hidden">
        {/* Left Side: Image with Overlay */}
        <motion.div
          className="w-full sm:w-1/2 flex justify-center items-center bg-black relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={loginimg} alt="Login Visual" className="w-full h-full object-cover" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
            initial={{ opacity: 50 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl font-bold text-orange-500 text-center px-4 tracking-widest"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome Back!
              <motion.p
                className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                to your one and only car spare parts platform
              </motion.p>
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Right Side: Login Form */}
        <div className="w-full sm:w-1/2 p-6 sm:p-10 bg-gray-900">
          <motion.div
            className="w-full max-w-md mx-auto bg-gray-900 shadow-lg rounded-3xl p-6 sm:p-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 text-center mb-4">Login</h2>
            <p className="text-center text-white mb-4 sm:mb-6"> Please enter your credentials.</p>
            
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
            
            <p className="text-sm text-center text-white mt-4">
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
