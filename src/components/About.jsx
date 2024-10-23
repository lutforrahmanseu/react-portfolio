import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../assets/about-image.jpg";
import { useTheme } from "../context/ThemeContext";
const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`min-h-screen max-w-7xl  mx-auto px-4 pt-20 ${
        isDarkMode ? "bg-transparent text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div id="about" className="overflow-hidden ">
        <section className="">
          <h2
            className="text-4xl font-bold mb-8 lg:mb-20 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            About Me
          </h2>
          <div className=" flex flex-col md:flex-row gap-12">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
              <div className="relative w-96 h-auto mx-auto">
                <img
                  src={aboutImage}
                  alt="Profile"
                  className="w-full h-auto rounded-lg shadow-sm object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-gray-800 opacity-30"></div>
              </div>
            </div>

            {/* Right Side - About Me and Tabs */}
            <div className="w-full md:w-1/2 " data-aos="fade-left">
              <p className="text-lg leading-relaxed mb-2">
                I am a passionate full-stack MERN developer with over 2 years of
                experience in creating dynamic web applications.
              </p>

              {/* Tab Navigation */}
              <div className="mb-8">
                <ul className="flex space-x-4">
                  <li
                    className={`cursor-pointer pb-2 ${
                      activeTab === "skills"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : ""
                    }`}
                    onClick={() => setActiveTab("skills")}
                  >
                    Skills
                  </li>
                  <li
                    className={`cursor-pointer pb-2 ${
                      activeTab === "experience"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : ""
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    Experience
                  </li>
                  <li
                    className={`cursor-pointer pb-2 ${
                      activeTab === "education"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : ""
                    }`}
                    onClick={() => setActiveTab("education")}
                  >
                    Education
                  </li>
                </ul>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === "skills" && (
                  <div data-aos="fade-up">
                    {/* Skill Bars */}
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                      <div className="mb-2">
                        <p className="font-medium mb-1">React JS</p>
                        <div className="relative w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-blue-500 h-4 rounded-full"
                            data-aos="width"
                            data-aos-duration="1000"
                            style={{ width: "90%" }}
                            aria-label="React JS skill level"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                              90%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <p className="font-medium mb-1">Node.js</p>
                        <div className="relative w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-green-500 h-4 rounded-full"
                            data-aos="width"
                            data-aos-duration="1000"
                            style={{ width: "85%" }}
                            aria-label="Node.js skill level"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                              85%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <p className="font-medium mb-1">MongoDB</p>
                        <div className="relative w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-yellow-500 h-4 rounded-full"
                            data-aos="width"
                            data-aos-duration="1000"
                            style={{ width: "80%" }}
                            aria-label="MongoDB skill level"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                              80%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <p className="font-medium mb-1">Express Js</p>
                        <div className="relative w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-purple-500 h-4 rounded-full"
                            data-aos="width"
                            data-aos-duration="1000"
                            style={{ width: "75%" }}
                            aria-label="Express Js skill level"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                              75%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <p className="font-medium mb-1">JavaScript</p>
                        <div className="relative w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-pink-500 h-4 rounded-full"
                            data-aos="width"
                            data-aos-duration="1000"
                            style={{ width: "60%" }}
                            aria-label="JavaScript skill level"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                              60%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "experience" && (
                  <div data-aos="fade-up">
                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
                      <ul className="space-y-8">
                        <li className="flex items-center">
                          <div className="w-1/2 text-right">
                            <h4 className="font-semibold">2022 - Present</h4>
                            <p className="">
                              Front-end Developer - Analayzen BD Ltd.
                            </p>
                          </div>
                          <div className="relative w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          <div className="w-1/2 pl-4"></div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1/2 text-right"></div>
                          <div className="relative w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          <div className="w-1/2 pl-4">
                            <h4 className="font-semibold">2021 - 2022</h4>
                            <p className="">
                              Front-end Developer - MazeGeek Bd Ltd.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {activeTab === "education" && (
                  <div data-aos="fade-up">
                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 rounded-2xl"></div>
                      <ul className="space-y-4">
                        <li className="flex  items-center">
                          <div className="w-1/2 text-right">
                            <h4 className="font-semibold">2016 - 2021</h4>
                            <p className="">
                              Bachelor of Science in Computer Science
                            </p>
                            <p className="">
                              Southeast University, Dhaka, Bangladesh.
                            </p>
                          </div>
                          <div className="relative w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          <div className="w-1/2 pl-4"></div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1/2 text-right"></div>
                          <div className="relative w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          <div className="w-1/2 pl-4">
                            <h4 className="font-semibold">2013 - 2015</h4>
                            <p className="">Higher Secondary Certificate</p>
                            <p className="">
                              Fulbaria University Collage,Fulbaria.
                            
                            </p>
                          </div>
                        </li>
                        <li className="flex  items-center">
                          <div className="w-1/2 text-right">
                            <p className=""> Secondary School Certificate</p>
                            <p className="">
                              All Hera Academy High School, Fulbaria.
                              
                            </p>
                          </div>
                          <div className="relative w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                          <div className="w-1/2 pl-4"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
