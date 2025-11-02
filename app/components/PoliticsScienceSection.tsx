'use client';

import React from 'react';

const PoliticsScienceSection = () => {
  const politicsArticles = [
    {
      id: 1,
      title: "Ramping cut almost in half in last four months, SA government says",
      category: "POLITICS",
      date: "March 4, 2022",
      isPremium: true,
      hasImage: true,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase, brace yourself — it is likely to get worse. By the end of the year..."
    },
    {
      id: 2,
      title: "What are the major parties in the lead-up to SA's state election? Tiny living machines called xenobots",
      category: "POLITICS",
      date: "March 4, 2022",
      isPremium: true,
      hasImage: false
    },
    {
      id: 3,
      title: "War in Ukraine will not be short, and it's changed everything for Europe, Tiny living machines called xenobots",
      category: "POLITICS",
      date: "March 4, 2022",
      isPremium: false,
      hasImage: false
    }
  ];

  const scienceArticles = [
    {
      id: 1,
      title: "'Fresh Banana Leaves' shows how Indigenous people have been harmed",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: true,
      hasImage: false,
      excerpt: ""
    },
    {
      id: 2,
      title: "A fast radio burst's unlikely source may be a cluster of old stars",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: false,
      hasImage: true,
      image: "/images/pci1.jpg",
      excerpt: "It is a daily ritual for millions of Australians, but of your morning flat white or soy latte increase, brace yourself — it is likely to get worse. By the end of the year..."
    },
    {
      id: 3,
      title: "Tiny living machines called xenobots can create copies of themselves",
      category: "SCIENCE",
      date: "March 4, 2022",
      isPremium: false,
      hasImage: false,
      excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase, brace yourself — it is likely to get worse. By the end of the year..."
    }
  ];

  const AdBanner = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="p-6 mb-6" style={{ backgroundColor: '#d61935' }}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
          <p className="text-white text-sm">{subtitle}</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors">
          GET NOW
        </button>
      </div>
    </div>
  );

  const ArticleCard = ({ article, isLarge = false }: { article: any; isLarge?: boolean }) => (
    <div className={`mb-6 cursor-pointer hover:opacity-80 transition-opacity ${isLarge ? 'pb-4' : ''}`}>
      {article.isPremium && (
        <div className="mb-2">
        
        </div>
      )}
      
      {article.hasImage && isLarge && (
        <div className="mb-4">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <h3 className={`text-white font-bold leading-tight mb-3 hover:text-gray-300 ${isLarge ? 'text-xl' : 'text-lg'}`}>
        {article.title}
      </h3>
      
      <div className="flex items-center text-xs mb-3">
        <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
          {article.category}
        </span>
        <span className="text-gray-400">{article.date}</span>
      </div>
      
      {article.excerpt && isLarge && (
        <p className="text-gray-300 text-sm leading-relaxed">
          {article.excerpt}
        </p>
      )}
      
      {article.hasImage && !isLarge && (
        <div className="mt-3">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-32 object-cover"
          />
        </div>
      )}
    </div>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center mb-8">
      <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
      <h2 className="text-white text-2xl font-bold mx-6">{title}</h2>
      <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
    </div>
  );

  return (
    <div className="py-8 mx-1 md:mx-8" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Politics Column */}
          <div className="h-full">
            <SectionHeader title="Politics" />
            <div className="border border-gray-700 p-6">
              {/* Featured Politics Article */}
              <ArticleCard article={politicsArticles[0]} isLarge={true} />
              
              {/* Other Politics Articles */}
              {politicsArticles.slice(1).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
              
              {/* Advertisement */}
              <AdBanner title="Beautiful Designs" subtitle="#1 best seller" />
            </div>
          </div>

          {/* Science Column */}
          <div className="h-full">
            <SectionHeader title="Science" />
            <div className="border border-gray-700 p-6">
              {/* Featured Science Article */}

               <AdBanner title="Highly Customizable" subtitle="#1 best seller" />

              <ArticleCard article={scienceArticles[0]} isLarge={true} />
              
              {/* Advertisement */}
             
              {scienceArticles.slice(2).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
              {/* Radio Burst Article with Image and Description */}
              <ArticleCard article={scienceArticles[1]} isLarge={true} />
              
              {/* Other Science Articles */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsScienceSection;