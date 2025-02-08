import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://spare-sphere-1.onrender.com/api/v1/product/${id}`
        );
        setProduct(response.data.product);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("User not authenticated. Please log in.");
        return;
      }

      const response = await axios.post(
        "https://spare-sphere-1.onrender.com/api/v1/cart/add",
        {
          productId: product._id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // navigate("/");
        alert("Product added to cart successfully!");
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("An error occurred while adding the product to the cart.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24"> {/* Added pt-24 for spacing */}
      <div className="max-w-6xl w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <motion.h1
          className="text-3xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Product Details
        </motion.h1>
        {product ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg shadow-lg"
              />
            </motion.div>

            <div className="flex-1 text-white">
              <motion.h2
                className="text-xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Name : {product.title}
              </motion.h2>
              <p className="text-lg mb-6">Description : {product.description}</p>
              <p className="text-lg font-bold mb-4">
                Price: <span className="text-orange-400">Rs.{product.price}</span>
              </p>
              <p className="text-lg mb-6">
                <strong>Stock:</strong> {product.stockQuantity}
              </p>

              {/* Improved Quantity Control */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
                  disabled={quantity === 0}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition"
                >
                  <span className="text-2xl">-</span>
                </button>

                <span className="text-xl text-gray-200 px-4 py-2 border rounded-md">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(product.stockQuantity, prev + 1)
                    )
                  }
                  disabled={quantity === product.stockQuantity}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition"
                >
                  <span className="text-2xl">+</span>
                </button>
              </div>

              {/* Add to Cart and Go Back Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={addToCart}
                  className="w-full bg-green-500 text-white px-4 py-3 rounded-md font-medium hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white text-center">No product found</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
