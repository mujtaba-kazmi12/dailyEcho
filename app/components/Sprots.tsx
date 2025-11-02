'use client';

import React from 'react';

const SportsNewsCarousel = () => {
  const businessNews = [
    {
      id: 1,
      image: "/images/pci1.jpg",
      title: "Target thinks it can keep growing sales, here's how the retailer will do it",
      category: "BUSINESS",
      date: "March 4, 2022",
      isPremium: true
    },
    {
      id: 2,
      image: "/images/pci1.jpg",
      title: "AMC is charging more for 'Batman' tickets as it tests out a new pricing model",
      category: "BUSINESS",
      date: "March 4, 2022",
      isPremium: false
    },
    {
      id: 3,
      image: "/images/pci1.jpg",
      title: "Benioff touts Salesforce's sales guidance, '$30 billions are ahead of us'",
      category: "BUSINESS",
      date: "March 4, 2022",
      isPremium: false
    },
    {
      id: 4,
      image: "/images/pci1.jpg",
      title: "Meta says today's cellular networks aren't ready for the metaverse",
      category: "BUSINESS",
      date: "March 4, 2022",
      isPremium: false
    },
    {
      id: 5,
      image: "/images/pci1.jpg",
      title: "Ford splits EVs into separate units as it boosts electric business",
      category: "BUSINESS",
      date: "March 4, 2022",
      isPremium: true
    },
    {
      id: 6,
      image: "/images/pci1.jpg",
      title: "Nordstrom shares soar as it makes 'baby steps', still has a ways to go",
      category: "BUSINESS",
      date: "March 4, 2022",
      isPremium: false
    }
  ];

  return (
    <div className="py-8 mx-3" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4 border border-gray-700" style={{ backgroundColor: '#0f0f0f' }}>
        {/* Header Section */}
        <div className="flex items-center mb-8 pt-8">
          <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          <h2 className="text-white text-2xl font-bold mx-6">Sports</h2>
          <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
        </div> 

        {/* News Items Container */}
        <div className="pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {businessNews.map((article) => (
              <div key={article.id} className="flex cursor-pointer hover:opacity-80 transition-opacity">
                {/* Image */}
                <div className="flex-shrink-0 w-24 h-20 relative mr-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                 
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white text-sm font-bold leading-tight mb-2 line-clamp-2 hover:text-gray-300">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="text-white px-2 py-0.5 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>
                      {article.category}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="ml-2">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SportsNewsCarousel;