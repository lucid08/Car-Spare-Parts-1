// // import React, { useState } from 'react';
// // import brakeLogo from './images/brake.png'; // Ensure the path is correct
// // import searchIcon from './images/search.png'; // Ensure the path is correct
// // import cartIcon from './images/shopping-cart.png'

// // const Navbar = () => {
// //   const [selectedCategory, setSelectedCategory] = useState(null);

// //   const handleCategoryClick = (category) => {
// //     setSelectedCategory(category);
// //   };

// //   return (
// //     <nav className="bg-gray-800 shadow-lg">
// //       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
// //         {/* Logo */}
// //         <a href="/" className="flex items-center space-x-3">
// //           <img src={brakeLogo} className="h-12" alt="Logo" />
// //           <span className="self-center text-3xl font-bold text-orange-500">
// //             SpareSphere
// //           </span>
// //         </a>

// //         {/* Navigation Links, Search Bar, and Login/Signup */}
// //         <div className="flex items-center space-x-8">
// //           {/* Navigation Links */}
// //           <ul className="flex space-x-6">
// //             <li>
// //               <a
// //                 href="/"
// //                 className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
// //               >
// //                 Home
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 href="/about"
// //                 className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
// //               >
// //                 About
// //               </a>
// //             </li>
// //             {/* Categories Dropdown */}
// //             <li className="relative group">
// //               <button className="text-white hover:text-orange-500 text-base font-medium transition duration-300">
// //                 Categories
// //               </button>
// //               <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-500 rounded-lg shadow-lg mt-2 top-[-100%] z-10">
// //                 <li>
// //                   <button
// //                     onClick={() => handleCategoryClick('engine')}
// //                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
// //                   >
// //                     < a href='/category/Engine'>
// //                     Engine
// //                     </a>
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => handleCategoryClick('tires')}
// //                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
// //                   >
// //                     < a href='/category/Tires'>
// //                     Tires
// //                     </a>
// //                     </button>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => handleCategoryClick('electronics')}
// //                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
// //                   >
// //                     < a href='/category/Electronics'>
// //                     Electronics
// //                     </a>
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => handleCategoryClick('brakes')}
// //                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
// //                   >
// //                     <a href='/category/Brakes'>
// //                     Brakes
// //                     </a>
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => handleCategoryClick('accessories')}
// //                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
// //                   >
// //                     <a href='/category/Accessories'>
// //                     Accessories
// //                     </a>
// //                   </button>
// //                 </li>
// //               </ul>
// //             </li>
// //           </ul>

// //           {/* Search Bar */}
// //           <div className="relative">
// //             <input
// //               type="text"
// //               id="search-navbar"
// //               className="block w-64 p-3 pl-12 text-sm text-white border border-gray-500 rounded-lg bg-gray-700 focus:ring-orange-500 focus:border-orange-500 placeholder-white"
// //               placeholder="Search..."
// //             />
// //             <img
// //               src={searchIcon}
// //               alt="Search Icon"
// //               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
// //             />
// //           </div>

// //           {/* Login & Signup Buttons */}
// //           <a
// //             href="/login"
// //             className="text-sm text-white  hover:text-orange-500"
// //           >
// //             Login
// //           </a>
// //           <a
// //             href="/signup"
// //             className="text-sm text-white  hover:text-orange-500 "
// //           >
// //             Signup
// //           </a>

// //           {/* Cart Button next to Signup */}
// //           <a
// //             href="/cart"
// //             className="text-sm text-white hover:text-orange-500 "
// //           >
// //             <img src={cartIcon} alt="Cart Icon" className="w-5 h-5" /> {/* Cart icon image */}
// //           </a>
// //         </div>
// //       </div>

      
// //     </nav>
// //   );
// // };

// // export default Navbar;










// import React, { useState, useEffect } from 'react';
// import brakeLogo from './images/brake.png'; // Ensure the path is correct
// import searchIcon from './images/search.png'; // Ensure the path is correct
// import cartIcon from './images/shopping-cart.png';

// const Navbar = () => {
  

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  
//   // useEffect to check login status on initial load
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);  // Empty dependency array ensures this runs only once on mount

//   const handleLogout = () => {
//     // Remove token from localStorage and set loggedIn status to false
//     localStorage.removeItem('token');
//     setIsLoggedIn(false); // Update state immediately
//     window.location.href = '/login'; // Redirect to login page
//   };
// const handleDashboard =() =>{
//   navigate("/dashboard");
// }
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <nav className="bg-gray-800 shadow-lg">
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-3">
//           <img src={brakeLogo} className="h-12" alt="Logo" />
//           <span className="self-center text-3xl font-bold text-orange-500">
//             SpareSphere
//           </span>
//         </a>

//         {/* Navigation Links, Search Bar, and Login/Signup */}
//         <div className="flex items-center space-x-8">
//           {/* Navigation Links */}
//           {isLoggedIn ? (
//   <a
//     href="/dashboard"
//     className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
//   >
//     Dashboard
//   </a>
// ) : (
//   <button >
//   </button>
// )}


//           <ul className="flex space-x-6">
//             <li>
//               <a
//                 href="/"
//                 className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/about"
//                 className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
//               >
//                 About
//               </a>
//             </li>
//             {/* Categories Dropdown */}
//             <li className="relative group">
//               <button className="text-white hover:text-orange-500 text-base font-medium transition duration-300">
//                 Categories
//               </button>
//               <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-500 rounded-lg shadow-lg mt-2 top-[-100%] z-10">
//                 <li>
//                   <button
//                     onClick={() => handleCategoryClick('engine')}
//                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <a href="/category/Engine">Engine</a>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleCategoryClick('tires')}
//                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <a href="/category/Tires">Tires</a>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleCategoryClick('electronics')}
//                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <a href="/category/Electronics">Electronics</a>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleCategoryClick('brakes')}
//                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <a href="/category/Brakes">Brakes</a>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleCategoryClick('accessories')}
//                     className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <a href="/category/Accessories">Accessories</a>
//                   </button>
//                 </li>
//               </ul>
//             </li>
//           </ul>

//           {/* Search Bar */}
//           <div className="relative">
//             <input
//               type="text"
//               id="search-navbar"
//               className="block w-64 p-3 pl-12 text-sm text-white border border-gray-500 rounded-lg bg-gray-700 focus:ring-orange-500 focus:border-orange-500 placeholder-white"
//               placeholder="Search..."
//             />
//             <img
//               src={searchIcon}
//               alt="Search Icon"
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
//             />
//           </div>
    
// {/* Login/Signup or Logout Button */}






//           {/* Login/Signup or Logout Button */}
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <a
//                 href="/login"
//                 className="text-sm text-white hover:text-orange-500"
//               >
//                 Login
//               </a>
//               <a
//                 href="/signup"
//                 className="text-sm text-white hover:text-orange-500"
//               >
//                 Signup
//               </a>
//             </>
//           )}

          

//           {/* Cart Button next to Signup */}
//           <a
//             href="/cart"
//             className="text-sm text-white hover:text-orange-500"
//           >
//             <img src={cartIcon} alt="Cart Icon" className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import brakeLogo from './images/brake.png';
import searchIcon from './images/search.png';
import cartIcon from './images/shopping-cart.png';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex items-center space-x-3">
          <img src={brakeLogo} className="h-12" alt="Logo" />
          <span className="self-center text-3xl font-bold text-orange-500">SpareSphere</span>
        </button>

        {/* Navigation Links, Search Bar, and Login/Signup */}
        <div className="flex items-center space-x-8">
          {isLoggedIn && (
            <button
              onClick={() => navigate('/dashboard')}
              className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
            >
              Dashboard
            </button>
          )}

          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate('/')}
                className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/about')}
                className="text-white hover:text-orange-500 text-base font-medium transition duration-300"
              >
                About
              </button>
            </li>
            {/* Categories Dropdown */}
            <li className="relative group">
              <button className="text-white hover:text-orange-500 text-base font-medium transition duration-300">
                Categories
              </button>
              <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-500 rounded-lg shadow-lg mt-2 top-[-100%] z-10">
                {['Engine', 'Tires', 'Electronics', 'Brakes', 'Accessories'].map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => navigate(`/category/${category}`)}
                      className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="block w-64 p-3 pl-12 text-sm text-white border border-gray-500 rounded-lg bg-gray-700 focus:ring-orange-500 focus:border-orange-500 placeholder-white"
              placeholder="Search..."
            />
            <img src={searchIcon} alt="Search Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4" />
          </div>

          {/* Login & Signup */}
          {!isLoggedIn ? (
            <>
              <button onClick={() => navigate('/login')} className="text-sm text-white hover:text-orange-500">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="text-sm text-white hover:text-orange-500">
                Signup
              </button>
            </>
          ) : (
            <button onClick={handleLogout} className="text-sm text-white hover:text-orange-500">
              Logout
            </button>
          )}

          {/* Cart Button */}
          <button onClick={() => navigate('/cart')} className="text-sm text-white hover:text-orange-500">
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
