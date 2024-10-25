import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Banner() {
  const { isDarkMode } = useTheme();
  const [role, setRole] = useState("");
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (role.length < roles[roleIndex].length) {
          setRole(roles[roleIndex].slice(0, role.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setRole("");
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }, 1000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [role, roleIndex, isTyping]);
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Lutfor-Rahman.pdf";
    link.download = "Lutfor-Rahman.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return (
    <div
      className={`min-h-screen flex items-center justify-center${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <div data-aos="fade-down" className="mb-8">
          <h1 className="text-5xl font-bold mb-2">
            Hello, I'm{" "}
            <span className="block text-5xl mt-2">Lutfor Rahman</span>
          </h1>
          <p className="text-3xl font-roboto-light mt-4 h-8">
            {role}
            <span className="animate-blink">|</span>
          </p>
        </div>
        <div className="space-x-4" data-aos="fade-up">
          <Link
            to="/contact"
            className={`${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white font-roboto-medium py-2 px-4 rounded`}
          >
            Hire Me
          </Link>
          <button
            onClick={handleDownload}
            className={`${
              isDarkMode
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-500 hover:bg-green-600"
            } text-white font-roboto-medium py-2 px-4 rounded`}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
