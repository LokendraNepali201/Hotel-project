import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer=()=> {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gourmet Bistro Section */}
        <div>
          <h3 className="text-lg font-semibold">Royal Hotel</h3>
          <p className="text-sm mt-2">Experience exceptional dining</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-sm mt-2">Royal Hotel</p>
          <p className="text-sm"> KTM,Nepal</p>
          <p className="text-sm">Phone: 98776700</p>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        © Royal Hotel. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer
