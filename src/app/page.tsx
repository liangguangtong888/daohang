import { categories, tools } from '@/data/tools';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Discover the Best AI Tools
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Explore our curated collection of the most powerful and innovative AI tools for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
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
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} AI Tools Directory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
