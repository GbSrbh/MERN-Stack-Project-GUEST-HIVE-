import React, { useState } from 'react';

const Faq = () => {
  const faqs = [
    {
      question: 'How do I become a host on Guest Hive?',
      answer:
        'To become a host on Guest Hive, simply create an account and list your space. You can customize your listing and set your own availability and pricing.',
    },
    {
      question: 'How much can I earn by hosting on Guest Hive?',
      answer:
        "How much you earn as an Guest Hive host depends on a variety of factors, such as the type of space you're listing, your location, and the time of year.You can use Guest Hive's price calculator to get an estimate of how much you could earn.",
    },
    {
      question: 'How does Guest Hive protect hosts from damage caused by guests?',
      answer:
        'Guest Hive has a Host Guarantee program that provides protection for up to $1 million in damage caused by guests. The program covers damage to your property and your belongings, as well as liability for any accidents that occur on your property.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <div
                  className="flex items-center justify-between cursor-pointer py-6"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`${activeIndex === index ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="py-6">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;

