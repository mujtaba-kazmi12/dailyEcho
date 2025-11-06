'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  _id: string;
  postId: string;
  slug: string;
  blogContent: {
    title: string;
    content?: string;
    metaDescription?: string;
  };
  firebaseImages: Array<{
    url: string;
    title?: string;
    alt?: string;
  }>;
  categoryId: string;
  categorySlug: string;
  createdAt: string;
}

interface NewsSectionProps {
  posts: Post[];
  breakingNews: Post[];
}

const NewsSection = ({ posts, breakingNews }: NewsSectionProps) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');
  const [mounted, setMounted] = useState(false);

  // Helper function to extract plain text from HTML and get first 2 lines
  const getExcerpt = (htmlContent: string, maxLength: number = 150): string => {
    // Remove HTML tags using regex (server-safe)
    const plainText = htmlContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return plainText.substring(0, maxLength) + (plainText.length > maxLength ? '...' : '');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (breakingNews.length === 0) return;

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
              <Link href={`/${posts[0]?.slug || '#'}`} className="block">
                <div className="relative h-96 bg-gray-700  overflow-hidden">
                  <img 
                    src={posts[0]?.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                    alt={posts[0]?.firebaseImages[0]?.alt || "Featured News"} 
                    className="w-full h-full object-cover"
                  />
                  
                  
                  
                  {/* Article Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight hover:text-[#d6374f] cursor-pointer">
                      {posts[0]?.blogContent.title || "Target thinks it can keep growing sales, here's how the retailer will do it"}
                    </h1>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium uppercase">
                      {posts[0]?.categorySlug.toUpperCase() || "BUSINESS"}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">{posts[0] ? new Date(posts[0].createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "March 4, 2022"}</span>
                  </div>
                  
                    <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                      {posts[0]?.blogContent.content ? getExcerpt(posts[0].blogContent.content, 150) : (posts[0]?.blogContent.metaDescription || "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase...")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Top News Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-6">
                <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
                <h2 className="text-gray-300 text-lg font-bold mx-4">{posts[0]?.categorySlug.toUpperCase() || "TOP NEWS"}</h2>
                <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
              </div>
              
              <div className="space-y-6">
                {posts.slice(1, 4).map((post, index) => (
                  <Link key={post._id} href={`/${post.slug}`} className="flex space-x-4 group">
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded overflow-hidden">
                      <img 
                        src={post.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                        alt={post.firebaseImages[0]?.alt || "News"} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold leading-tight mb-2 group-hover:text-[#d6374f] cursor-pointer">
                        {post.blogContent.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-xs">
                        <span className="bg-gray-600 text-white px-2 py-0.5 rounded uppercase font-medium">
                          {post.categorySlug.toUpperCase()}
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-400">{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="mt-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex text-white items-center">
            <span className="py-3 px-4 text-md font-bold uppercase flex-shrink-0" style={{ backgroundColor: '#d61935' }}>
              Dernière minute
            </span>
            <div className="flex-1 py-3 px-4 overflow-hidden" style={{ backgroundColor: '#333333' }}>
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <span className="text-sm font-bold line-clamp-1 block">
                  {breakingNews[currentNewsIndex]?.blogContent?.title || "No breaking news available"}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden text-white">
            <div className="py-3 px-4 text-md font-bold uppercase" style={{ backgroundColor: '#d61935' }}>
              Dernière minute
            </div>
            <div className="py-3 px-4 overflow-hidden" style={{ backgroundColor: '#333333' }}>
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <span className="text-sm font-bold line-clamp-2 block">
                  {breakingNews[currentNewsIndex]?.blogContent?.title || "No breaking news available"}
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