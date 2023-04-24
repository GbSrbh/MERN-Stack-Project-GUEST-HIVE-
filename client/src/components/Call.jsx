import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="bg-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Become an Guest Hive host today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Start earning money and welcoming guests from around the world.
          </p>
          <div className="mt-8">
            <Link
              to={'/account/places'}
              className="inline-block bg-white py-3 px-8 font-medium text-gray-900 rounded-lg hover:bg-gray-100"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;