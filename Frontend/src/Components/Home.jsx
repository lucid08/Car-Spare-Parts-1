// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import heroImage from "./images/home1.jpg";
// import reliabilityImage from "./images/home2.jpg";
// import affordabilityImage from "./images/home3.jpg";
// import qualityImage from "./images/home4.png";

// const Home = () => {
  
//   const navigate = useNavigate(); // Initialize useNavigate hook for routing

//   const handleGetStartedClick = () => {

//     const isLoggedIn = localStorage.getItem('token') !== null;
//     if (isLoggedIn) {
//     } else {
//       // If the user is not logged in, navigate to the login page
//       navigate("/login");
//     }
//     // navigate("/login"); // Navigate to the login page when "Get Started" is clicked
//   };

//   const handleExploreClick = () => {
//     navigate("/category/Engine"); // Navigate to the category page when "Explore Our Products" is clicked
//   };

//   return (
//     <div className="bg-gray-500 min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <img
//           src={heroImage}
//           alt="Hero"
//           className="w-full h-[500px] object-cover brightness-80"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
//           <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">
//             Your Trusted Partner for Car Spare Parts
//           </h1>
//           <p className="text-xl mb-6 animate__animated animate__fadeInUp">
//             Premium quality, reliability, and affordability—all in one place.
//           </p>
//           {/* Get Started Button */}
//           <button
//             onClick={handleGetStartedClick}
//             className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 animate__animated animate__zoomIn"
//           >
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-8 px-6 bg-gray-300 text-white">
//         <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
//           Why Partner with Us..?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Reliability */}
//           <div className="relative group rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={reliabilityImage}
//               alt="Reliability"
//               className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold mb-2">Unmatched Reliability</h3>
//                 <p className="text-lg">
//                   Count on us to deliver high-quality spare parts that last.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Affordability */}
//           <div className="relative group rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={affordabilityImage}
//               alt="Affordability"
//               className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold mb-2">Affordable Prices</h3>
//                 <p className="text-lg">
//                   Premium parts at competitive prices, perfect for every budget.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Quality */}
//           <div className="relative group rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={qualityImage}
//               alt="Quality"
//               className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold mb-2">Top-Notch Quality</h3>
//                 <p className="text-lg">
//                   We guarantee parts that enhance your vehicle's safety and performance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="bg-orange-600 py-4 text-center">
//         <h2 className="text-4xl font-extrabold text-white mb-6">
//           Ready to Upgrade Your Ride?
//         </h2>
//         <p className="text-lg text-white mb-2">
//           Discover premium car spare parts that suit your needs and budget.
//         </p>
//         {/* Explore Our Products Button */}
//         <button
//           onClick={handleExploreClick}
//           className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
//         >
//           Explore Our Products
//         </button>
//       </section>

      
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import heroImage1 from "./images/home1.jpg";
import heroImage2 from "./images/home2.jpg";
import heroImage3 from "./images/home3.jpg";
import reliabilityImage from "./images/home2.jpg";
import affordabilityImage from "./images/home3.jpg";
import qualityImage from "./images/home4.png";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    const isLoggedIn = localStorage.getItem("token") !== null;
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  const handleExploreClick = () => {
    navigate("/category/Engine");
  };

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section with Sliding Animation */}
      <section className="relative overflow-hidden">
        <Slider {...settings}>
          <div>
            <img
              src={heroImage1}
              alt="Hero 1"
              className="w-full h-[600px] object-cover brightness-75"
            />
          </div>
          <div>
            <img
              src={heroImage2}
              alt="Hero 2"
              className="w-full h-[600px] object-cover brightness-75"
            />
          </div>
          <div>
            <img
              src={heroImage3}
              alt="Hero 3"
              className="w-full h-[600px] object-cover brightness-75"
            />
          </div>
        </Slider>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            className="text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Your Trusted Partner for Car Spare Parts
          </motion.h1>
          <motion.p
            className="text-xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Premium quality, reliability, and affordability—all in one place.
          </motion.p>
          <motion.button
            onClick={handleGetStartedClick}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
          Why Partner with Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Reliability */}
          <motion.div
            className="relative group rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={reliabilityImage}
              alt="Reliability"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Unmatched Reliability</h3>
                <p className="text-lg">Count on us to deliver high-quality spare parts that last.</p>
              </div>
            </div>
          </motion.div>

          {/* Affordability */}
          <motion.div
            className="relative group rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={affordabilityImage}
              alt="Affordability"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Affordable Prices</h3>
                <p className="text-lg">
                  Premium parts at competitive prices, perfect for every budget.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quality */}
          <motion.div
            className="relative group rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={qualityImage}
              alt="Quality"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Top-Notch Quality</h3>
                <p className="text-lg">
                  We guarantee parts that enhance your vehicle's safety and performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-orange-600 py-8 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Upgrade Your Ride?
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover premium car spare parts that suit your needs and budget.
        </motion.p>
        <motion.button
          onClick={handleExploreClick}
          className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
        >
          Explore Our Products
        </motion.button>
      </section>
    </div>
  );
};

export default Home;
