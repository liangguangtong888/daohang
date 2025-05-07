import { Tool } from '@/data/tools';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="apple-card overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-apple-800 dark:text-white">
            <Link 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-apple-blue transition-colors duration-200"
            >
              {tool.name}
            </Link>
          </h3>
          {tool.isNew && (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-apple-green rounded-full">
              New
            </span>
          )}
        </div>
        <p className="mt-3 text-apple-500 dark:text-apple-200">{tool.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="apple-tag bg-apple-100 text-apple-600 dark:bg-apple-700 dark:text-apple-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-apple-100 dark:border-apple-700">
          <Link 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="apple-button block w-full text-center"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
} 