import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import ThankYouMessage from "./ThankYouMessage";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
    
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY 
      );
      console.log(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to send email. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    }); 
  };

  if (isSubmitted) {
    return <ThankYouMessage isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? "bg-transparent text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
          <div
            className={`rounded-lg p-6 sm:p-8 ${
              isDarkMode ? "bg-transparent" : "bg-white"
            } shadow-lg`}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Contact Information
            </h2>
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
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-lg p-6 sm:p-8 ${
              isDarkMode ? "bg-transparent" : "bg-white"
            } shadow-lg`}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Send us a Message
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  isDarkMode
                    ? "bg-transparent border-gray-600"
                    : "bg-white border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  isDarkMode
                    ? "bg-transparent border-gray-600"
                    : "bg-white border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-3 py-2 border rounded-md ${
                  isDarkMode
                    ? "bg-transparent border-gray-600"
                    : "bg-white border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
                disabled={isLoading}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {error && <p className="mt-2 text-red-700 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
