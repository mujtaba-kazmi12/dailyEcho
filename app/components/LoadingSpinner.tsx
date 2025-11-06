'use client';

import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="text-center">
        {/* Animated Logo with Pulse Effect */}
        <div className="mb-8 animate-pulse">
          <div className="flex items-center justify-center space-x-2">
           
            <span className="text-4xl font-bold text-white">DailyEcho</span>
          </div>
        </div>

        {/* Spinning Loader */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            {/* Outer Ring */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
              style={{ 
                borderTopColor: '#d61935',
                borderRightColor: '#d61935',
                animationDuration: '1s'
              }}
            ></div>
            
            {/* Inner Ring */}
            <div 
              className="absolute inset-2 rounded-full border-4 border-transparent animate-spin"
              style={{ 
                borderBottomColor: '#ffffff',
                borderLeftColor: '#ffffff',
                animationDuration: '1.5s',
                animationDirection: 'reverse'
              }}
            ></div>

            {/* Center Dot */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: '#d61935' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-lg font-medium animate-pulse">
          Loading content...
        </p>

        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-2 mt-4">
          <div 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: '#d61935',
              animationDelay: '0s',
              animationDuration: '1s'
            }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: '#d61935',
              animationDelay: '0.2s',
              animationDuration: '1s'
            }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: '#d61935',
              animationDelay: '0.4s',
              animationDuration: '1s'
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
