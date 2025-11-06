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

interface PoliticsScienceSectionProps {
  politicsPosts: Post[];
  sciencePosts: Post[];
  politicsCategory: Category | null;
  scienceCategory: Category | null;
}

const PoliticsScienceSection = ({ politicsPosts, sciencePosts, politicsCategory, scienceCategory }: PoliticsScienceSectionProps) => {
  // Helper function to extract plain text from HTML
  const getExcerpt = (htmlContent: string, maxLength: number = 150): string => {
    const plainText = htmlContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return plainText.substring(0, maxLength) + (plainText.length > maxLength ? '...' : '');
  };

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
            <SectionHeader title={politicsCategory?.name || "Politics"} />
            <div className="border border-gray-700 p-6">
              {/* Featured Politics Article */}
              {politicsPosts[0] && (
                <Link href={`/${politicsPosts[0].slug}`} className="mb-6 cursor-pointer hover:opacity-80 transition-opacity pb-4 block group">
                  {politicsPosts[0].firebaseImages[0]?.url && (
                    <div className="relative mb-4 w-full h-48">
                      <Image 
                        src={politicsPosts[0].firebaseImages[0].url} 
                        alt={politicsPosts[0].firebaseImages[0].alt || politicsPosts[0].blogContent.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-white font-bold leading-tight mb-3 group-hover:text-gray-300 text-xl">
                    {politicsPosts[0].blogContent.title}
                  </h3>
                  
                  <div className="flex items-center text-xs mb-3">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
                      {politicsPosts[0].categorySlug.toUpperCase()}
                    </span>
                    <span className="text-gray-400">{new Date(politicsPosts[0].createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  
                  {politicsPosts[0].blogContent.content && (
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {getExcerpt(politicsPosts[0].blogContent.content, 150)}
                    </p>
                  )}
                </Link>
              )}
              
              {/* Other Politics Articles */}
              {politicsPosts.slice(1, 3).map((article) => (
                <Link key={article._id} href={`/${article.slug}`} className="mb-6 cursor-pointer hover:opacity-80 transition-opacity block group">
                  <h3 className="text-white font-bold leading-tight mb-3 group-hover:text-gray-300 text-lg">
                    {article.blogContent.title}
                  </h3>
                  
                  <div className="flex items-center text-xs mb-3">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
                      {article.categorySlug.toUpperCase()}
                    </span>
                    <span className="text-gray-400">{new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </Link>
              ))}
              
              {/* Advertisement */}
              <AdBanner title="Beautiful Designs" subtitle="#1 best seller" />
            </div>
          </div>

          {/* Science Column */}
          <div className="h-full">
            <SectionHeader title={scienceCategory?.name || "Science"} />
            <div className="border border-gray-700 p-6">
              {/* Advertisement */}
              <AdBanner title="Highly Customizable" subtitle="#1 best seller" />

              {/* Featured Science Article */}
              {sciencePosts[0] && (
                <Link href={`/${sciencePosts[0].slug}`} className="mb-6 cursor-pointer hover:opacity-80 transition-opacity pb-4 block group">
                  <h3 className="text-white font-bold leading-tight mb-3 group-hover:text-gray-300 text-xl">
                    {sciencePosts[0].blogContent.title}
                  </h3>
                  
                  <div className="flex items-center text-xs mb-3">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
                      {sciencePosts[0].categorySlug.toUpperCase()}
                    </span>
                    <span className="text-gray-400">{new Date(sciencePosts[0].createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </Link>
              )}
              
              {/* Second Science Article */}
              {sciencePosts[1] && (
                <Link href={`/${sciencePosts[1].slug}`} className="mb-6 cursor-pointer hover:opacity-80 transition-opacity block group">
                  <h3 className="text-white font-bold leading-tight mb-3 group-hover:text-gray-300 text-lg">
                    {sciencePosts[1].blogContent.title}
                  </h3>
                  
                  <div className="flex items-center text-xs mb-3">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
                      {sciencePosts[1].categorySlug.toUpperCase()}
                    </span>
                    <span className="text-gray-400">{new Date(sciencePosts[1].createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </Link>
              )}

              {/* Third Science Article with Image and Description */}
              {sciencePosts[2] && (
                <Link href={`/${sciencePosts[2].slug}`} className="cursor-pointer hover:opacity-80 transition-opacity pb-4 block group">
                  <h3 className="text-white font-bold leading-tight mb-3 group-hover:text-gray-300 text-xl">
                    {sciencePosts[2].blogContent.title}
                  </h3>
                  
                  <div className="flex items-center text-xs mb-3">
                    <span className="text-white px-2 py-1 text-xs font-bold uppercase mr-3" style={{ backgroundColor: '#d61935' }}>
                      {sciencePosts[2].categorySlug.toUpperCase()}
                    </span>
                    <span className="text-gray-400">{new Date(sciencePosts[2].createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>

                  {sciencePosts[2].firebaseImages[0]?.url && (
                    <div className="relative mt-3 w-full h-48">
                      <Image 
                        src={sciencePosts[2].firebaseImages[0].url} 
                        alt={sciencePosts[2].firebaseImages[0].alt || sciencePosts[2].blogContent.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  {sciencePosts[2].blogContent.content && (
                    <p className="text-gray-300 text-sm leading-relaxed mt-3">
                      {getExcerpt(sciencePosts[2].blogContent.content, 150)}
                    </p>
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsScienceSection;