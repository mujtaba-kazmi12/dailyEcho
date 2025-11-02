'use client';

import React, { useState, useEffect } from 'react';

const NewsSection = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const breakingNews = [
    "A newfound quasicrystal formed in the first atomic bomb tested in US",
    "Scientists discover new species of deep-sea creature in Pacific Ocean",
    "Revolutionary breakthrough in quantum computing achieved by researchers",
    "Climate change report reveals alarming trends in global temperatures"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => 
          (prevIndex + 1) % breakingNews.length
        );
        setFadeClass('opacity-100');
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [breakingNews.length]);
  return (
    <div className="min-h-fit" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4 pt-8 pb-6 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Featured Article Image */}
              <div className="relative h-96 bg-gray-700  overflow-hidden">
                <img 
                  src="/images/pci1.jpg" 
                  alt="Featured News" 
                  className="w-full h-full object-cover"
                />
                
                
                
                {/* Article Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight hover:text-[#d6374f] cursor-pointer">
                    Target thinks it can keep growing sales, here's how the retailer will do it
                  </h1>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium uppercase">
                      BUSINESS
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">March 4, 2022</span>
                  </div>
                  
                  <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                    It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top News Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-6">
                <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
                <h2 className="text-gray-300 text-lg font-bold mx-4">Top News</h2>
                <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
              </div>
              
              <div className="space-y-6">
                {/* Top News Article 1 */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded overflow-hidden">
                    <img 
                      src="/images/pci1.jpg" 
                      alt="News" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                   
                    <h3 className="text-white text-xl font-semibold leading-tight mb-2 hover:text-[#d6374f] cursor-pointer">
                      A newfound quasicrystal formed in the first atomic bomb tested in US
                    </h3>
                    <div className="flex items-center space-x-3 text-xs">
                      <span className="bg-gray-600 text-white px-2 py-0.5 rounded uppercase font-medium">
                        SCIENCE
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400">March 4, 2022</span>
                    </div>
                  </div>
                </div>

                {/* Top News Article 2 */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded overflow-hidden">
                    <img 
                      src="/images/pci1.jpg" 
                      alt="News" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                   
                    <h3 className="text-white text-xl font-semibold leading-tight mb-2 hover:text-[#d6374f] cursor-pointer">
                      How omicron's mutations make it the most infectious coronavirus variant
                    </h3>
                    <div className="flex items-center space-x-3 text-xs">
                      <span className="bg-gray-600 text-white px-2 py-0.5 rounded uppercase font-medium">
                        SCIENCE
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400">March 4, 2022</span>
                    </div>
                  </div>
                </div>

                {/* Top News Article 3 */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-20 h-20  bg-gray-700 rounded overflow-hidden">
                    <img 
                      src="/images/pci1.jpg" 
                      alt="News" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-semibold leading-tight mb-2 hover:text-[#d6374f] cursor-pointer">
                      Africa's fynbos plants hold their ground with the world's thinnest roots
                    </h3>
                    <div className="flex items-center space-x-3 text-xs">
                      <span className="bg-gray-600 text-white px-2 py-0.5 rounded uppercase font-medium">
                        SCIENCE
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400">March 4, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="mt-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex text-white items-center">
            <span className="py-3 px-4 text-md font-bold uppercase flex-shrink-0" style={{ backgroundColor: '#d61935' }}>
              BREAKING NEWS
            </span>
            <div className="flex-1 py-3 px-4" style={{ backgroundColor: '#333333' }}>
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <span className="text-sm font-bold">
                  {breakingNews[currentNewsIndex]}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden text-white">
            <div className="py-3 px-4 text-md font-bold uppercase" style={{ backgroundColor: '#d61935' }}>
              BREAKING NEWS
            </div>
            <div className="py-3 px-4" style={{ backgroundColor: '#333333' }}>
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <span className="text-sm font-bold">
                  {breakingNews[currentNewsIndex]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;