// import React from "react";

// const Services = () => {
//   const services = [
//     {
//       title: "Genuine Spare Parts",
//       description:
//         "We provide authentic spare parts to ensure your vehicle maintains its original quality and performance.",
//       icon: "🚗",
//     },
//     {
//       title: "Wide Product Range",
//       description:
//         "From engine components to tires and accessories, we offer a comprehensive catalog for all your car needs.",
//       icon: "📦",
//     },
//     {
//       title: "Expert Consultation",
//       description:
//         "Our experts are available to guide you in selecting the perfect parts for your vehicle.",
//       icon: "💡",
//     },
//     {
//       title: "Fast Delivery",
//       description:
//         "Enjoy quick and reliable delivery services, ensuring your parts reach you on time.",
//       icon: "🚚",
//     },
//     {
//       title: "Affordable Pricing",
//       description:
//         "Get premium-quality products at competitive prices without compromising on quality.",
//       icon: "💰",
//     },
//   ];

//   return (
//     <div
//       className="p-8 min-h-screen flex flex-col items-center justify-center bg-gray-300"
//     >
//       <h1 className="text-4xl font-bold text-orange-500 mb-10 text-center ">
//         Our Services
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-gray-400 transition duration-300 bg-white bg-opacity-80"
//           >
//             <div className="text-4xl mb-4 text-center">{service.icon}</div>
//             <h2 className="text-2xl font-semibold text-black mb-2 text-center">
//               {service.title}
//             </h2>
//             <p className="text-black text-center">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaCar, FaShippingFast, FaLightbulb, FaBoxOpen, FaDollarSign } from "react-icons/fa";

const services = [
  {
    title: "Genuine Spare Parts",
    description:
      "We provide authentic spare parts to ensure your vehicle maintains its original quality and performance.",
    icon: <FaCar className="text-5xl text-orange-500" />,
  },
  {
    title: "Wide Product Range",
    description:
      "From engine components to tires and accessories, we offer a comprehensive catalog for all your car needs.",
    icon: <FaBoxOpen className="text-5xl text-orange-500" />,
  },
  {
    title: "Expert Consultation",
    description:
      "Our experts are available to guide you in selecting the perfect parts for your vehicle.",
    icon: <FaLightbulb className="text-5xl text-orange-500" />,
  },
  {
    title: "Fast Delivery",
    description:
      "Enjoy quick and reliable delivery services, ensuring your parts reach you on time.",
    icon: <FaShippingFast className="text-5xl text-orange-500" />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Get premium-quality products at competitive prices without compromising on quality.",
    icon: <FaDollarSign className="text-5xl text-orange-500" />,
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Comprehensive repair services and maintenance solutions to keep your vehicle running smoothly.",
    icon: <FaTools className="text-5xl text-orange-500" />,
  },
];

const Services = () => {
  return (
    <div className="p-6 sm:p-12 min-h-screen flex flex-col items-center bg-gray-300 text-gray-900">
      {/* Header Section with Animation */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 sm:mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">{service.title}</h2>

            {/* Description */}
            <p className="text-gray-900 text-sm sm:text-base">{service.description}</p>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-orange-500 opacity-0 hover:opacity-10 transition duration-300 rounded-xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
