import { Tool } from '@/data/tools';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">
            <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              {tool.name}
            </Link>
          </h3>
          {tool.isNew && (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
              New
            </span>
          )}
        </div>
        <p className="mt-2 text-gray-600">{tool.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 