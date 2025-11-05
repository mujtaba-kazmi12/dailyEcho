'use client';

import React from 'react';
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

interface Category {
  name: string;
  slug: string;
}

interface MainNewsGridProps {
  leftPosts: Post[];
  centerPosts: Post[];
  rightPosts: Post[];
  leftCategory: Category | null;
  centerCategory: Category | null;
  rightCategory: Category | null;
}

const MainNewsGrid = ({ leftPosts, centerPosts, rightPosts, leftCategory, centerCategory, rightCategory }: MainNewsGridProps) => {
  // Helper function to extract plain text from HTML and get first 2 lines
  const getExcerpt = (htmlContent: string, maxLength: number = 200): string => {
    // Remove HTML tags using regex (server-safe)
    const plainText = htmlContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return plainText.substring(0, maxLength) + (plainText.length > maxLength ? '...' : '');
  };
  return (
    <div className="max-w-7xl mx-auto text-white" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Top Section Headers with Red Lines - Desktop Only */}
      <div className="hidden md:grid md:grid-cols-3 border-b border-gray-700">
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">{leftCategory?.name.toUpperCase() || "AFRICA"}</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">{centerCategory?.name.toUpperCase() || "EUROPE"}</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">{rightCategory?.name.toUpperCase() || "ASIA"}</span>
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
            <span className="px-4 text-white font-bold">{centerCategory?.name.toUpperCase() || "EUROPE"}</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>

        {/* Center Section - Europe News (Mobile: First, Desktop: 2 columns wide) */}
        <div className="order-2 md:order-2 md:col-span-2 border-r-0 md:border-r border-gray-700 p-4 md:p-6 space-y-4 md:space-y-6">
          {centerPosts.map((post, index) => (
            <Link 
              key={post._id} 
              href={`/${post.slug}`}
              className={index < centerPosts.length - 1 ? "border-b border-gray-700 pb-4 md:pb-6 block group" : "block group"}
            >
              {index === 0 && (
                <>
                  <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 group-hover:text-gray-300">{post.blogContent.title}</h1>
                  <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-4">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{post.categorySlug.toUpperCase()}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <img 
                    src={post.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                    alt={post.firebaseImages[0]?.alt || post.blogContent.title} 
                    className="w-full h-48 md:h-64 object-cover mb-2 md:mb-4"
                  />
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {post.blogContent.content ? getExcerpt(post.blogContent.content, 200) : (post.blogContent.metaDescription || "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase, brace yourself — it is likely to get worse. By the end of the year...")}
                  </p>
                </>
              )}
              {index > 0 && (
                <>
                  <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-gray-300">{post.blogContent.title}</h2>
                  <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-4">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{post.categorySlug.toUpperCase()}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {post.blogContent.content ? getExcerpt(post.blogContent.content, 200) : (post.blogContent.metaDescription || "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase, brace yourself — it is likely to get worse. By the end of the year...")}
                  </p>
                </>
              )}
            </Link>
          ))}
        </div>

        {/* Africa Header - Mobile Only */}
        <div className="block md:hidden order-3 p-4 mt-6 pb-8  border-b border-gray-700 ">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">{leftCategory?.name.toUpperCase() || "AFRICA"}</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>

        {/* Left Sidebar - Africa News (Mobile: Second, Desktop: First) */}
        <div className="order-4 md:order-1 border-r-0 md:border-r border-gray-700 p-4 space-y-4">
          {leftPosts.slice(0, 3).map((post, index) => (
            <Link key={post._id} href={`/${post.slug}`} className="border-b border-gray-700 pb-4 block group">
              <img 
                src={post.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                alt={post.firebaseImages[0]?.alt || post.blogContent.title} 
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-bold mb-2 group-hover:text-gray-300">{post.blogContent.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{post.categorySlug.toUpperCase()}</span>
                <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </Link>
          ))}

          {/* Advertisement */}
          <div className="p-4 text-center" style={{ backgroundColor: '#d61935' }}>
            <div className="text-white">
              <h4 className="font-bold text-lg mb-2">NewsPaper Theme</h4>
              <p className="text-sm mb-3">$1 best seller</p>
              <button className="bg-white px-4 py-2 text-sm font-bold" style={{ color: '#d61935' }}>GET NOW</button>
            </div>
          </div>

          {/* More Articles */}
          {leftPosts.slice(3, 6).map((post, index) => (
            <Link key={post._id} href={`/${post.slug}`} className={index < 2 ? "border-b border-gray-700 pb-4 block group" : "block group"}>
              <h3 className="text-sm font-bold mb-2 group-hover:text-gray-300">{post.blogContent.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{post.categorySlug.toUpperCase()}</span>
                <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Asia Header - Mobile Only */}
        <div className="block md:hidden order-5 p-4 mt-6 pb-8  border-b border-gray-700">
          <div className="flex items-center">
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
            <span className="px-4 text-white font-bold">{rightCategory?.name.toUpperCase() || "ASIA"}</span>
            <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          </div>
        </div>

        {/* Right Sidebar - Asia News (Mobile: Third, Desktop: Last) */}
        <div className="order-6 md:order-3 p-4 space-y-4">
          {/* First Article */}
          {rightPosts[0] && (
            <Link href={`/${rightPosts[0].slug}`} className="border-b border-gray-700 pb-4 block group">
              <h3 className="text-sm font-bold mb-2 group-hover:text-gray-300">{rightPosts[0].blogContent.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{rightPosts[0].categorySlug.toUpperCase()}</span>
                <span>{new Date(rightPosts[0].createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </Link>
          )}

          {/* Advertisement Banner */}
          <div className="p-4 text-center mb-4" style={{ backgroundColor: '#d61935' }}>
            <div className="text-white">
              <h4 className="font-bold text-lg mb-2">Quality Design</h4>
              <p className="text-sm mb-3">$1 best seller</p>
              <button className="bg-white px-4 py-2 text-sm font-bold" style={{ color: '#d61935' }}>GET NOW</button>
            </div>
          </div>

          {/* More Articles - Text Only */}
          {rightPosts.slice(1, 3).map((post) => (
            <Link key={post._id} href={`/${post.slug}`} className="border-b border-gray-700 pb-4 block group">
              <h3 className="text-sm font-bold mb-2 group-hover:text-gray-300">{post.blogContent.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{post.categorySlug.toUpperCase()}</span>
                <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </Link>
          ))}

          {/* Articles with Images */}
          {rightPosts.slice(3, 6).map((post, index) => (
            <Link key={post._id} href={`/${post.slug}`} className={index < 2 ? "border-b border-gray-700 pb-4 block group" : "block group"}>
              <img 
                src={post.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                alt={post.firebaseImages[0]?.alt || post.blogContent.title} 
                className="w-full h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-bold mb-2 group-hover:text-gray-300">{post.blogContent.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>{post.categorySlug.toUpperCase()}</span>
                <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNewsGrid;