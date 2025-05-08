"use client";

import Link from 'next/link';
import { useState } from 'react';
import { tools } from '@/data/tools';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search in tools data
      const query = searchQuery.toLowerCase();
      const hasResults = tools.some(
        tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description.toLowerCase().includes(query) || 
          tool.tags?.some(tag => tag.toLowerCase().includes(query))
      );
      
      // Navigate to home page with search parameter
      router.push(`/?q=${encodeURIComponent(searchQuery)}`);
      
      // If we're already on the home page, we need to reload the search
      if (window.location.pathname === '/') {
        window.location.href = `/?q=${encodeURIComponent(searchQuery)}`;
      }
    }
  };

  return (
    <nav className="bg-white/90 dark:bg-apple-800/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-semibold text-apple-blue">
                AI Tools
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-apple-blue text-apple-500 dark:text-apple-200 hover:text-apple-800 dark:hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/categories" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-apple-blue text-apple-500 dark:text-apple-200 hover:text-apple-800 dark:hover:text-white transition-colors duration-200"
              >
                Categories
              </Link>
              <Link 
                href="/new" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-apple-blue text-apple-500 dark:text-apple-200 hover:text-apple-800 dark:hover:text-white transition-colors duration-200"
              >
                New Tools
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="apple-input w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Search"
              >
                <svg 
                  className="h-5 w-5 text-apple-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-apple-500 hover:text-apple-800 dark:text-apple-300 dark:hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-apple-800/95 backdrop-blur-md">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-apple-blue text-apple-500 dark:text-apple-200 hover:text-apple-800 dark:hover:text-white hover:bg-apple-50 dark:hover:bg-apple-700 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/categories" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-apple-blue text-apple-500 dark:text-apple-200 hover:text-apple-800 dark:hover:text-white hover:bg-apple-50 dark:hover:bg-apple-700 transition-colors duration-200"
            >
              Categories
            </Link>
            <Link 
              href="/new" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-apple-blue text-apple-500 dark:text-apple-200 hover:text-apple-800 dark:hover:text-white hover:bg-apple-50 dark:hover:bg-apple-700 transition-colors duration-200"
            >
              New Tools
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-apple-200 dark:border-apple-700">
            <form onSubmit={handleSearch} className="px-4 relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="apple-input w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-7 top-1/2 transform -translate-y-1/2"
                aria-label="Search"
              >
                <svg 
                  className="h-5 w-5 text-apple-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
} 