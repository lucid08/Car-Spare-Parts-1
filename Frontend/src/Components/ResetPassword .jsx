// // ResetPassword.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const ResetPassword = () => {
//   const { token } = useParams(); // Extract token from the URL
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `https://spare-sphere-1.onrender.com/api/v1/user/reset-password/${token}`,
//         {
//           password,
//         }
//       );
//       setMessage(response.data.message);
//       setError("");
//       setTimeout(() => {
//         navigate("/login"); // Redirect to login page after success
//       }, 3000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
//           <h2 className="text-2xl font-bold text-center mb-6">
//             Reset Password
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-medium"
//               >
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter new password"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-gray-700 font-medium"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Confirm new password"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
//             >
//               Reset Password
//             </button>
//           </form>
//           {message && <p className="text-green-500 mt-4">{message}</p>}
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


// ResetPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `https://spare-sphere-1.onrender.com/api/v1/user/reset-password/${token}`,
        {
          password,
        }
      );
      setMessage(response.data.message);
      setError("");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg p-12 bg-gray-900 shadow-md rounded-md"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <label htmlFor="password" className="block text-white font-medium">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
                required
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4"
            >
              <label htmlFor="confirmPassword" className="block text-white font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm new password"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="w-full bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-blue-600 focus:outline-none text-lg"
            >
              Reset Password
            </motion.button>
          </form>
          {message && <motion.p className="text-green-500 mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{message}</motion.p>}
          {error && <motion.p className="text-red-500 mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{error}</motion.p>}
        </motion.div>
      </div>
    </div>
  );
};

export default ResetPassword;
