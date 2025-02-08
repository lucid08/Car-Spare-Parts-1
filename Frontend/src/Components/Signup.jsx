import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import signupimg from "./images/login4.jpg";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    if (input.password !== document.getElementById("confirm-password").value) {
      return alert("Passwords do not match");
    }
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber);

    try {
      const res = await axios.post(
        `https://spare-sphere-1.onrender.com/api/v1/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300 text-white pt-16 sm:pt-20">
      {/* Main Container */}
      <div className="flex justify-center items-center min-h-[75vh] px-4 sm:px-6">
        {/* Form and Image Container */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl min-h-[75vh] bg-gray-800 shadow-lg overflow-hidden rounded-lg">
          {/* Left Side: Image with Animation */}
          <motion.div
            className="w-full md:w-1/2 h-56 md:h-auto bg-cover bg-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={signupimg} alt="Signup Visual" className="w-full h-full object-cover" />
            {/* Improved Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
              <motion.h2
                className="text-xl md:text-3xl font-extrabold text-orange-500 text-center drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Join Us Today !!
              </motion.h2>
            </div>
          </motion.div>

          {/* Right Side: Signup Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gray-700">
            <motion.div
              className="w-full max-w-md mx-auto bg-gray-700 shadow-xl rounded-3xl p-6 sm:p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl font-medium text-center text-orange-500 mb-4">
                Create Your Account
              </h2>

              <form onSubmit={submitHandler}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="block text-white text-sm font-semibold">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    value={input.fullName}
                    name="fullName"
                    onChange={changeEventHandler}
                    className="w-full sm:w-3/4 mt-2 px-2 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-600 text-sm"
                    placeholder="Enter your full name"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="block text-white text-sm font-semibold">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    value={input.email}
                    name="email"
                    onChange={changeEventHandler}
                    className="w-full sm:w-3/4 mt-2 px-2 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-600 text-sm"
                    placeholder="Enter your email"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="block text-white text-sm font-semibold">
                    Password
                  </label>
                  <motion.input
                    type="password"
                    value={input.password}
                    name="password"
                    onChange={changeEventHandler}
                    className="w-full sm:w-3/4 mt-2 px-2 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-600 text-sm"
                    placeholder="Create a password"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirm-password" className="block text-white text-sm font-semibold">
                    Confirm Password
                  </label>
                  <motion.input
                    type="password"
                    id="confirm-password"
                    className="w-full sm:w-3/4 mt-2 px-2 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-600 text-sm"
                    placeholder="Confirm your password"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="block text-white text-sm font-semibold">
                    Phone Number
                  </label>
                  <motion.input
                    type="number"
                    value={input.phoneNumber}
                    name="phoneNumber"
                    onChange={changeEventHandler}
                    className="w-full sm:w-3/4 mt-2 px-2 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-600 text-sm"
                    placeholder="Enter your phone number"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:bg-orange-700 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign Up
                </motion.button>
              </form>

              {/* Login Link */}
              <p className="text-xs text-center text-gray-400 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-orange-500 hover:underline">
                  Login
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
