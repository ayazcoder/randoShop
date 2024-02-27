import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="bg-color-primary text-white py-4 relative w-full bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p>&copy; {year} RandomShop. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <Link to={'/'} className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to={'/blog'} className="hover:text-gray-300">Blog</Link>
              </li>
              <li>
                <Link to={'/about'} className="hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link to={'/contact'} className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
