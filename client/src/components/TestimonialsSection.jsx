import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Keertika',
      quote:
        'Hosting on GuestHive has been a great way for me to make extra income and meet interesting people from all over the world.',
      image: 'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Yadu',
      quote:
        "Guest Hive's support team has been incredibly helpful whenever I've had questions or concerns. I feel confident hosting knowing that I have their support.",
      image: 'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80',
    },
    {
      name: 'Vikram Aditya',
      quote: "Hosting is more than just providing a space to stay; it's about creating a welcoming environment that allows guests to thrive and feel like they belong. ",
      image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80'
    },
    {
      name: 'Honey',
      quote: "Hosting on their website was a delightful experience for me. ",
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      name: 'Pooja',
      quote: "The team was professional, communicative, and took care of everything from advertising my property to screening potential guests.",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Reenu Udawat',
      quote: "Overall, I would highly recommend Guest Hive to anyone looking to host their property.",
      image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Hear from our hosts
          </h2>
          <p className="mt-4 text-xl text-gray-500 text-center">
            See what other hosts have to say about their experience with Guest Hive.
          </p>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white shadow overflow-hidden rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <img
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="mt-4">
                    <blockquote className="text-lg">
                      <p className="text-gray-900">{testimonial.quote}</p>
                    </blockquote>
                    <div className="mt-4">
                      <p className="text-base font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
