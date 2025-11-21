import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Tinura Dinith. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;