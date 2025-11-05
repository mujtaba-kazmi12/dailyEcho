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
    keywords?: string;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
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

interface PostDetailProps {
  post: Post;
  relatedPosts: Post[];
}

const PostDetail = ({ post, relatedPosts }: PostDetailProps) => {
  return (
    <div className="py-12" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2">
            {/* Post Title */}
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {post.blogContent.title}
            </h1>

            {/* Featured Image */}
            <div className="mb-6">
              <img 
                src={post.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                alt={post.firebaseImages[0]?.alt || post.blogContent.title}
                className="w-full h-auto object-cover"
              />
              {post.firebaseImages[0]?.title && (
                <p className="text-gray-400 text-sm mt-2 italic">{post.firebaseImages[0].title}</p>
              )}
            </div>

            {/* Social Share Icons */}
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-700">
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </button>
            </div>

            {/* Post Content - Render HTML */}
            <div 
              className="prose prose-invert max-w-none"
              style={{
                color: '#d1d5db'
              }}
              dangerouslySetInnerHTML={{ __html: post.blogContent.content || '' }}
            />

            {/* FAQs Section */}
            {post.blogContent.faqs && post.blogContent.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-white text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.blogContent.faqs.map((faq: any, index: number) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#d61935' }}>
                      <h3 className="text-white text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Related Articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {/* Section Header */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
                  <h2 className="px-4 text-white text-xl font-bold">Related articles</h2>
                  <div className="h-1 flex-1" style={{ backgroundColor: '#d61935' }}></div>
                </div>
              </div>

              {/* Related Articles List */}
              <div className="space-y-6">
                {relatedPosts.map((article) => (
                  <Link 
                    key={article._id} 
                    href={`/${article.slug}`}
                    className="block group cursor-pointer"
                  >
                    <div className="mb-3">
                      <img 
                        src={article.firebaseImages[0]?.url || "/images/pci1.jpg"} 
                        alt={article.firebaseImages[0]?.alt || article.blogContent.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-white px-2 py-1 text-xs font-bold uppercase" style={{ backgroundColor: '#d61935' }}>
                        {article.categorySlug.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-white text-base font-bold leading-tight group-hover:text-gray-300 transition-colors">
                      {article.blogContent.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for HTML Content */}
      <style jsx global>{`
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: #ffffff;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h2 {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .prose p {
          color: #d1d5db;
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }
        .prose ul, .prose ol {
          color: #d1d5db;
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
        .prose ul {
          list-style-type: disc;
        }
        .prose ol {
          list-style-type: decimal;
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
        }
        .prose thead {
          background-color: #d61935;
        }
        .prose th {
          color: #ffffff;
          padding: 0.75rem;
          text-align: left;
          font-weight: bold;
          border: 1px solid #374151;
        }
        .prose td {
          color: #d1d5db;
          padding: 0.75rem;
          border: 1px solid #374151;
        }
        .prose tbody tr:nth-child(even) {
          background-color: #1f1f1f;
        }
        .prose a {
          color: #d61935;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #ff2d55;
        }
        .prose strong {
          color: #ffffff;
          font-weight: bold;
        }
        .prose em {
          font-style: italic;
        }
        .prose blockquote {
          border-left: 4px solid #d61935;
          padding-left: 1rem;
          margin: 2rem 0;
          color: #9ca3af;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default PostDetail;
