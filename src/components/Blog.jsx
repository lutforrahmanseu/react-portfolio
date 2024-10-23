import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import reactLogo from '../assets/react.png'
import nodeLogo from '../assets/node.png'
import jsLogo from '../assets/javascript.png'
import htmlLogo from '../assets/html.png'

export default function Blog() {
  const { isDarkMode } = useTheme();
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building your first component.",
      content: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the fundamentals of React, including components, props, and state. We'll walk through creating your first React component and explain key concepts along the way.",
      date: "2023-05-15",
      author: "John Doe",
      image: reactLogo,
      category: "React"
    },
    {
      id: 2,
      title: "Advanced JavaScript Techniques",
      excerpt: "Explore advanced JavaScript concepts to level up your coding skills.",
      content: "JavaScript is a versatile language that powers the web. In this post, we'll dive into advanced JavaScript techniques, including closures, prototypes, and event handling. We'll explore practical examples and best practices to enhance your coding skills.",
      date: "2023-05-20",
      author: "Jane Smith",
      image: jsLogo,
      category: "JavaScript"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      excerpt: "Understand the differences between CSS Grid and Flexbox for layout design.",
      content: "CSS Grid and Flexbox are powerful layout tools in CSS. In this post, we'll compare the two, discussing their strengths and use cases. We'll explore practical examples and best practices to help you choose the right tool for your layout needs.",
      date: "2023-05-25",
      author: "Alex Johnson",
      image: htmlLogo,
      category: "CSS"
    },
    {
      id: 4,
      title: "Introduction to Node.js",
      excerpt: "Get started with server-side JavaScript using Node.js.",
      content: "Node.js is a runtime environment for JavaScript that allows you to run JavaScript code outside of a browser. In this post, we'll cover the basics of Node.js, including its architecture, event-driven model, and core modules. We'll explore practical examples and best practices to help you get started with Node.js.",
      date: "2023-06-01",
      author: "Emily Brown",
      image: nodeLogo,
      category: "Node.js"
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? 'bg-transparent text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 lg:mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h1>
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              
              className={`rounded-xl  overflow-hidden ${isDarkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col`}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative h-44"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <motion.div 
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {post.category}
                </motion.div>
              </motion.div>
              <div className="p-6 flex-grow flex flex-col">
                <motion.h2 
                  className="text-xl font-bold mb-3 line-clamp-2 flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {post.title}
                </motion.h2>
                <motion.p 
                  className={`text-sm mb-4 line-clamp-3 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {post.excerpt}
                </motion.p>
                <motion.div 
                  className="flex justify-between items-center text-sm mt-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{post.date}</span>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{post.author}</span>
                </motion.div>
              </div>
              <motion.div 
                className={`px-6 py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <button 
                  onClick={() => openModal(post)}
                  className={`text-sm font-semibold ${isDarkMode ? 'text-blue-300 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}
                >
                  Read More →
                </button>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={`w-full max-w-2xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-xl p-6 sm:p-8`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedPost.title}</h2>
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4" />
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedPost.date} | {selectedPost.author} | {selectedPost.category}
              </p>
              <p className={`text-base sm:text-lg mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {selectedPost.content}
              </p>
              <button
                onClick={closeModal}
                className={`px-4 py-2 rounded ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-300`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
