const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Logo and Company Info */}
            <div className="flex flex-col justify-between">
  <a>
    <span className="text-2xl font-semibold text-white">What's so special about SpareSphere ?</span>
  </a>
  <p className="text-sm text-gray-400 mt-1">
    SpareSphere is your one-stop destination for quality car spare parts. We aim to offer the best products to keep your vehicle in top shape.
  </p>
</div>


  
            {/* Centered Column: Quick Links */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                     Services
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Column 3: Contact Info */}
            <div className="flex flex-col justify-between ml-auto">
              <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Email: support@sparesphere.com</li>
                <li className="text-gray-400">Phone: (123) 456-7890</li>
                <li className="text-gray-400">Address: 123 Spare St., City, Country</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>© 2025 SpareSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  