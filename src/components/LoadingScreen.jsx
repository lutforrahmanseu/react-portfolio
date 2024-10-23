import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-700" >
      <div className="text-center">
        <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 100 100">
          <circle 
            cx="50" cy="50" r="45" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="8"
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-dash"
          />
          <path 
            d="M25,50 L40,65 L75,30" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-check"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-white mb-2">Loading</h2>
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`w-3 h-3 bg-white rounded-full animate-bounce`} style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;



