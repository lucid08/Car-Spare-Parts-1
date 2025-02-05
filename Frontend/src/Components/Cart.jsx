// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [shippingAddress, setShippingAddress] = useState("");

//   const handleDecrement = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const id = productId._id === undefined ? productId : productId._id;

//       const response = await axios.patch(
//         "http://localhost:8000/api/v1/cart/decrement-item",
//         { productId: id },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setCartItems(response.data.cart.items);
//       setTotalPrice(response.data.cart.totalPrice);
//     } catch (error) {
//       console.error("Error decrementing item quantity:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/cart/get-cart",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setCartItems(response.data.items);
//         setTotalPrice(response.data.totalPrice);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };

//     fetchCart();
//   }, []);

//   const handleCheckout = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:8000/api/v1/cart/checkout",
//         { shippingAddress },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert("Order placed successfully!");
//         setCartItems([]);
//         setTotalPrice(0);
//         setIsModalOpen(false);
//       } else {
//         alert("Failed to place order. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       alert(
//         error.response?.data?.message || "Something went wrong during checkout."
//       );
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-300 flex flex-col items-center px-4 py-8">
//       <h1 className="text-3xl font-bold text-black mb-8">Your Cart</h1>
//       {cartItems.length > 0 ? (
//         <>
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//             {cartItems.map((item) => (
//               <li
//                 key={item._id}
//                 className="bg-gray-800 shadow-md p-4 flex flex-col items-center space-y-4"
//               >
//                 <img
//                   src={item.products.image}
//                   alt={item.products.title}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h2 className="text-lg font-semibold text-white text-center">
//                   Name : <strong>{item.products.title} </strong>
//                 </h2>
//                 <p className="text-white text-center">
//                   Quantity: <strong>{item.quantity}</strong>
//                 </p>
//                 <p className="text-white text-center">
//                   Price: <strong>${item.price.toFixed(2)}</strong>
//                 </p>
//                 <button
//                   onClick={() => handleDecrement(item.product)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
//                 >
//                   Decrement
//                 </button>
//               </li>
//             ))}
//           </ul>
          
//           <footer className="flex justify-between items-center mt-8 w-full max-w-5xl ">
//             <h2 className="text-2xl font-bold text-black">Total: ${totalPrice.toFixed(2)}</h2>
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition"
//             >
//               Checkout
//             </button>
//           </footer>
          
//         </>
//       ) : (
//         <p className="text-black text-center text-lg">Your cart is empty.</p>
//       )}

//       {isModalOpen && (
//         <section className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <article className="bg-gray-600 p-6  shadow-lg w-full max-w-md">
//             <h2 className="text-xl font-bold mb-4 text-white">
//               Enter Your Address
//             </h2>
//             <textarea
//               className="w-full p-3 border  mb-4 focus:outline-none focus:ring focus:ring-gray-600 bg-gray-300 text-black"
//               rows="3"
//               value={shippingAddress}
//               onChange={(e) => setShippingAddress(e.target.value)}
//               placeholder="Enter your shipping address..."
//             />
//             <footer className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCheckout}
//                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//               >
//                 Submit
//               </button>
//             </footer>
//           </article>
//         </section>
//       )}
//     </section>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shippingAddress, setShippingAddress] = useState("");

  const handleDecrement = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const id = productId._id === undefined ? productId : productId._id;

      const response = await axios.patch(
        "http://localhost:8000/api/v1/cart/decrement-item",
        { productId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartItems(response.data.cart.items);
      setTotalPrice(response.data.cart.totalPrice);
    } catch (error) {
      console.error("Error decrementing item quantity:", error);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/v1/cart/get-cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.items);
        console.log(response.data.items);
        
        setCartItems(response.data.items);
        setTotalPrice(response.data.totalPrice);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCart();
  }, []);

  const handleCheckout = async () => {
    try {
      // const token = localStorage.getItem("token");

      // const response = await axios.post(
      //   "http://localhost:8000/api/v1/cart/checkout",
      //   { shippingAddress },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      // if (response.status === 200) {
      //   alert("Order placed successfully!");
      //   setCartItems([]);
      //   setTotalPrice(0);
      //   setIsModalOpen(false); // Close the modal after checkout
      // } else {
      //   alert("Failed to place order. Please try again.");
      // }
      try {
        // console.log("hiii");
        const {data:keyData}  = await axios.get('http://localhost:8000/getkey')
        const {data:orderData} = await axios.post('http://localhost:8000/payment/process', {
          totalPrice
        });
        const {key} = keyData;
        const {order} = orderData;
        console.log(key);
        
        console.log(order);
        const options = {
          key, // Replace with your Razorpay key_id
          amount: totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: 'INR',
          name: 'Sami Boy',
          description: 'Test Transaction',
          order_id: order.id, // This is the order_id created in the backend
          callback_url: 'http://localhost:8000/paymentSuccess', // Your success URL
          prefill: {
            name: 'Gaurav Kumar',
            email: 'gaurav.kumar@example.com',
            contact: '9999999999'
          },
          theme: {
            color: '#F37254'
          },
        };
  
        const rzp = new Razorpay(options);
        rzp.open();
      } catch (error) {
        console.log(error);
        
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert(
        error.response?.data?.message || "Something went wrong during checkout."
      );
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Your Cart
      </h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div
              key={item.product._id}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-500 transform hover:scale-105"
            >
              <div className="flex flex-col items-center animate-fadeIn">
                <img
                  src={item.product.image} // Assuming each item has an imageUrl property
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4 rounded-md transition-all duration-300 transform hover:scale-110"
                />
                <h2 className="text-xl font-semibold mb-2">Name : {item.product.title}</h2>
                <p className="text-lg font-medium mb-2">Rs.{item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-400 mb-4">Quantity: {item.quantity}</p>
                <button
                  onClick={() => handleDecrement(item.product)}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Decrement
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}

      <div className="flex justify-between items-center mt-8 text-white">
        <h2 className="text-xl font-semibold">Total: Rs.{totalPrice.toFixed(2)}</h2>
        <div className="flex space-x-4">
          {/* Checkout Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Checkout
          </button>

          {/* Back to Home Button */}
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Address Input Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Enter Your Address</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              rows="3"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your shipping address..."
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
