"use client";

import { useState } from 'react';
import { categories, tools } from '@/data/tools';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';
import ToolCard from '@/components/ToolCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof tools | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = tools.filter(
      tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query) || 
        tool.tags?.some(tag => tag.toLowerCase().includes(query))
    );
    
    setSearchResults(results);
    // Scroll to results area
    document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-white dark:bg-apple-800 overflow-hidden relative">
          <div className="max-w-7xl mx-auto pt-20 pb-24 px-4 sm:pt-32 sm:pb-32 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-apple-800 dark:text-white tracking-tight sm:text-5xl md:text-6xl">
                Discover the Best <span className="text-apple-blue">AI Tools</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-apple-500 dark:text-apple-200 leading-relaxed">
                Explore our curated collection of the most powerful and innovative AI tools for your needs.
              </p>
              <div className="mt-10">
                <a
                  href="#tools"
                  className="apple-button text-base font-medium py-3 px-8"
                >
                  Browse Now
                </a>
              </div>
            </div>
          </div>
          {/* Decorative background gradients */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-apple-blue/10 dark:to-apple-blue/20" aria-hidden="true"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-apple-pink/10 dark:to-apple-pink/20" aria-hidden="true"></div>
        </div>

        {/* Search Area */}
        <div className="bg-apple-50 dark:bg-apple-900 py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search AI tools..."
                className="apple-input w-full py-4 pl-12 pr-4 text-lg shadow-apple"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-apple-400" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button 
                type="submit" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 apple-button py-2 px-4"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Search Results */}
        {searchResults && (
          <div id="search-results" className="bg-apple-50 dark:bg-apple-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-apple-800 dark:text-white mb-6">
                Search Results ({searchResults.length})
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-apple-600 dark:text-apple-300">
                    No tools found matching "{searchQuery}".
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tool Categories */}
        <div id="tools" className="bg-apple-50 dark:bg-apple-900">
          {categories.map((category) => {
            const categoryTools = tools.filter((tool) => tool.category === category.id);
            return (
              <CategorySection
                key={category.id}
                category={category}
                tools={categoryTools}
              />
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-apple-800 border-t border-apple-100 dark:border-apple-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-apple-500 dark:text-apple-300">
              © {new Date().getFullYear()} AI Tools Directory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
