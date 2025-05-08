import { categories, tools } from '@/data/tools';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  
  // 如果找不到分类，返回404
  if (!category) {
    notFound();
  }
  
  const categoryTools = tools.filter((tool) => tool.category === category.id);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Category Header */}
        <div className="bg-white dark:bg-apple-800 overflow-hidden relative">
          <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-apple-800 dark:text-white tracking-tight sm:text-5xl">
                {category.name}
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-apple-500 dark:text-apple-200 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
          {/* Decorative background gradients */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-apple-blue/10 dark:to-apple-blue/20" aria-hidden="true"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-apple-pink/10 dark:to-apple-pink/20" aria-hidden="true"></div>
        </div>

        {/* Tools Grid */}
        <div className="bg-apple-50 dark:bg-apple-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            
            {categoryTools.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-apple-500 dark:text-apple-200">
                  No tools available in this category yet. Check back soon!
                </p>
              </div>
            )}
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