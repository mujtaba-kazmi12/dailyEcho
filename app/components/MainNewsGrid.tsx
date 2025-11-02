'use client';

import React from 'react';

const MainNewsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto text-white" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Top Section Headers with Red Lines - Desktop Only */}
      <div className="hidden md:grid md:grid-cols-3 border-b border-gray-700">
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">Africa</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">Europe</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">Asia</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
        {/* Europe Header - Mobile Only */}
        <div className="block md:hidden order-1 p-4 mt-6 pb-8 border-b border-gray-700">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">Europe</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>

        {/* Center Section - Europe News (Mobile: First, Desktop: 2 columns wide) */}
        <div className="order-2 md:order-2 md:col-span-2 border-r-0 md:border-r border-gray-700 p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Main Featured Article */}
          <div className="border-b border-gray-700 pb-4 md:pb-6">
            <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Near the frontline in eastern Ukraine, snipers and scepticism abound</h1>
            <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-4">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>EUROPE</span>
              <span>March 4, 2022</span>
            </div>
            <img 
              src="/images/pci1.jpg" 
              alt="Ukraine frontline" 
              className="w-full h-48 md:h-64 object-cover mb-2 md:mb-4"
            />
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              It is a daily ritual for millions of Australians, but if you have noticed the price of 
              your morning flat white or soy latte increase, brace yourself — it is likely to get 
              worse. By the end of the year...
            </p>
          </div>

          {/* Second Article - Premium */}
          <div className="border-b border-gray-700 pb-4 md:pb-6">
           
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Eight Bulgarians among 11 missing after fire on ship near Corfu</h2>
            <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-4">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>EUROPE</span>
              <span>March 4, 2022</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              It is a daily ritual for millions of Australians, but if you have noticed the price of 
              your morning flat white or soy latte increase, brace yourself — it is likely to get 
              worse. By the end of the year...
            </p>
          </div>

          {/* Third Article */}
          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">More people in need of charity in Europe since COVID-19, NGO says</h2>
            <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-4">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>EUROPE</span>
              <span>March 4, 2022</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              It is a daily ritual for millions of Australians, but if you have noticed the price of 
              your morning flat white or soy latte increase, brace yourself — it is likely to get 
              worse. By the end of the year...
            </p>
          </div>
        </div>

        {/* Africa Header - Mobile Only */}
        <div className="block md:hidden order-3 p-4 mt-6 pb-8  border-b border-gray-700 ">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">Africa</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>

        {/* Left Sidebar - Africa News (Mobile: Second, Desktop: First) */}
        <div className="order-4 md:order-1 border-r-0 md:border-r border-gray-700 p-4 space-y-4">
          {/* Article 1 */}
          <div className="border-b border-gray-700 pb-4">
            <img 
              src="/images/pci1.jpg" 
              alt="News" 
              className="w-full h-24 object-cover mb-2"
            />
            <h3 className="text-sm font-bold mb-2">Scientists use ivory tusk DNA data to locate poaching networks</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>AFRICA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          {/* Article 2 */}
          <div className="border-b border-gray-700 pb-4">
            <img 
              src="/images/pci1.jpg" 
              alt="News" 
              className="w-full h-24 object-cover mb-2"
            />
            <h3 className="text-sm font-bold mb-2">Tanzania unveils new non-invasive method to detect COVID-19</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>AFRICA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          {/* Article 3 - Premium */}
          <div className="border-b border-gray-700 pb-4">
            <div className="relative">
              <img 
                src="/images/pci1.jpg" 
                alt="News" 
                className="w-full h-24 object-cover mb-2"
              />
           
            </div>
            <h3 className="text-sm font-bold mb-2">Nigeria to ban money rituals and smoking in Nollywood movies</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>AFRICA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          {/* Advertisement */}
          <div className="p-4 text-center" style={{ backgroundColor: '#d61935' }}>
            <div className="text-white">
              <h4 className="font-bold text-lg mb-2">NewsPaper Theme</h4>
              <p className="text-sm mb-3">$1 best seller</p>
              <button className="bg-white px-4 py-2 text-sm font-bold" style={{ color: '#d61935' }}>GET NOW</button>
            </div>
          </div>

          {/* More Articles */}
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-sm font-bold mb-2">Eritrean Tesfatsion wins Tour du Rwanda for second time</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>AFRICA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <div className="relative mb-2">
              
            </div>
            <h3 className="text-sm font-bold mb-2">Netflix to premiere African reality show 'Young, Famous & African'</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>AFRICA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-2">Africa records high number of gamers with some turning pro</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>AFRICA</span>
              <span>March 4, 2022</span>
            </div>
          </div>
        </div>

        {/* Asia Header - Mobile Only */}
        <div className="block md:hidden order-5 p-4 mt-6 pb-8  border-b border-gray-700">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">Asia</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>

        {/* Right Sidebar - Asia News (Mobile: Third, Desktop: Last) */}
        <div className="order-6 md:order-3 p-4 space-y-4">
          {/* Article 1 - Premium */}
          <div className="border-b border-gray-700 pb-4">
           
            <h3 className="text-sm font-bold mb-2">In Seoul, housing is at the centre of the South Korea election</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>ASIA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          {/* Advertisement Banner */}
          <div className="p-4 text-center mb-4" style={{ backgroundColor: '#d61935' }}>
            <div className="text-white">
              <h4 className="font-bold text-lg mb-2">Quality Design</h4>
              <p className="text-sm mb-3">$1 best seller</p>
              <button className="bg-white px-4 py-2 text-sm font-bold" style={{ color: '#d61935' }}>GET NOW</button>
            </div>
          </div>

          {/* More Asia Articles */}
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-sm font-bold mb-2">Seals help Japanese researchers collect data under Antarctic ice</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>ASIA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-sm font-bold mb-2">Thailand agrees plan for Saudi Arabia labour as ties normalise</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>ASIA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          {/* Additional Posts with Images */}
          <div className="border-b border-gray-700 pb-4">
            <img 
              src="/images/pci1.jpg" 
              alt="News" 
              className="w-full h-24 object-cover mb-2"
            />
            <h3 className="text-sm font-bold mb-2">China's tech crackdown continues with new regulations</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>ASIA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <img 
              src="/images/pci1.jpg" 
              alt="News" 
              className="w-full h-24 object-cover mb-2"
            />
            <h3 className="text-sm font-bold mb-2">Singapore launches new green energy initiative</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>ASIA</span>
              <span>March 4, 2022</span>
            </div>
          </div>

          <div>
            <img 
              src="/images/pci1.jpg" 
              alt="News" 
              className="w-full h-24 object-cover mb-2"
            />
            <h3 className="text-sm font-bold mb-2">India's space program reaches new milestone</h3>
            <div className="flex items-center text-xs text-gray-400">
              <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>ASIA</span>
              <span>March 4, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsGrid;