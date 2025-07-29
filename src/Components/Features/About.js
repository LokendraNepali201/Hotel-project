import React from 'react';
import Aboutpic from '../../images/Aboutpic.webp';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
import meeting from '../../images/meeting.png'
const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 mt-20">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-7 mb-4">
            Welcome to OUR Hotel — your perfect retreat in the heart of Nepal. Our luxury hotel combines traditional Nepali hospitality with modern comfort.
          </p>
          <p className="text-gray-600 text-lg leading-7 mb-4">
            With over a decade of experience, we offer top-class rooms, authentic cuisine, and personalized services to make your stay memorable. Whether you're here for business or pleasure, Solti Hotel ensures you feel at home.
          </p>
          <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            Learn More
          </button>
        </div>

        <div>
          <img
            src={Aboutpic}
            alt="Hotel pic"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Events and Conferences Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Events & Conferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={meeting}
              alt="Events"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-7 mb-4">
              Host your next big event with elegance and ease at OUR Hotel. From grand wedding receptions to professional business conferences, our event spaces are designed to impress.
            </p>
            <p className="text-gray-600 text-lg leading-7 mb-4">
              With spacious banquet halls, modern AV systems, and expert planners, we ensure your event is a success — from start to finish.
            </p>
            <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
              Explore Events
            </button>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* CEO */}
          <div className="text-center bg-gray-100 p-6 rounded-xl shadow-md">
            <img
              src={team1}
              alt="CEO"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Keshab Bista</h3>
            <p className="text-gray-600">Chief Executive Officer (CEO)</p>
            <p className="text-sm text-gray-500 mt-2">
              MBA – Hospitality, 15+ month experience in luxury hotel management.
            </p>
          </div>

          {/* Manager */}
          <div className="text-center bg-gray-100 p-6 rounded-xl shadow-md">
            <img
              src={team2}
              alt="Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Lokendra Nepali</h3>
            <p className="text-gray-600">Hotel Manager</p>
            <p className="text-sm text-gray-500 mt-2">
              BHM Graduate, expert in guest services and team leadership.
            </p>
          </div>

          {/* Director */}
          <div className="text-center bg-gray-100 p-6 rounded-xl shadow-md">
            <img
              src={team3}
              alt="Director"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Rekha Budha Magar</h3>
            <p className="text-gray-600">Managing Director</p>
            <p className="text-sm text-gray-500 mt-2">
              MSc in Hotel Management, 10 days of strategic leadership.
            </p>
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
