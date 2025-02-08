// // ForgotPassword.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [wait, setWait] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setWait("Please Wait...");
//       const response = await axios.post(
//         "https://spare-sphere-1.onrender.com/api/v1/user/forgot-password",
//         { email }
//       );
//       setMessage(response.data.message);
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//       setMessage("");
//     } finally {
//       setWait("Email sent successfully");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex justify-center items-center h-screen bg-gray-300">
//         <div className="w-full max-w-md p-8 bg-gray-900 shadow-md rounded-md">
//           <h2 className="text-2xl font-bold text-white text-center mb-6">
//             Forgot Password
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-white font-medium"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
//             >
//               Send Reset Link
//             </button>
//           </form>
//           {message && <p className="text-green-500 mt-4">{message}</p>}
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


// ForgotPassword.jsx
// ForgotPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [wait, setWait] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setWait("Please Wait...");
      const response = await axios.post(
        "https://spare-sphere-1.onrender.com/api/v1/user/forgot-password",
        { email }
      );
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMessage("");
    } finally {
      setWait("Email sent successfully");
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
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Forgot Password
          </h2>
          <form onSubmit={handleSubmit}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="w-full bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-blue-600 focus:outline-none text-lg"
            >
              Send Reset Link
            </motion.button>
          </form>
          {message && <motion.p className="text-green-500 mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{message}</motion.p>}
          {error && <motion.p className="text-red-500 mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{error}</motion.p>}
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;

