'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  sequence: number;
}

interface NavbarProps {
  categories: Category[];
}

const Navbar = ({ categories }: NavbarProps) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollbarHidden, setScrollbarHidden] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Create navigation items: Home + Categories
  const navigationItems = [
    { name: 'Home', slug: '/' },
    ...categories.map(cat => ({ name: cat.name, slug: `/${cat.slug}` }))
  ];

  // Handle scroll to hide scrollbar
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollbarHidden) {
        setScrollbarHidden(true);
      }
    };

    const navElement = mobileNavRef.current;
    if (navElement) {
      navElement.addEventListener('scroll', handleScroll);
      return () => navElement.removeEventListener('scroll', handleScroll);
    }
  }, [scrollbarHidden]);

  return (
    <nav className="text-white w-full" style={{backgroundColor: '#0f0f0f'}}>
      <div className="max-w-7xl mx-auto lg:px-4">
        {/* Top Header with Hamburger Extension */}
        <div className="relative">
          <div className="flex items-center justify-between px-4 py-3 h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center">
              {/* NewsHub Logo Icon - exactly like in image */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  {/* Three horizontal lines icon */}
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">DailyEcho</span>
              </div>
            </div>



            {/* Right Section - Search, Account */}
            <div className="flex items-center space-x-4 pr-16">
              {/* Search Icon */}
              <button 
                className="p-2 rounded-md transition-colors" 
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1f1f1f'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Vertical Separator */}
              <div className="hidden md:block h-6 w-px bg-gray-600"></div>

              {/* My Account */}
              <div className="hidden md:flex items-center space-x-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm text-white">My account</span>
              </div>
            </div>
          </div>

          {/* Hamburger Menu - Positioned to create inverted L */}
          <div className="absolute top-0 right-0 h-full" style={{backgroundColor: '#333333'}}>
            <button 
              className="h-16 px-4 transition-colors flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#404040'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#333333'}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Tabs - Connected to hamburger */}
        <div className="hidden md:flex " style={{backgroundColor: '#333333'}}>
          {navigationItems.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={`px-6 py-4 text-sm font-bold transition-colors relative ${
                activeTab === item.name
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              style={activeTab === item.name ? {
                backgroundColor: '#d61935'
              } : {}}
              onMouseEnter={activeTab !== item.name ? (e) => (e.target as HTMLElement).style.backgroundColor = '#404040' : undefined}
              onMouseLeave={activeTab !== item.name ? (e) => (e.target as HTMLElement).style.backgroundColor = '#333333' : undefined}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Horizontal Navigation Tabs */}
        <div className="md:hidden border-b border-gray-700" style={{backgroundColor: '#333333'}}>
          <div 
            ref={mobileNavRef}
            className={`overflow-x-auto mobile-nav-scroll ${scrollbarHidden ? 'scrollbar-hidden' : ''}`}
          >
            <div className="flex space-x-0 min-w-max px-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === item.name
                      ? 'text-white border-current'
                      : 'text-gray-300 hover:text-white border-transparent hover:bg-gray-800'
                  }`}
                  style={activeTab === item.name ? {
                    backgroundColor: '#d61935',
                    borderBottomColor: '#d61935'
                  } : {}}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Full Width Drawer */}
            <div className="fixed top-0 left-0 w-full h-full z-50 md:hidden animate-fade-in" style={{backgroundColor: '#333333'}}>
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-white hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex flex-col" style={{height: 'calc(100vh - 73px)'}}>
                {/* Main Menu Items */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Menu Links */}
                  <div className="space-y-4">
                    <Link 
                      href="/about" 
                      className="block text-white text-lg font-bold hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About DailyEcho
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block text-white text-lg font-bold hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link 
                      href="/privacy" 
                      className="block text-white text-lg font-bold hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/terms" 
                      className="block text-white text-lg font-bold hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Terms of Use
                    </Link>
                  </div>

               
                </div>

                {/* Social Media Icons - Bottom */}
                <div className="p-6 border-t border-gray-700 mt-auto">
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    {/* X (Twitter) */}
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;