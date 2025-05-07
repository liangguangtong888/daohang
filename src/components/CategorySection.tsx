import { Category, Tool } from '@/data/tools';
import ToolCard from './ToolCard';

interface CategorySectionProps {
  category: Category;
  tools: Tool[];
}

export default function CategorySection({ category, tools }: CategorySectionProps) {
  return (
    <section className="py-16 first:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-apple-800 dark:text-white tracking-tight sm:text-4xl">
            {category.name}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-apple-500 dark:text-apple-200">
            {category.description}
          </p>
        </div>
        <div className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
} 