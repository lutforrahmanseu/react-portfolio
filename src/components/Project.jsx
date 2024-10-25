import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaGithub, FaYoutube } from "react-icons/fa";

import image1 from "../assets/e-commerce.png";
import image2 from "../assets/portfolio.png";

import image3 from "../assets/doctor.png";
import { Link } from "react-router-dom";

const projects = {
  All: [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with MERN stack.",
      image: image1,
      techStack: "React, Node.js, MongoDB",
      liveLink: "https://react-tailwind-dashboards.vercel.app/",
      githubLink: "https://github.com/lutforrahmanseu/react-tailwind-dashboard",
      details:
        "This is a detailed description of the E-commerce Website project, including features, challenges, and learnings.",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills.",
      image: image2,
      techStack: "React, Tailwind CSS",
      liveLink: "https://lutforrahman.vercel.app/",
      githubLink: "https://github.com/lutforrahmanseu/portfolio",

      details:
        "This is a detailed description of the Portfolio Website project, showcasing my personal projects and skills.",
    },
    {
      title: "Doctor Appointment",
      description:
        "A personal portfolio website showcasing projects and skills.",
      image: image3,
      techStack: "React, Tailwind CSS",
      liveLink: "https://doctor-appointment-apps.vercel.app/",
      githubLink: "https://github.com/lutforrahmanseu/doctor-appointment",

      details:
        "This is a detailed description of the Portfolio Website project, showcasing my personal projects and skills.",
    },
    // Add more projects as needed
  ],
  Web: [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with MERN stack.",
      image: image1,
      techStack: "React js, Tailwind CSS",
      liveLink: "https://react-tailwind-dashboards.vercel.app/",
      githubLink: "https://github.com/lutforrahmanseu/react-tailwind-dashboard",
      details:
        "This project is a fully functional e-commerce platform, featuring user authentication, product management, and a shopping cart.",
    },
  ],
  Mobile: [
    {
      title: "Mobile App",
      description: "A cross-platform mobile app built with React Native.",
      image: image2,
      techStack: "React Native, Expo",
      details:
        "This mobile app was developed to work across both iOS and Android platforms, focusing on seamless user experience and performance.",
    },
  ],
  Design: [
    {
      title: "UI/UX Design",
      description: "A sleek user interface design for a finance app.",
      image: image3,
      techStack: "Figma, Adobe XD",
      details:
        "Designed a user-friendly and aesthetically pleasing interface for a finance application, emphasizing usability and clean design.",
    },
  ],
  // Other tabs
};

const tabs = ["All", "Web", "Mobile", "Design"];
export default function Project() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className={`${
        isDarkMode ? "bg-transparent text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <section id="projects" className="py-10 px-4 md:px-12 lg:px-24">
          <div className=" text-center">
            <h2 className="text-4xl font-bold mb-8 ">My Projects</h2>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  className={`px-4 py-2 mx-2 rounded-full text-sm font-medium ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  } hover:bg-blue-400 hover:text-white transition`}
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 2 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Project Cards */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {projects[activeTab].map((project, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg shadow-lg hover:shadow-xl  transition-shadow duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 2 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 rounded-t-lg object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-4">
                        {project.title}
                      </h3>
                      <p className="mb-4">{project.description}</p>
                      <p className="text-sm mb-4">
                        <strong>Tech Stack:</strong> {project.techStack}
                      </p>
                      <div className="flex justify-between items-center">
                        {project.liveLink && (
                          <Link
                            to={project.liveLink}
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:text-blue-600"
                          >
                            <FaGlobe className="mr-2" />
                            Live Site
                          </Link>
                        )}
                        {project.githubLink && (
                          <Link
                            to={project.githubLink}
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-gray-900"
                          >
                            <FaGithub className="mr-2" />
                            GitHub
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
