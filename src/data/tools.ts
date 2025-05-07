export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'ai-painting',
    name: 'AI Painting',
    description: 'AI-powered image generation and editing tools'
  },
  {
    id: 'ai-writing',
    name: 'AI Writing',
    description: 'AI writing assistants and content generation tools'
  },
  {
    id: 'ai-video',
    name: 'AI Video',
    description: 'AI video creation and editing tools'
  },
  {
    id: 'ai-office',
    name: 'AI Office',
    description: 'AI-powered office productivity tools'
  },
  {
    id: 'ai-chat',
    name: 'AI Chat',
    description: 'AI chat and conversation tools'
  },
  {
    id: 'ai-programming',
    name: 'AI Programming',
    description: 'AI coding assistants and development tools'
  },
  {
    id: 'ai-audio',
    name: 'AI Audio',
    description: 'AI audio generation and processing tools'
  },
  {
    id: 'ai-prompts',
    name: 'AI Prompts',
    description: 'AI prompt engineering and optimization tools'
  },
  {
    id: 'ai-design',
    name: 'AI Design',
    description: 'AI design and creative tools'
  },
  {
    id: 'ai-digital-human',
    name: 'AI Digital Human',
    description: 'Digital human and avatar creation tools'
  }
];

export const tools: Tool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI image generation tool that creates stunning artwork from text descriptions',
    url: 'https://www.midjourney.com',
    category: 'ai-painting',
    tags: ['image-generation', 'art', 'design'],
    isNew: true
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced AI language model for natural conversations and content creation',
    url: 'https://chat.openai.com',
    category: 'ai-chat',
    tags: ['chat', 'writing', 'assistant']
  },
  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'AI system that creates realistic images and art from natural language descriptions',
    url: 'https://openai.com/dall-e-2',
    category: 'ai-painting',
    tags: ['image-generation', 'art', 'design']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code faster',
    url: 'https://github.com/features/copilot',
    category: 'ai-programming',
    tags: ['coding', 'development', 'assistant']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion for better content creation',
    url: 'https://www.notion.so/product/ai',
    category: 'ai-writing',
    tags: ['writing', 'productivity', 'assistant']
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'AI-powered video editing and generation platform',
    url: 'https://runwayml.com',
    category: 'ai-video',
    tags: ['video-editing', 'generation', 'creative']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice generation and text-to-speech platform',
    url: 'https://elevenlabs.io',
    category: 'ai-audio',
    tags: ['voice', 'tts', 'audio']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform that creates videos from text',
    url: 'https://www.synthesia.io',
    category: 'ai-video',
    tags: ['video-generation', 'avatar', 'presentation']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing and sales content',
    url: 'https://www.copy.ai',
    category: 'ai-writing',
    tags: ['copywriting', 'marketing', 'sales']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content platform for marketing teams',
    url: 'https://www.jasper.ai',
    category: 'ai-writing',
    tags: ['content', 'marketing', 'copywriting']
  }
]; 