import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Project from "./components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

function AppContent() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className={` min-h-screen ${isDarkMode ? "dark" : "light"}`}>
          <Navbar />
          <main
            className={`relative  ${
              isDarkMode
                ? "bg-transparent text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
