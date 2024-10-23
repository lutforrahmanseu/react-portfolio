import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import backgroundImage from "../assets/background.png"; // Import your background image

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? isDarkMode
        ? "bg-transparent text-white backdrop-blur-3xl shadow-lg"
        : "bg-gray-300 text-black"
      : "bg-transparent"
  }`;

  const linkClasses = `px-3 py-2 rounded-md text-sm font-medium  ${
    isScrolled
      ? isDarkMode
        ? "text-white hover:bg-gray-200"
        : "text-black hover:bg-gray-700"
      : isDarkMode
      ? "text-white  hover:bg-black hover:bg-opacity-20"
      : "text-black hover:bg-white hover:bg-opacity-20"
  }`;

  return (
    <>
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center h-16">
                  <span className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
                    Lutfor
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {["Home", "About", "Blog", "Project", "Contact"].map((item) => (
                <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={linkClasses}>
                  {item}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className={`ml-4 p-2 rounded-full `}
              >
                {isDarkMode ? "🌙" : "🌞"}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggleSidebar}>
                <svg
                  className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full ${
            isDarkMode ? "bg-white text-black" : "bg-gray-900 text-white"
          } shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-5">
            <button
              onClick={toggleSidebar}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex items-center mb-6">
              <span className={`font-semibold text-lg ${isDarkMode ? "text-black" : "text-white"}`}>
                Lutfor
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {["Home", "About", "Blog", "Project", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode
                      ? "text-black hover:bg-gray-100"
                      : "text-white hover:bg-gray-800"
                  }`}
                  onClick={toggleSidebar}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => { toggleTheme(); toggleSidebar(); }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode
                    ? "text-black hover:bg-gray-100"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </nav>
    </>
  );
}
