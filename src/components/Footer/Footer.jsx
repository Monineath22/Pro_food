import React from 'react';
import LOGO from '../../assets/logo.png'; // Ensure this path and file exist.

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 pb-6 mt-[100px] shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo and Tagline Section */}
        <div className="flex flex-col items-center mb-10">
          <a href="/" className="mb-4">
            <img 
              src={LOGO} 
              alt="Company Logo" 
              className="h-12 w-auto"
            />
          </a>
          <p className="text-gray-600 text-center max-w-md">
            Your company tagline or short description goes here. Make it memorable and impactful.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">About</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Contact</a></li>
              <li><a href="/careers" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Careers</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">LinkedIn</a></li>
              <li><a href="https://facebook.com" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Facebook</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Terms of Use</a></li>
              <li><a href="/cookies" className="text-gray-700 hover:text-white hover:bg-gray-900 transition-colors px-2 py-1 rounded">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
