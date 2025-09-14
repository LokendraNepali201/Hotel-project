// src/pages/FullAbout.jsx or src/components/FullAbout.jsx
import React from 'react';

const Fullaboutus = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 mt-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About OUR Royal Hotel</h1>
      <p className="text-gray-700 text-lg leading-7 mb-6">
        OUR Royal Hotel is a luxury retreat located in the cultural heart of Nepal. Established with a vision to blend Nepali tradition with world-class hospitality, our hotel offers a serene and elegant environment for travelers and professionals alike.
      </p>
      <p className="text-gray-700 text-lg leading-7 mb-6">
        From tastefully designed rooms to gourmet dining experiences, every detail is crafted with care. Our hotel boasts panoramic views, rooftop lounges, traditional architecture, and modern amenities that ensure comfort and sophistication.
      </p>
      <p className="text-gray-700 text-lg leading-7 mb-6">
        We believe in personalized service, and our dedicated team goes above and beyond to ensure every guest feels valued and welcomed. Whether you’re visiting for a weekend getaway, attending a business conference, or hosting a wedding, OUR Royal Hotel promises an unforgettable experience.
      </p>
      <p className="text-gray-700 text-lg leading-7 mb-6">
        We are proud of our Nepali roots and reflect it through our warm hospitality, locally inspired decor, and a deep commitment to sustainability and community support.
      </p>

      <button 
        onClick={() => window.history.back()}
        className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
      >
        Go Back
      </button>
    </section>
  );
};

export default Fullaboutus;
