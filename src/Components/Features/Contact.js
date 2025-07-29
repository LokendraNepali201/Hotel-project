import React from "react";
import contactImg from "../../images/contact.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFax,
  FaInbox,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white shadow-lg rounded-md mt-20">
      {/* Top Title & Breadcrumb */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-14">Contact Us</h1>
        

      {/* Heading Section */}
      <h3 className="text-3xl font-bold mb-2 text-gray-800">Let’s Get in Touch</h3>
      <p className="text-gray-600 mb-10 text-lg">Our team would love to hear from you.</p>

      {/* Main Contact Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Form */}
        <div className="md:w-1/2">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              placeholder="Write Message Here"
              rows={5}
              className="border border-gray-300 rounded-md p-4 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-4 text-lg rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info + Image */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <img
            src={contactImg}
            alt="Contact"
            className="rounded-lg shadow-md object-cover h-60 w-full"
          />
          <div className="space-y-4 mt-4 text-gray-700 text-lg">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-indigo-600 mt-1" />
              <div>
                <strong>Phone:</strong> 4273999, 4272567
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-indigo-600 mt-1" />
              <div>
                <strong>Email:</strong>
                lbkhatri@royal.com.np
        
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-indigo-600 mt-1" />
              <div>
                <strong>Address:</strong> Tahachal, Kathmandu, Nepal
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaFax className="text-indigo-600 mt-1" />
              <div>
                <strong>Fax:</strong> +977 1-4272201, 4272206
              </div>
            </div>
            <div className="flex items-start gap-3">

               {/* Social Icons */}
        <div className="flex gap-6 text-3xl text-indigo-600">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="hover:text-indigo-800 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-600 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="hover:text-blue-500 transition" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
        </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Map + Social Media */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Google Map */}
        <div className="w-full md:w-2/3 h-[300px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Soaltee Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.238961027202!2d85.31267591506145!3d27.71724598278888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19082e10a3d3%3A0xe18d44aa547a5d62!2sHotel%20Soaltee%20Kathmandu!5e0!3m2!1sen!2snp!4v1694670636017!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
