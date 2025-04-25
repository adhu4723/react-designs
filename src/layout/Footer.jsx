import React from 'react';
import logo from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-amber-50  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
                  <img src={logo} alt="Logo" className="h-15" />
          
          <h2 className="text-xl font-bold mb-4">InterioHub</h2>
          <p className="text-sm text-gray-500">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-black hover:underline">Home</a></li>
            <li><a href="#" className="text-black hover:underline">Shop</a></li>
            <li><a href="#" className="text-black hover:underline">About</a></li>
            <li><a href="#" className="text-black hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-black hover:underline">Payment Options</a></li>
            <li><a href="#" className="text-black hover:underline">Returns</a></li>
            <li><a href="#" className="text-black hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-3">Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="text-black border-b-2 border-black text-sm hover:opacity-80"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-center py-4 text-sm text-gray-600">
        2023 funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
