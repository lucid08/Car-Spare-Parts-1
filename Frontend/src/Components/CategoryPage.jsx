import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/v1/product/${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(
          `Error fetching products for category ${category}:`,
          error
        );
      }
    };
    fetchCategoryProducts();
  }, [category]);

  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4 md:px-8 lg:px-16">
      {/* Category Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12 text-white capitalize"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {category} Products
      </motion.h1>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`} // Product detail page link
              className="relative group bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              style={{ maxWidth: "320px", margin: "auto" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5, duration: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Product Image */}
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Product Information */}
                <article className="p-4">
                  <motion.h3
                    className="text-lg font-semibold text-white group-hover:text-white transition duration-300"
                    whileHover={{ color: "#F59E0B" }}
                  >
                    Name : {product.title}
                  </motion.h3>
                  <motion.p
                    className="text-white mt-2 text-sm line-clamp-2"
                    whileHover={{ opacity: 0.9 }}
                  >
                    Description : {product.description}
                  </motion.p>
                  <p className="text-orange-500 font-bold mt-4 text-lg">
                    Price : Rs.{product.price}
                  </p>
                </article>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No products available
          </p>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
