import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src="https://i.postimg.cc/9F5r4xW5/tinura-edited-2.jpg"
            alt="Tinura Dinith Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"
          />
          <span className="text-2xl font-extrabold text-blue-600">
            Tinura Dinith
          </span>
        </Link>
        {/* Removed theme toggle button */}
      </div>
    </nav>
  );
};

export default Navbar;