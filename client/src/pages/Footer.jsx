import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20 rounded-3xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="">
              <img
                className="h-12"
                src={"http://localhost:4000/uploads/sss.png"}
                alt="Hosting icon"
              />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  Listings
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  to="/account/places"
                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  Become a host
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link

                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  About
                </Link>
              </div>
            </nav>
            <p className="mt-8 text-center text-base text-gray-300">
              &copy; 2023 Guest Hive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
