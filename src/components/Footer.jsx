import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`pt-8 sm:pt-10 lg:pt-12 overflow-hidden ${
        isDarkMode
          ? "bg-transparent text-gray-300"
          : "bg-gray-100 text-gray-600"
      } backdrop-filter backdrop-blur-sm ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are passionate about creating amazing web experiences and
              sharing our knowledge with the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Project", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Lutfor Rahman</p>
           
            <p className="text-sm mb-2">Phone: (+088) 01609085903</p>
            <p className="text-sm">Email: lutforrahman@gmail.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div
          className={`mt-8 pt-8 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex justify-center space-x-6">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lutfor Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
