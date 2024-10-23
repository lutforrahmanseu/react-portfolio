import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-transparent text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`rounded-lg p-6 sm:p-8 ${isDarkMode ? 'bg-transparent' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-blue-500 text-xl" />
                <span>lutforrahman@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-4 text-blue-500 text-xl" />
                <span>(+088) 01609085903</span>
              </div>
              
            </div>
            <div className="mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`rounded-lg p-6 sm:p-8 ${isDarkMode ? 'bg-transparent' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">Send us a Message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-transparent border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-transparent border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-transparent border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}