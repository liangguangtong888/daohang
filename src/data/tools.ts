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
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open source AI image generation model that can be deployed locally or via cloud services',
    url: 'https://stability.ai',
    category: 'ai-painting',
    tags: ['image-generation', 'open-source', 'local-deployment'],
    isNew: true
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.AI',
    description: 'Professional AI creative tool for generating high-quality visual content for creators and businesses',
    url: 'https://leonardo.ai',
    category: 'ai-painting',
    tags: ['image-generation', 'creative', 'commercial']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Generative AI creative tool by Adobe that seamlessly integrates with Creative Cloud applications',
    url: 'https://firefly.adobe.com',
    category: 'ai-painting',
    tags: ['image-editing', 'creative', 'professional']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'AI assistant developed by Anthropic, excelling in natural conversations and processing long texts',
    url: 'https://claude.ai',
    category: 'ai-chat',
    tags: ['chat', 'reasoning', 'document-analysis'],
    isNew: true
  },
  {
    id: 'bard',
    name: 'Google Gemini',
    description: 'Google\'s AI assistant that combines search capabilities with multimodal understanding',
    url: 'https://gemini.google.com',
    category: 'ai-chat',
    tags: ['chat', 'multimodal', 'search']
  },
  {
    id: 'pi',
    name: 'Pi',
    description: 'Personal AI assistant by Inflection AI, focused on personalized and emotionally intelligent interactions',
    url: 'https://pi.ai',
    category: 'ai-chat',
    tags: ['personal-assistant', 'emotional-intelligence', 'conversation']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-based code editor that provides intelligent code suggestions and auto-completion features',
    url: 'https://cursor.sh',
    category: 'ai-programming',
    tags: ['code-editor', 'autocomplete', 'development'],
    isNew: true
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: 'Free AI coding assistant that supports multiple IDEs and programming languages',
    url: 'https://codeium.com',
    category: 'ai-programming',
    tags: ['coding', 'autocomplete', 'free']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code assistant that provides intelligent code completion and suggestions, supporting private codebase learning',
    url: 'https://www.tabnine.com',
    category: 'ai-programming',
    tags: ['code-completion', 'privacy', 'development']
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: 'Microsoft\'s AI assistant integrated into Office applications to improve productivity',
    url: 'https://copilot.microsoft.com',
    category: 'ai-office',
    tags: ['office', 'productivity', 'microsoft'],
    isNew: true
  },
  {
    id: 'tome',
    name: 'Tome',
    description: 'AI-driven presentation creation tool that generates beautiful slides and narrative content',
    url: 'https://tome.app',
    category: 'ai-office',
    tags: ['presentations', 'storytelling', 'design']
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'Intelligent presentation tool that uses AI to help create professionally designed slides',
    url: 'https://www.beautiful.ai',
    category: 'ai-office',
    tags: ['presentations', 'design', 'templates']
  },
  {
    id: 'mubert',
    name: 'Mubert',
    description: 'AI music generation platform providing royalty-free music resources for creators and businesses',
    url: 'https://mubert.com',
    category: 'ai-audio',
    tags: ['music-generation', 'royalty-free', 'soundtrack'],
    isNew: true
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one audio and video editing platform offering transcription, editing, and AI voice cloning',
    url: 'https://www.descript.com',
    category: 'ai-audio',
    tags: ['audio-editing', 'transcription', 'voice-cloning']
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    description: 'Advanced AI voice generation and cloning tool for commercial and creative applications',
    url: 'https://www.resemble.ai',
    category: 'ai-audio',
    tags: ['voice-cloning', 'text-to-speech', 'localization']
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    description: 'AI tool for generating high-quality video content from text prompts and images',
    url: 'https://pika.art',
    category: 'ai-video',
    tags: ['video-generation', 'text-to-video', 'editing'],
    isNew: true
  },
  {
    id: 'runway-gen2',
    name: 'Runway Gen-2',
    description: 'Advanced text-to-video generation model for creating high-quality visual effects and animations',
    url: 'https://research.runwayml.com/gen2',
    category: 'ai-video',
    tags: ['text-to-video', 'visual-effects', 'animation']
  },
  {
    id: 'elai',
    name: 'Elai.io',
    description: 'Create AI video presenters from text without cameras or green screens',
    url: 'https://elai.io',
    category: 'ai-video',
    tags: ['ai-presenter', 'explainer-videos', 'text-to-video']
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    description: 'AI design features integrated into Figma to help designers create and iterate faster',
    url: 'https://www.figma.com/ai',
    category: 'ai-design',
    tags: ['ui-design', 'prototyping', 'collaboration'],
    isNew: true
  },
  {
    id: 'uizard',
    name: 'Uizard',
    description: 'AI-driven design platform that quickly transforms sketches into working prototypes',
    url: 'https://uizard.io',
    category: 'ai-design',
    tags: ['wireframing', 'prototyping', 'sketch-to-design']
  },
  {
    id: 'designs-ai',
    name: 'Designs.ai',
    description: 'All-in-one AI creative platform offering logo design, video creation, and graphic design tools',
    url: 'https://designs.ai',
    category: 'ai-design',
    tags: ['logo-design', 'branding', 'graphic-design']
  },
  {
    id: 'promptbase',
    name: 'PromptBase',
    description: 'AI prompt marketplace for buying and selling quality prompts for various AI models',
    url: 'https://promptbase.com',
    category: 'ai-prompts',
    tags: ['prompt-marketplace', 'optimization', 'templates'],
    isNew: true
  },
  {
    id: 'prompthero',
    name: 'PromptHero',
    description: 'Community platform to discover, create and share AI art prompts',
    url: 'https://prompthero.com',
    category: 'ai-prompts',
    tags: ['prompt-community', 'ai-art', 'inspiration']
  },
  {
    id: 'promptperfect',
    name: 'PromptPerfect',
    description: 'AI prompt optimization tool to improve interactions with large language models',
    url: 'https://promptperfect.jina.ai',
    category: 'ai-prompts',
    tags: ['prompt-optimization', 'llm', 'fine-tuning']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'Create realistic AI video presenters and digital avatars with multilingual support',
    url: 'https://www.heygen.com',
    category: 'ai-digital-human',
    tags: ['digital-avatar', 'video-generation', 'multilingual'],
    isNew: true
  },
  {
    id: 'dscript',
    name: 'D-ID',
    description: 'Generative AI platform for creating talking portraits and digital characters',
    url: 'https://www.d-id.com',
    category: 'ai-digital-human',
    tags: ['talking-avatars', 'digital-people', 'creative-reality']
  },
  {
    id: 'hour-one',
    name: 'Hour One',
    description: 'Business-grade AI character generation platform for training, marketing, and customer service',
    url: 'https://hourone.ai',
    category: 'ai-digital-human',
    tags: ['business-avatars', 'training', 'customer-service']
  },
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'Intelligent search engine that provides detailed answers with citations, combining AI with web search capabilities',
    url: 'https://www.perplexity.ai',
    category: 'ai-chat',
    tags: ['search', 'research', 'citations'],
    isNew: true
  },
  {
    id: 'anthropic-claude-3',
    name: 'Claude 3',
    description: 'Anthropic\'s latest AI assistant offering multiple model versions (Opus, Sonnet, Haiku) with visual understanding and complex reasoning capabilities',
    url: 'https://claude.ai',
    category: 'ai-chat',
    tags: ['multimodal', 'reasoning', 'vision'],
    isNew: true
  },
  {
    id: 'sora',
    name: 'Sora',
    description: 'Text-to-video generation model by OpenAI capable of creating high-quality, realistic videos up to one minute long',
    url: 'https://openai.com/sora',
    category: 'ai-video',
    tags: ['text-to-video', 'realistic', 'cinematic'],
    isNew: true
  },
  {
    id: 'stability-ai-stable-video',
    name: 'Stable Video',
    description: 'Video generation model by Stability AI that transforms static images into short videos',
    url: 'https://stability.ai/stable-video',
    category: 'ai-video',
    tags: ['image-to-video', 'animation', 'motion'],
    isNew: true
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'OpenAI\'s latest multimodal model featuring faster response times, enhanced visual understanding, and voice interaction capabilities',
    url: 'https://openai.com/gpt-4o',
    category: 'ai-chat',
    tags: ['multimodal', 'voice', 'vision'],
    isNew: true
  },
  {
    id: 'llama-3',
    name: 'Llama 3',
    description: 'Meta\'s latest open-source large language model available in various sizes for different application scenarios',
    url: 'https://ai.meta.com/llama',
    category: 'ai-chat',
    tags: ['open-source', 'llm', 'local-deployment'],
    isNew: true
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney V6',
    description: 'Latest version of Midjourney offering higher quality and more precise image generation results',
    url: 'https://www.midjourney.com',
    category: 'ai-painting',
    tags: ['image-generation', 'photorealistic', 'art'],
    isNew: true
  },
  {
    id: 'adobe-express',
    name: 'Adobe Express',
    description: 'Content creation platform integrating Adobe Firefly AI technology, offering easy-to-use design and editing tools',
    url: 'https://express.adobe.com',
    category: 'ai-design',
    tags: ['design', 'content-creation', 'templates'],
    isNew: true
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Open platform allowing users to run various open-source AI models including image generation, video processing, and language models',
    url: 'https://replicate.com',
    category: 'ai-painting',
    tags: ['open-source', 'model-hosting', 'api'],
    isNew: true
  }
]; 