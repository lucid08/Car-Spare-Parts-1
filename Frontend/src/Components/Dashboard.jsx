import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";  // For animation and sliding effects

const DashBoard = () => {
  const [userItems, setUserItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products created by the user
  const fetchUserProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://spare-sphere-1.onrender.com/.onrender.comapi/v1/product/user/products",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUserItems(response.data.products);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Load user products on component mount
  useEffect(() => {
    fetchUserProducts();
  }, []);

  const handleUpdateProduct = (id) => {
    console.log(`Update Product clicked for product ID: ${id}`);
    // Add update functionality
  };

  const handleDeleteProduct = async (id) => {
    try {
      console.log(`Delete Product clicked for product ID: ${id}`);
      await axios.delete(`/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUserItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      setError("Failed to delete the product. Please try again.");
    }
  };

  return (
    <div className="dashboard bg-gray-900 p-6 rounded-lg shadow-xl space-y-6 min-h-screen relative">
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-3xl font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Your Product's
        </motion.h1>
      </div>

      {loading ? (
        <motion.div
          className="flex justify-center items-center text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Loading products...</span>
        </motion.div>
      ) : error ? (
        <motion.div
          className="text-center text-red-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4"></h2>
          {userItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userItems.map((item) => (
                <motion.div
                  key={item._id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-56 object-cover rounded-lg transition-all duration-500 transform hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-56 bg-gray-300 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">No Image Available</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white">Name : {item.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">Description : {item.description}</p>
                  <p className="text-md font-medium text-gray-100 mt-2">
                    Price: <span className="text-green-600">${item.price}</span>
                  </p>

                  <div className="mt-4 flex space-x-4">
                    <NavLink
                      to={`/update-product/${item._id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                    >
                      Update
                    </NavLink>
                    <button
                      onClick={() => handleDeleteProduct(item._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              No products found.
            </motion.div>
          )}
        </div>
      )}

      {/* Add Product button at the bottom right */}
      <motion.div
        className="absolute bottom-6 right-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/create-product">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition ease-in-out duration-300 transform hover:scale-105">
            Add Product
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default DashBoard;
