// import React from "react";
// import aboutImage from "./images/about1.png";
// import qualityImage from "./images/about2.jpg";
// import serviceImage from "./images/about3.jpg";

// const About = () => {
//   return (
//     <div className="p-8 bg-gray-300 min-h-screen">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-5xl font-extrabold text-orange-500 mb-4">About Us</h1>
//         <p className="text-black text-xl leading-relaxed">
//           Your trusted partner for premium car spare parts and unparalleled maintenance solutions.
//         </p>
//       </div>

//       {/* Main Banner Image */}
//       <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
//         <img
//           src={aboutImage}
//           alt="Car spare parts"
//           className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Introductory Text */}
//       <p className="text-black text-xl leading-relaxed mb-6">
//         Welcome to our Car Spare Parts Store, your one-stop destination for
//         high-quality and reliable car components. We take pride in offering
//         exceptional products that help maintain your vehicle in pristine condition.
//       </p>

//       {/* Closing Statement */}
//       <p className="text-black text-xl leading-relaxed mt-6 mb-12">
//         Whether you are looking to maintain, upgrade, or repair your vehicle, our expert team is here to make
//         the process smooth and hassle-free. Explore our premium selection of parts, designed to enhance your
//         car's performance, safety, and longevity.
//       </p>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Quality Products */}
//         <div className="flex flex-col items-center text-center">
//           <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
//             <img
//               src={qualityImage}
//               alt="Quality Assurance"
//               className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//           <h2 className="text-3xl font-bold text-black mb-2">Quality Products</h2>
//           <p className="text-black text-lg leading-relaxed">
//             Our mission is to provide an extensive range of top-tier products, from essential engine components to
//             specialized accessories, ensuring the best for your vehicle.
//           </p>
//         </div>

//         {/* Outstanding Service */}
//         <div className="flex flex-col items-center text-center">
//           <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
//             <img
//               src={serviceImage}
//               alt="Customer Service"
//               className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//           <h2 className="text-3xl font-bold text-black mb-2">Outstanding Service</h2>
//           <p className="text-black text-lg leading-relaxed">
//             We are dedicated to delivering exceptional customer service, ensuring a seamless shopping experience
//             for all your automotive needs.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import aboutImage from "./images/about1.png";
import qualityImage from "./images/about2.jpg";
import serviceImage from "./images/about3.jpg";

const About = () => {
  return (
    <div className="p-6 sm:p-8 bg-gray-300 text-gray-900 min-h-screen pt-20">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-500 mb-4">About Us</h1>
        <p className="text-gray-900 text-lg sm:text-xl leading-relaxed">
          Your trusted partner for premium car spare parts and unparalleled maintenance solutions.
        </p>
      </motion.div>

      {/* Main Banner Image with Hover Effect */}
      <motion.div 
        className="relative overflow-hidden rounded-lg shadow-lg mb-8 sm:mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={aboutImage}
          alt="Car spare parts"
          className="w-full h-60 sm:h-[450px] object-cover brightness-90"
        />
      </motion.div>

      {/* Introductory Text */}
      <motion.p 
        className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Welcome to our Car Spare Parts Store, your one-stop destination for
        high-quality and reliable car components. We take pride in offering
        exceptional products that help maintain your vehicle in pristine condition.
      </motion.p>

      {/* Closing Statement */}
      <motion.p 
        className="text-gray-900 text-base sm:text-lg leading-relaxed mt-6 mb-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Whether you are looking to maintain, upgrade, or repair your vehicle, our expert team is here to make
        the process smooth and hassle-free. Explore our premium selection of parts, designed to enhance your
        car's performance, safety, and longevity.
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Quality Products */}
        <motion.div
          className="flex flex-col items-center text-center px-4 sm:px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
            <motion.img
              src={qualityImage}
              alt="Quality Assurance"
              className="w-full h-60 sm:h-[400px] object-cover brightness-90"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">Quality Products</h2>
          <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
            Our mission is to provide an extensive range of top-tier products, from essential engine components to
            specialized accessories, ensuring the best for your vehicle.
          </p>
        </motion.div>

        {/* Outstanding Service */}
        <motion.div
          className="flex flex-col items-center text-center px-4 sm:px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
            <motion.img
              src={serviceImage}
              alt="Customer Service"
              className="w-full h-60 sm:h-[400px] object-cover brightness-90"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">Outstanding Service</h2>
          <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
            We are dedicated to delivering exceptional customer service, ensuring a seamless shopping experience
            for all your automotive needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
