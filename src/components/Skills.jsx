import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import jsLogo from "../assets/javascript.png";
import htmlLogo from "../assets/html.png";
import mongodbLogo from "../assets/mongodb.png";
import expressLogo from "../assets/express.png";

const Skills = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: "React", level: 90, color: "#61DAFB", image: reactLogo },
    { name: "Node.js", level: 85, color: "#339933", image: nodeLogo },
    { name: "JavaScript", level: 88, color: "#F7DF1E", image: jsLogo },
    { name: "HTML/CSS", level: 92, color: "#E34F26", image: htmlLogo },
    { name: "MongoDB", level: 80, color: "#47A248", image: mongodbLogo },
    { name: "Express", level: 82, color: "#aea2a2", image: expressLogo },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills]; // Triplicate for smoother loop

  return (
    <div id="skills" className={`py-8 ${isDarkMode ? "bg-transparent" : "bg-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-2xl md:text-3xl font-bold text-center mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-66.666%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center justify-center ${
                  isDarkMode ? "bg-transparent rounded-lg" : "bg-white"
                } rounded-lg shadow-md p-2 mx-1 flex-shrink-0 w-44 h-24`}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
              >
                <div className="relative w-12 h-12 mb-1">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className={`${isDarkMode ? "text-gray-700" : "text-gray-200"} stroke-current`}
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="progress-ring__circle stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset={(251.2 * (100 - skill.level)) / 100}
                      style={{ color: skill.color }}
                    ></circle>
                  </svg>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8 object-contain rounded-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-xs font-medium text-center truncate w-full ${isDarkMode ? "text-white" : "text-gray-800"}`}
                >
                  {skill.name}
                </p>
                <p 
                  className="text-xs font-bold" 
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
