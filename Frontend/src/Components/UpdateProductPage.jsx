import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";  // For animations

const UpdateProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    stockQuantity: "",
    category: "",
  });
  const [image, setImage] = useState(null); // For file upload
  const [currentImage, setCurrentImage] = useState(""); // To display existing image
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You need to be logged in.");
          navigate("/login");
          return;
        }

        const response = await axios.get(
          `http://localhost:8000/api/v1/product/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const product = response.data.product;

        if (!product) {
          setError("Product not found.");
          return;
        }

        setFormData({
          title: product.title || "",
          price: product.price || "",
          description: product.description || "",
          stockQuantity: product.stockQuantity || "",
          category: product.category || "",
        });
        setCurrentImage(product.image || ""); // Set the current image URL
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You need to be logged in.");
        navigate("/login");
        return;
      }

      const data = new FormData();
      data.append("title", formData.title);
      data.append("price", formData.price);
      data.append("description", formData.description);
      data.append("stockQuantity", formData.stockQuantity);
      data.append("category", formData.category);

      if (image) {
        data.append("image", image);
      }

      const response = await axios.put(
        `http://localhost:8000/api/v1/product/update-product/${productId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product updated successfully!");
      navigate(`/product/${productId}`);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white">Loading product details...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <motion.div
      className="flex justify-center items-center bg-gray-900 p-6 space-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left side - Image Preview */}
      <div className="w-1/3 flex justify-center">
        {currentImage && (
          <motion.div
            className="w-76 h-96 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={currentImage}
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        )}
      </div>

      {/* Right side - Update Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 p-6 w-1/2 rounded-xl shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center text-white">
          Update Product
        </h1>

        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="text-white">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="stockQuantity" className="text-white">
              Stock Quantity
            </label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="category" className="text-white">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select a category</option>
              <option value="Engine">Engine</option>
              <option value="Tires">Tires</option>
              <option value="Electronics">Electronics</option>
              <option value="Brakes">Brakes</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div>
            <label htmlFor="image" className="text-white">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Update Product
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default UpdateProductPage;
