import React from 'react';

const LatestNews = () => {
  // Sample news data matching the image
  const newsArticles = [
    {
      id: 1,
      title: "'Fresh Banana Leaves' shows how Indigenous people have been harmed",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: true,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 2,
      title: "A fast radio burst's unlikely source may be a cluster of old stars",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 3,
      title: "Tiny living machines called xenobots can create copies of themselves",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 4,
      title: "A newfound quasicrystal formed in the first atomic bomb tested in US",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: true,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 5,
      title: "How omicron's mutations make it the most infectious coronavirus variant",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 6,
      title: "Africa's fynbos plants hold their ground with the world's thinnest roots",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 7,
      title: "Climate change is reshaping global weather patterns faster than expected",
      category: "SCIENCE",
      date: "March 3, 2022",
      isPremium: true,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 8,
      title: "New breakthrough in quantum computing brings us closer to practical applications",
      category: "TECHNOLOGY",
      date: "March 3, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 9,
      title: "Marine biologists discover new species in the deepest ocean trenches",
      category: "SCIENCE",
      date: "March 3, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 10,
      title: "Revolutionary gene therapy shows promise in treating rare diseases",
      category: "HEALTH",
      date: "March 2, 2022",
      isPremium: true,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 11,
      title: "Space telescope captures unprecedented images of distant galaxies",
      category: "SCIENCE",
      date: "March 2, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    },
    {
      id: 12,
      title: "Artificial intelligence breakthrough in natural language processing",
      category: "TECHNOLOGY",
      date: "March 2, 2022",
      isPremium: false,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase..."
    }
  ];

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className="flex-1 h-0.5" style={{ backgroundColor: '#d61935' }}></div>
        <h2 className="px-6 text-white text-2xl font-bold">{title}</h2>
        <div className="flex-1 h-0.5" style={{ backgroundColor: '#d61935' }}></div>
      </div>
    </div>
  );

  const NewsCard = ({ article }: { article: any }) => (
    <div className="cursor-pointer hover:opacity-80 transition-opacity group">
      <div className="relative mb-4">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        {article.isPremium && (
          <div className="absolute top-3 left-3">
            <span className="text-white text-xs font-bold px-2 py-1" style={{ backgroundColor: '#d61935' }}>
              PREMIUM
            </span>
          </div>
        )}
      </div>
      
      <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-gray-300">
        {article.title}
      </h3>
      
      <div className="flex items-center text-xs mb-3">
        <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
          {article.category}
        </span>
        <span className="text-gray-400">{article.date}</span>
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed">
        {article.excerpt}
      </p>
    </div>
  );

  const Pagination = () => (
    <div className="flex justify-center items-center mt-12 space-x-2">
      {/* Previous Arrow */}
      <button className="w-10 h-10 flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Page Numbers */}
      <button className="w-10 h-10 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#d61935' }}>
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
        3
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
        4
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
        5
      </button>
      
      {/* Next Arrow */}
      <button className="w-10 h-10 flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
    
    </div>
  );

  return (
    <div className="py-12 mx-2 lg:mx-8" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4" style={{ backgroundColor: '#0f0f0f' }}>
        <SectionHeader title="Latest news" />
        
        {/* News Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default LatestNews;