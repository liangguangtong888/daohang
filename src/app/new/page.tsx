import { tools } from '@/data/tools';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';

export default function NewToolsPage() {
  // 过滤出所有标记为新的工具
  const newTools = tools.filter((tool) => tool.isNew);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* New Tools Header */}
        <div className="bg-white dark:bg-apple-800 overflow-hidden relative">
          <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-apple-800 dark:text-white tracking-tight sm:text-5xl">
                New AI Tools
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-apple-500 dark:text-apple-200 leading-relaxed">
                Discover the latest AI tools that have been added to our directory.
              </p>
            </div>
          </div>
          {/* Decorative background gradients */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-apple-blue/10 dark:to-apple-blue/20" aria-hidden="true"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-apple-pink/10 dark:to-apple-pink/20" aria-hidden="true"></div>
        </div>

        {/* New Tools Grid */}
        <div className="bg-apple-50 dark:bg-apple-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {newTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            
            {newTools.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-apple-500 dark:text-apple-200">
                  No new tools available at the moment. Check back soon!
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