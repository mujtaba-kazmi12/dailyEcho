'use client';

import { useState, useEffect, FormEvent } from 'react';

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface GlobalSeoData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImageUrl: string;
  twitterCardType: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImageUrl: string;
  robotsDirective: string;
}

interface CategorySeoData {
  categorySlug: string;
  title: string;
  keywords: string;
  description: string;
  authors: string;
}

export default function SeoPage() {
  const [isCategory, setIsCategory] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Global SEO state
  const [globalSeo, setGlobalSeo] = useState<GlobalSeoData>({
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImageUrl: '',
    twitterCardType: 'summary',
    twitterTitle: '',
    twitterDescription: '',
    twitterImageUrl: '',
    robotsDirective: 'index, follow'
  });

  // Category SEO state
  const [categorySeo, setCategorySeo] = useState<CategorySeoData>({
    categorySlug: '',
    title: '',
    keywords: '',
    description: '',
    authors: ''
  });

  useEffect(() => {
    if (isCategory) {
      fetchCategories();
    } else {
      fetchGlobalSeo();
    }
  }, [isCategory]);

  useEffect(() => {
    if (selectedCategory) {
      fetchCategorySeo(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/categories`);
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchGlobalSeo = async () => {
    try {
      const response = await fetch('/api/seo');
      const data = await response.json();
      if (data.success && data.data) {
        setGlobalSeo({
          metaTitle: data.data.metaTitle || '',
          metaDescription: data.data.metaDescription || '',
          metaKeywords: data.data.metaKeywords || '',
          ogTitle: data.data.ogTitle || '',
          ogDescription: data.data.ogDescription || '',
          ogImageUrl: data.data.ogImageUrl || '',
          twitterCardType: data.data.twitterCardType || 'summary',
          twitterTitle: data.data.twitterTitle || '',
          twitterDescription: data.data.twitterDescription || '',
          twitterImageUrl: data.data.twitterImageUrl || '',
          robotsDirective: data.data.robotsDirective || 'index, follow'
        });
      }
    } catch (error) {
      console.error('Error fetching global SEO:', error);
    }
  };

  const fetchCategorySeo = async (slug: string) => {
    try {
      const response = await fetch(`/api/seo/category?categorySlug=${slug}`);
      const data = await response.json();
      if (data.success && data.data) {
        setCategorySeo({
          categorySlug: slug,
          title: data.data.title || '',
          keywords: data.data.keywords || '',
          description: data.data.description || '',
          authors: data.data.authors || ''
        });
      } else {
        setCategorySeo({
          categorySlug: slug,
          title: '',
          keywords: '',
          description: '',
          authors: ''
        });
      }
    } catch (error) {
      console.error('Error fetching category SEO:', error);
    }
  };

  const handleGlobalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(globalSeo)
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Global SEO saved successfully!');
      } else {
        setMessage('Error: ' + data.message);
      }
    } catch (error) {
      setMessage('An error occurred while saving.');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleCategorySubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) {
      setMessage('Please select a category');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/seo/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...categorySeo, categorySlug: selectedCategory })
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Category SEO saved successfully!');
      } else {
        setMessage('Error: ' + data.message);
      }
    } catch (error) {
      setMessage('An error occurred while saving.');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">SEO Management</h2>
          
          <div className="flex items-center space-x-3">
            <span className={`text-sm font-medium ${!isCategory ? 'text-red-600' : 'text-gray-600'}`}>
              Global
            </span>
            <button
              onClick={() => setIsCategory(!isCategory)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
              style={{ backgroundColor: isCategory ? '#d61935' : '#cbd5e0' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isCategory ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isCategory ? 'text-red-600' : 'text-gray-600'}`}>
              Categories
            </span>
          </div>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded ${message.startsWith('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {message}
          </div>
        )}

        {isCategory ? (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
              >
                <option value="">Choose a category...</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedCategory && (
              <form onSubmit={handleCategorySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={categorySeo.title}
                    onChange={(e) => setCategorySeo({ ...categorySeo, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
                  <input
                    type="text"
                    value={categorySeo.keywords}
                    onChange={(e) => setCategorySeo({ ...categorySeo, keywords: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={categorySeo.description}
                    onChange={(e) => setCategorySeo({ ...categorySeo, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Authors</label>
                  <input
                    type="text"
                    value={categorySeo.authors}
                    onChange={(e) => setCategorySeo({ ...categorySeo, authors: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 text-white font-semibold rounded-md transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: '#d61935' }}
                >
                  {loading ? 'Saving...' : 'Save Category SEO'}
                </button>
              </form>
            )}
          </>
        ) : (
          <form onSubmit={handleGlobalSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Meta Tags</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  value={globalSeo.metaTitle}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, metaTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  value={globalSeo.metaDescription}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, metaDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                <input
                  type="text"
                  value={globalSeo.metaKeywords}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, metaKeywords: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Open Graph</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
                <input
                  type="text"
                  value={globalSeo.ogTitle}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, ogTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
                <textarea
                  value={globalSeo.ogDescription}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, ogDescription: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
                <input
                  type="url"
                  value={globalSeo.ogImageUrl}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, ogImageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Twitter Card</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Card Type</label>
                <select
                  value={globalSeo.twitterCardType}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, twitterCardType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                >
                  <option value="summary">Summary</option>
                  <option value="summary_large_image">Summary Large Image</option>
                  <option value="app">App</option>
                  <option value="player">Player</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Title</label>
                <input
                  type="text"
                  value={globalSeo.twitterTitle}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, twitterTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Description</label>
                <textarea
                  value={globalSeo.twitterDescription}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, twitterDescription: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Image URL</label>
                <input
                  type="url"
                  value={globalSeo.twitterImageUrl}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, twitterImageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Robots</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Robots Directive</label>
                <select
                  value={globalSeo.robotsDirective}
                  onChange={(e) => setGlobalSeo({ ...globalSeo, robotsDirective: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-gray-900"
                >
                  <option value="index, follow">Index, Follow</option>
                  <option value="noindex, follow">No Index, Follow</option>
                  <option value="index, nofollow">Index, No Follow</option>
                  <option value="noindex, nofollow">No Index, No Follow</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 text-white font-semibold rounded-md transition-opacity disabled:opacity-50"
              style={{ backgroundColor: '#d61935' }}
            >
              {loading ? 'Saving...' : 'Save Global SEO'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
