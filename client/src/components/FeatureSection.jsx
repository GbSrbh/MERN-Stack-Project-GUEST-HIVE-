import React from 'react';
import { FaMoneyBillAlt, FaRegClock, FaHandsHelping } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      title: 'Extra income',
      description:
        'You can earn extra income by sharing your space with guests.',
      icon: <FaMoneyBillAlt />,
    },
    {
      title: 'Flexibility',
      description: 'You can decide when and how often to host guests.',
      icon: <FaRegClock />,
    },
    {
      title: 'Ongoing support',
      description:
        'Get help from Guest Hive support 24/7 and join our global community of hosts.',
      icon: <FaHandsHelping />,
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What you'll love about hosting
          </h2>
          <p className="mt-4 text-xl text-gray-500 text-center">
            From extra income to ongoing support, hosting can help you achieve
            your goals.
          </p>
          <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-16">
            {features.map((feature) => (
              <div className="flex" key={feature.title}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
