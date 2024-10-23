import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ThankYouMessage = ({ isDarkMode }) => {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-transparent text-white' : 'bg-gray-100 text-gray-900'}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center p-8 rounded-lg shadow-2xl ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          >
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Thank You!
          </motion.h2>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`mt-6 px-6 py-2 rounded-full ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition duration-300`}
            onClick={() => window.location.reload()}
          >
            Back to Contact
          </motion.button>
        </motion.div>
      </div>
    );
  };
  
  export default ThankYouMessage;