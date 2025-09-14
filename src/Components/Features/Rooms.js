import React, { useState } from "react";

import deluxe from '../../images/deluxe.png'
import executive from '../../images/executive.png'
import standard from '../../images/standard.png'

const rooms = [
  {
    title: "Deluxe Room",
    image: deluxe,
    price: "Rs. 3,500 / night",
    features: ["1 King Bed", "Free Wi-Fi", "Air Conditioning"],
  },
  {
    title: "Executive Room",
    image: executive,
    price: "Rs. 8,000 / night",
    features: ["2 King Beds", "City View", "Mini Bar", "Jacuzzi"],
  },
  {
    title: "Standard Room",
    image: standard,
    price: "Rs. 2,500 / night",
    features: ["1 Queen Bed", "Flat Screen TV", "Breakfast Included"],
  },
];

const Rooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = () => {
    // Simulate booking confirmation (no actual submission)
    alert(
     ` Booking confirmed for ${selectedRoom.title}!\nDetails:\nName: ${formData.name}\nAddress: ${formData.address}\nCard: ${formData.cardNumber}`
    );
    setIsModalOpen(false);
    setFormData({ name: "", address: "", cardNumber: "", expiry: "", cvv: "" });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData({ name: "", address: "", cardNumber: "", expiry: "", cvv: "" });
  };

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
              <button
                onClick={() => handleBookNow(room)}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Booking Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-4">
              Book {selectedRoom?.title}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
