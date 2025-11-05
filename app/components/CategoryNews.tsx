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

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface CategoryNewsProps {
  posts: Post[];
  pagination: PaginationData | null;
  currentPage: number;
  categorySlug: string;
}

const CategoryNews = ({ posts, pagination, currentPage, categorySlug }: CategoryNewsProps) => {
  // Helper function to extract plain text from HTML
  const getExcerpt = (htmlContent: string, maxLength: number = 150): string => {
    const plainText = htmlContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return plainText.substring(0, maxLength) + (plainText.length > maxLength ? '...' : '');
  };
  
  const totalPages = pagination?.totalPages || 5;

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className="flex-1 h-0.5" style={{ backgroundColor: '#d61935' }}></div>
        <h2 className="px-6 text-white text-2xl font-bold">{title}</h2>
        <div className="flex-1 h-0.5" style={{ backgroundColor: '#d61935' }}></div>
      </div>
    </div>
  );

  const NewsCard = ({ article }: { article: Post }) => (
    <Link href={`/${article.slug}`} className="cursor-pointer hover:opacity-80 transition-opacity group block">
      <div className="relative mb-4">
        <img 
          src={article.firebaseImages[0]?.url || "/images/pci1.jpg"} 
          alt={article.firebaseImages[0]?.alt || article.blogContent.title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-gray-300">
        {article.blogContent.title}
      </h3>
      
      <div className="flex items-center text-xs mb-3">
        <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
          {article.categorySlug.toUpperCase()}
        </span>
        <span className="text-gray-400">{new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed">
        {article.blogContent.content ? getExcerpt(article.blogContent.content, 150) : (article.blogContent.metaDescription || "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase...")}
      </p>
    </Link>
  );

  const Pagination = () => {
    const prevPage = currentPage > 1 ? (currentPage === 2 ? `/category/${categorySlug}` : `/category/${categorySlug}/page${currentPage - 1}`) : `/category/${categorySlug}`;
    const nextPage = currentPage < totalPages ? `/category/${categorySlug}/page${currentPage + 1}` : `/category/${categorySlug}/page${totalPages}`;

    // Generate page numbers to display
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center mt-12 space-x-2">
        {/* Previous Arrow */}
        <Link 
          href={prevPage} 
          className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-800 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        
        {/* Page Numbers */}
        {pageNumbers.map((pageNum) => (
          <Link 
            key={pageNum}
            href={pageNum === 1 ? `/category/${categorySlug}` : `/category/${categorySlug}/page${pageNum}`} 
            className="w-10 h-10 flex items-center justify-center font-bold transition-colors hover:bg-gray-800"
            style={currentPage === pageNum ? { backgroundColor: '#d61935', color: 'white' } : { color: '#9ca3af' }}
          >
            {pageNum}
          </Link>
        ))}
        
        {/* Next Arrow */}
        <Link 
          href={nextPage} 
          className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-800 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    );
  };

  return (
    <div className="py-12 mx-2 lg:mx-8" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4" style={{ backgroundColor: '#0f0f0f' }}>
        <SectionHeader title={categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} />
        
        {/* News Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryNews;
