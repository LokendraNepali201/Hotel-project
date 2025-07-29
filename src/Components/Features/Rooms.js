import React from "react";
import deluxe from '../../images/deluxe.png'
import executive from '../../images/executive.png'
import standard from '../../images/standard.png'
const rooms = [
  {
    title: "Deluxe Room",
    image: deluxe,
    price: "Rs. 6,500 / night",
    features: ["1 King Bed", "Free Wi-Fi", "Air Conditioning"],
  },
  {
    title: "Executive Suite",
    image: executive,
    price: "Rs. 12,000 / night",
    features: ["2 King Beds", "City View", "Mini Bar", "Jacuzzi"],
  },
  {
    title: "Standard Room",
    image: standard,
    price: "Rs. 4,000 / night",
    features: ["1 Queen Bed", "Flat Screen TV", "Breakfast Included"],
  },
];

const Rooms = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20 mt-20">
      <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 mb-4">{room.price}</p>
              <ul className="list-disc list-inside text-gray-500 space-y-1">
                {room.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
