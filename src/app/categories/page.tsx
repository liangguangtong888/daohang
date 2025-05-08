import { categories, tools } from '@/data/tools';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Categories Header */}
        <div className="bg-white dark:bg-apple-800 overflow-hidden relative">
          <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-apple-800 dark:text-white tracking-tight sm:text-5xl">
                AI Tool Categories
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-apple-500 dark:text-apple-200 leading-relaxed">
                Browse our collection of AI tools by category to find the perfect solution for your needs.
              </p>
            </div>
          </div>
          {/* Decorative background gradients */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-apple-blue/10 dark:to-apple-blue/20" aria-hidden="true"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-apple-pink/10 dark:to-apple-pink/20" aria-hidden="true"></div>
        </div>

        {/* Categories Grid */}
        <div className="bg-apple-50 dark:bg-apple-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const categoryTools = tools.filter((tool) => tool.category === category.id);
                const toolCount = categoryTools.length;
                
                return (
                  <Link 
                    href={`/category/${category.id}`} 
                    key={category.id}
                    className="block group"
                  >
                    <div className="bg-white dark:bg-apple-800 rounded-xl shadow-apple overflow-hidden transition-transform duration-300 group-hover:shadow-apple-lg group-hover:-translate-y-1">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-apple-800 dark:text-white mb-2 group-hover:text-apple-blue transition-colors duration-200">
                          {category.name}
                        </h3>
                        <p className="text-apple-500 dark:text-apple-300 mb-4">
                          {category.description}
                        </p>
                        <div className="text-sm text-apple-400 dark:text-apple-400">
                          {toolCount} {toolCount === 1 ? 'tool' : 'tools'} available
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
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