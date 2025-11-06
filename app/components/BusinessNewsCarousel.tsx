'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

interface BusinessNewsCarouselProps {
  posts: Post[];
  category: Category | null;
}

const BusinessNewsCarousel = ({ posts, category }: BusinessNewsCarouselProps) => {
  return (
    <div className="py-8 mx-3" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4" style={{ backgroundColor: '#333333' }}>
        {/* Header Section */}
        <div className="flex items-center mb-8 pt-8">
          <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
          <h2 className="text-white text-2xl font-bold mx-6">{category?.name || "Business"}</h2>
          <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
        </div> 

        {/* News Items Container */}
        <div className="pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts.map((article) => (
              <Link key={article._id} href={`/${article.slug}`} className="flex cursor-pointer hover:opacity-80 transition-opacity group">
                {/* Image */}
                <div className="relative flex-shrink-0 w-24 h-20 mr-4">
                  <Image 
                    src={article.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                    alt={article.firebaseImages[0]?.alt || article.blogContent.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white text-sm font-bold leading-tight mb-2 line-clamp-2 group-hover:text-gray-300">
                    {article.blogContent.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="text-white px-2 py-0.5 text-xs font-bold uppercase mr-2" style={{ backgroundColor: '#d61935' }}>
                      {article.categorySlug.toUpperCase()}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="ml-2">{new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
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

export default BusinessNewsCarousel;