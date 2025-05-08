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
  },
  {
    id: 'mistral-ai',
    name: 'Mistral AI',
    description: 'High-performance open-weight language models with state-of-the-art capabilities for various applications',
    url: 'https://mistral.ai',
    category: 'ai-chat',
    tags: ['open-weight', 'llm', 'enterprise'],
    isNew: true
  },
  {
    id: 'grok',
    name: 'Grok',
    description: 'AI assistant by xAI designed to answer questions with wit, have a rebellious streak, and access real-time information',
    url: 'https://grok.x.ai',
    category: 'ai-chat',
    tags: ['real-time', 'wit', 'research'],
    isNew: true
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'Platform for creating and chatting with AI characters based on real or fictional personalities',
    url: 'https://character.ai',
    category: 'ai-chat',
    tags: ['characters', 'roleplay', 'entertainment'],
    isNew: true
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Enterprise-grade language AI platform offering tools for text generation, search, and classification',
    url: 'https://cohere.com',
    category: 'ai-chat',
    tags: ['enterprise', 'semantic-search', 'classification'],
    isNew: true
  },
  {
    id: 'hugging-face',
    name: 'Hugging Face',
    description: 'Open-source platform providing thousands of pre-trained models and tools for machine learning development',
    url: 'https://huggingface.co',
    category: 'ai-programming',
    tags: ['open-source', 'model-hub', 'collaboration'],
    isNew: true
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI-powered presentation and documentation tool that transforms simple prompts into polished documents',
    url: 'https://gamma.app',
    category: 'ai-office',
    tags: ['presentations', 'documentation', 'design'],
    isNew: true
  },
  {
    id: 'fireflies-ai',
    name: 'Fireflies.ai',
    description: 'Meeting assistant that automatically records, transcribes, and generates summaries and action items',
    url: 'https://fireflies.ai',
    category: 'ai-office',
    tags: ['meeting-assistant', 'transcription', 'summaries'],
    isNew: true
  },
  {
    id: 'deepl',
    name: 'DeepL',
    description: 'AI-powered translation tool offering high-quality, nuanced translations across multiple languages',
    url: 'https://www.deepl.com',
    category: 'ai-writing',
    tags: ['translation', 'multilingual', 'professional'],
    isNew: true
  },
  {
    id: 'autodraw',
    name: 'AutoDraw',
    description: 'Google AI experiment that pairs machine learning with drawings to help users create quick illustrations',
    url: 'https://www.autodraw.com',
    category: 'ai-design',
    tags: ['drawing', 'recognition', 'sketching'],
    isNew: true
  },
  {
    id: 'pollinations',
    name: 'Pollinations',
    description: 'Free creative AI platform for generating and modifying images, combining various open-source models',
    url: 'https://pollinations.ai',
    category: 'ai-painting',
    tags: ['free', 'creative', 'generative'],
    isNew: true
  },
  {
    id: 'civitai',
    name: 'Civitai',
    description: 'Community-driven platform sharing custom models, trained styles, and resources for AI image generation',
    url: 'https://civitai.com',
    category: 'ai-painting',
    tags: ['community', 'models', 'stable-diffusion'],
    isNew: true
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    description: 'AI meeting assistant that records, transcribes, and provides notes with conversation intelligence',
    url: 'https://otter.ai',
    category: 'ai-office',
    tags: ['transcription', 'meeting-notes', 'voice-recognition'],
    isNew: true
  },
  {
    id: 'flair-ai',
    name: 'Flair AI',
    description: 'AI design tool that helps create branded marketing content and product images at scale',
    url: 'https://flair.ai',
    category: 'ai-design',
    tags: ['marketing', 'product-images', 'branding'],
    isNew: true
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    description: 'AI music generator creating original, royalty-free tracks for videos, podcasts, and other content',
    url: 'https://soundraw.io',
    category: 'ai-audio',
    tags: ['music-generation', 'royalty-free', 'customization'],
    isNew: true
  },
  {
    id: 'stability-ai-stable-audio',
    name: 'Stable Audio',
    description: 'AI audio generation tool by Stability AI for creating original music and sound effects',
    url: 'https://stability.ai/stable-audio',
    category: 'ai-audio',
    tags: ['music', 'sound-effects', 'generation'],
    isNew: true
  },
  {
    id: 'krisp',
    name: 'Krisp',
    description: 'AI-powered noise cancellation app that removes background noise and echo from calls',
    url: 'https://krisp.ai',
    category: 'ai-audio',
    tags: ['noise-cancellation', 'voice-clarity', 'meetings'],
    isNew: true
  },
  {
    id: 'kaiber',
    name: 'Kaiber',
    description: 'AI creative engine that transforms images, videos, and text into personalized visual stories',
    url: 'https://kaiber.ai',
    category: 'ai-video',
    tags: ['visual-stories', 'personalization', 'creative'],
    isNew: true
  },
  {
    id: 'gen-2',
    name: 'Runway Gen-2',
    description: 'Advanced AI video generation model that transforms text, images, and video into new video content',
    url: 'https://runwayml.com/gen-2',
    category: 'ai-video',
    tags: ['video-generation', 'editing', 'visual-effects'],
    isNew: true
  },
  {
    id: 'fliki',
    name: 'Fliki',
    description: 'AI platform that converts text to videos with realistic voiceovers in multiple languages',
    url: 'https://fliki.ai',
    category: 'ai-video',
    tags: ['text-to-video', 'voiceover', 'multilingual'],
    isNew: true
  },
  {
    id: 'invideo',
    name: 'InVideo',
    description: 'Online video creation platform with AI-powered tools for editing and template-based creation',
    url: 'https://invideo.io',
    category: 'ai-video',
    tags: ['video-editing', 'templates', 'marketing'],
    isNew: true
  },
  {
    id: 'bing-image-creator',
    name: 'Bing Image Creator',
    description: 'Microsoft\'s AI image generator powered by DALL-E models, integrated into Bing search',
    url: 'https://www.bing.com/create',
    category: 'ai-painting',
    tags: ['image-generation', 'free', 'integrated'],
    isNew: true
  },
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'Collaborative art tool that uses AI to blend and evolve images into new creations',
    url: 'https://www.artbreeder.com',
    category: 'ai-painting',
    tags: ['collaborative', 'image-evolution', 'creative'],
    isNew: true
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI writing assistant with paraphrasing, grammar checking, and summarization capabilities',
    url: 'https://quillbot.com',
    category: 'ai-writing',
    tags: ['paraphrasing', 'grammar', 'summarization'],
    isNew: true
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant that checks grammar, clarity, engagement, and delivery of written content',
    url: 'https://www.grammarly.com',
    category: 'ai-writing',
    tags: ['grammar', 'writing-enhancement', 'productivity'],
    isNew: true
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'AI writing platform for creating SEO-optimized content, ads, emails, and product descriptions',
    url: 'https://writesonic.com',
    category: 'ai-writing',
    tags: ['seo', 'content-generation', 'marketing'],
    isNew: true
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI writing companion that helps rewrite and rephrase sentences for better clarity and impact',
    url: 'https://www.wordtune.com',
    category: 'ai-writing',
    tags: ['rewriting', 'rephrasing', 'clarity'],
    isNew: true
  },
  {
    id: 'peppertype',
    name: 'Peppertype.ai',
    description: 'AI content generation platform for creating marketing and social media content',
    url: 'https://www.peppertype.ai',
    category: 'ai-writing',
    tags: ['marketing', 'social-media', 'content-creation'],
    isNew: true
  },
  {
    id: 'writer',
    name: 'Writer',
    description: 'Enterprise-focused AI writing platform for consistent brand communication and style',
    url: 'https://writer.com',
    category: 'ai-writing',
    tags: ['enterprise', 'brand-voice', 'collaboration'],
    isNew: true
  },
  {
    id: 'pixlr',
    name: 'Pixlr',
    description: 'AI-powered photo editor with generative tools for creative image editing and design',
    url: 'https://pixlr.com',
    category: 'ai-painting',
    tags: ['photo-editing', 'design', 'web-based'],
    isNew: true
  },
  {
    id: 'canva',
    name: 'Canva AI',
    description: 'Design platform with AI tools for image generation, text effects, and content creation',
    url: 'https://www.canva.com',
    category: 'ai-design',
    tags: ['design', 'templates', 'collaboration'],
    isNew: true
  },
  {
    id: 'photoroom',
    name: 'PhotoRoom',
    description: 'AI-powered photo editing app that removes backgrounds and creates studio-quality product images',
    url: 'https://www.photoroom.com',
    category: 'ai-painting',
    tags: ['background-removal', 'product-photography', 'editing'],
    isNew: true
  },
  {
    id: 'remove-bg',
    name: 'remove.bg',
    description: 'Automated tool that removes image backgrounds with AI in seconds',
    url: 'https://www.remove.bg',
    category: 'ai-painting',
    tags: ['background-removal', 'image-editing', 'automation'],
    isNew: true
  },
  {
    id: 'playground-ai',
    name: 'Playground AI',
    description: 'Free-to-use online AI image creator using stable diffusion models',
    url: 'https://playground.ai',
    category: 'ai-painting',
    tags: ['free', 'image-generation', 'web-based'],
    isNew: true
  },
  {
    id: 'craiyon',
    name: 'Craiyon',
    description: 'Free AI image generator based on the original DALL-E Mini model',
    url: 'https://www.craiyon.com',
    category: 'ai-painting',
    tags: ['free', 'image-generation', 'accessible'],
    isNew: true
  },
  {
    id: 'anthropic-claude-opus',
    name: 'Claude Opus',
    description: 'Anthropic\'s most advanced AI model featuring enhanced reasoning and complex problem-solving abilities',
    url: 'https://claude.ai',
    category: 'ai-chat',
    tags: ['reasoning', 'problem-solving', 'advanced'],
    isNew: true
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q',
    description: 'AI-powered assistant for AWS, helping developers build, deploy, and operate applications',
    url: 'https://aws.amazon.com/q',
    category: 'ai-programming',
    tags: ['aws', 'cloud', 'development'],
    isNew: true
  },
  {
    id: 'godmode',
    name: 'GodMode',
    description: 'Unified AI chat interface that connects to multiple AI models with enhanced capabilities',
    url: 'https://godmode.space',
    category: 'ai-chat',
    tags: ['multi-model', 'chat', 'unified-interface'],
    isNew: true
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'AI chat platform by Quora that provides access to multiple AI models in one interface',
    url: 'https://poe.com',
    category: 'ai-chat',
    tags: ['multi-model', 'chat', 'comparison'],
    isNew: true
  },
  {
    id: 'wiseone',
    name: 'WiseOne',
    description: 'AI research assistant that helps fact-check and verify online information',
    url: 'https://wiseone.io',
    category: 'ai-chat',
    tags: ['research', 'fact-checking', 'verification'],
    isNew: true
  },
  {
    id: 'airtable-ai',
    name: 'Airtable AI',
    description: 'AI capabilities integrated into Airtable for automating workflows and analyzing data',
    url: 'https://www.airtable.com/ai',
    category: 'ai-office',
    tags: ['data-analysis', 'workflow-automation', 'database'],
    isNew: true
  },
  {
    id: 'notion-ai-q-and-a',
    name: 'Notion Q&A',
    description: 'AI feature in Notion that allows users to ask questions about their workspace content',
    url: 'https://www.notion.so/product/ai',
    category: 'ai-office',
    tags: ['knowledge-base', 'question-answering', 'search'],
    isNew: true
  },
  {
    id: 'todoist-ai',
    name: 'Todoist AI',
    description: 'AI features integrated into Todoist to help manage tasks and improve productivity',
    url: 'https://todoist.com',
    category: 'ai-office',
    tags: ['task-management', 'productivity', 'organization'],
    isNew: true
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    description: 'AI coding assistant integrated into Replit that helps write, explain, and transform code',
    url: 'https://replit.com/ghostwriter',
    category: 'ai-programming',
    tags: ['coding', 'explanation', 'transformation'],
    isNew: true
  },
  {
    id: 'sourcegraph-cody',
    name: 'Sourcegraph Cody',
    description: 'AI coding assistant that understands your entire codebase and helps write and explain code',
    url: 'https://sourcegraph.com/cody',
    category: 'ai-programming',
    tags: ['codebase-understanding', 'documentation', 'explanation'],
    isNew: true
  },
  {
    id: 'phind',
    name: 'Phind',
    description: 'AI search engine specialized for developers with in-depth coding solutions',
    url: 'https://www.phind.com',
    category: 'ai-programming',
    tags: ['developer-search', 'coding-solutions', 'explanation'],
    isNew: true
  },
  {
    id: 'bloop',
    name: 'Bloop',
    description: 'AI-powered code search tool that understands code semantically and answers questions about codebases',
    url: 'https://bloop.ai',
    category: 'ai-programming',
    tags: ['code-search', 'semantic-understanding', 'codebase-exploration'],
    isNew: true
  },
  {
    id: 'ollama',
    name: 'Ollama',
    description: 'Framework for running large language models locally on personal computers',
    url: 'https://ollama.ai',
    category: 'ai-chat',
    tags: ['local-deployment', 'open-source', 'privacy'],
    isNew: true
  },
  {
    id: 'jan',
    name: 'Jan',
    description: 'Open-source AI assistant that runs locally on your computer for enhanced privacy',
    url: 'https://jan.ai',
    category: 'ai-chat',
    tags: ['local', 'privacy', 'open-source'],
    isNew: true
  },
  {
    id: 'luma-labs',
    name: 'Luma Labs',
    description: 'Creator of Luma Dream Machine for image generation and Luma Studio for 3D video generation',
    url: 'https://lumalabs.ai',
    category: 'ai-video',
    tags: ['3d-generation', 'video-creation', 'nerf'],
    isNew: true
  },
  {
    id: 'synthesia-studio',
    name: 'Synthesia STUDIO',
    description: 'Professional AI video creation platform with customizable avatars and templates',
    url: 'https://www.synthesia.io/studio',
    category: 'ai-video',
    tags: ['avatars', 'professional', 'enterprise'],
    isNew: true
  },
  {
    id: 'opus',
    name: 'Opus',
    description: 'AI video generator that transforms scripts into engaging videos with customizable AI avatars',
    url: 'https://opus.ai',
    category: 'ai-video',
    tags: ['script-to-video', 'avatars', 'customization'],
    isNew: true
  },
  {
    id: 'steve-ai',
    name: 'Steve.ai',
    description: 'AI-powered video creation platform with animation and effects for marketing and social media',
    url: 'https://www.steve.ai',
    category: 'ai-video',
    tags: ['animation', 'marketing', 'social-media'],
    isNew: true
  },
  {
    id: 'veed-io',
    name: 'VEED.IO',
    description: 'Online video editing platform with AI tools for subtitles, translation, and voice generation',
    url: 'https://www.veed.io',
    category: 'ai-video',
    tags: ['editing', 'subtitles', 'translation'],
    isNew: true
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI music creation platform that generates original songs from text descriptions',
    url: 'https://suno.ai',
    category: 'ai-audio',
    tags: ['music-generation', 'song-creation', 'lyrics'],
    isNew: true
  },
  {
    id: 'boomy',
    name: 'Boomy',
    description: 'AI music creation tool that helps anyone create original songs in seconds',
    url: 'https://boomy.com',
    category: 'ai-audio',
    tags: ['music-creation', 'royalty-split', 'distribution'],
    isNew: true
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'AI music generation platform that creates custom tracks based on user preferences',
    url: 'https://udio.com',
    category: 'ai-audio',
    tags: ['music-generation', 'customization', 'streaming'],
    isNew: true
  },
  {
    id: 'altered',
    name: 'Altered',
    description: 'Voice transformation technology that changes voices in real-time to different identities',
    url: 'https://www.altered.ai',
    category: 'ai-audio',
    tags: ['voice-transformation', 'identity', 'real-time'],
    isNew: true
  },
  {
    id: 'whisper',
    name: 'OpenAI Whisper',
    description: 'Open-source speech recognition system with multilingual and transcription capabilities',
    url: 'https://openai.com/research/whisper',
    category: 'ai-audio',
    tags: ['speech-recognition', 'transcription', 'translation'],
    isNew: true
  },
  {
    id: 'play-ht',
    name: 'Play.ht',
    description: 'AI voice generator that creates realistic text to speech with over 900+ voices',
    url: 'https://play.ht',
    category: 'ai-audio',
    tags: ['text-to-speech', 'voice-cloning', 'narration'],
    isNew: true
  },
  {
    id: 'speechify',
    name: 'Speechify',
    description: 'Text to speech application that converts any text into natural-sounding audio',
    url: 'https://speechify.com',
    category: 'ai-audio',
    tags: ['text-to-speech', 'accessibility', 'productivity'],
    isNew: true
  },
  {
    id: 'lobe',
    name: 'Lobe',
    description: 'Microsoft\'s free, easy-to-use tool for creating custom machine learning models',
    url: 'https://www.lobe.ai',
    category: 'ai-programming',
    tags: ['no-code', 'custom-models', 'image-classification'],
    isNew: true
  },
  {
    id: 'teachable-machine',
    name: 'Teachable Machine',
    description: 'Google\'s web-based tool for creating and training machine learning models without coding',
    url: 'https://teachablemachine.withgoogle.com',
    category: 'ai-programming',
    tags: ['no-code', 'education', 'custom-models'],
    isNew: true
  },
  {
    id: 'obvibase',
    name: 'Obvibase',
    description: 'Low-code database builder with AI assistance for creating custom applications',
    url: 'https://www.obvibase.com',
    category: 'ai-programming',
    tags: ['database', 'low-code', 'application-builder'],
    isNew: true
  },
  {
    id: 'roboflow',
    name: 'Roboflow',
    description: 'Computer vision platform that helps developers build and deploy custom vision models',
    url: 'https://roboflow.com',
    category: 'ai-programming',
    tags: ['computer-vision', 'model-training', 'deployment'],
    isNew: true
  },
  {
    id: 'v0',
    name: 'v0',
    description: 'AI tool that generates web applications from simple natural language descriptions',
    url: 'https://v0.dev',
    category: 'ai-programming',
    tags: ['web-development', 'code-generation', 'prototyping'],
    isNew: true
  },
  {
    id: 'vercel-ai',
    name: 'Vercel AI SDK',
    description: 'Open-source library for building AI-powered user interfaces with streaming capabilities',
    url: 'https://sdk.vercel.ai',
    category: 'ai-programming',
    tags: ['ui', 'streaming', 'development'],
    isNew: true
  },
  {
    id: 'reface',
    name: 'Reface',
    description: 'Face-swapping app that uses AI to place your face onto celebrities, movie scenes, and GIFs',
    url: 'https://reface.app',
    category: 'ai-digital-human',
    tags: ['face-swap', 'entertainment', 'mobile'],
    isNew: true
  },
  {
    id: 'replica',
    name: 'Replica Studios',
    description: 'Professional AI voice actors for games, films, and content creation',
    url: 'https://replicastudios.com',
    category: 'ai-digital-human',
    tags: ['voice-actors', 'entertainment', 'games'],
    isNew: true
  },
  {
    id: 'uneeq',
    name: 'UneeQ',
    description: 'Digital human platform creating interactive, emotionally responsive AI characters',
    url: 'https://www.uneeq.com',
    category: 'ai-digital-human',
    tags: ['emotional-response', 'interactive', 'enterprise'],
    isNew: true
  },
  {
    id: 'synthesia-avatars',
    name: 'Synthesia Avatars',
    description: 'Large collection of diverse AI avatars for creating professional video content',
    url: 'https://www.synthesia.io/avatars',
    category: 'ai-digital-human',
    tags: ['avatars', 'diversity', 'business'],
    isNew: true
  },
  {
    id: 'deepbrain',
    name: 'DeepBrain AI',
    description: 'AI-generated virtual humans for customer service, education, and entertainment',
    url: 'https://www.deepbrain.io',
    category: 'ai-digital-human',
    tags: ['virtual-humans', 'customer-service', 'education'],
    isNew: true
  },
  {
    id: 'wondercraft',
    name: 'Wondercraft',
    description: 'AI podcast production platform that creates videos with animated avatars from audio recordings',
    url: 'https://www.wondercraft.ai',
    category: 'ai-digital-human',
    tags: ['podcast', 'animation', 'content-creation'],
    isNew: true
  },
  {
    id: 'optimizely',
    name: 'Optimizely',
    description: 'Marketing and experimentation platform with AI capabilities for content personalization',
    url: 'https://www.optimizely.com',
    category: 'ai-writing',
    tags: ['marketing', 'personalization', 'experimentation'],
    isNew: true
  },
  {
    id: 'monsterapi',
    name: 'MonsterAPI',
    description: 'Platform that provides API access to leading AI models for audio, image, and video generation',
    url: 'https://monsterapi.ai',
    category: 'ai-programming',
    tags: ['api', 'multimodal', 'generation'],
    isNew: true
  },
  {
    id: 'dreamstudio',
    name: 'DreamStudio',
    description: 'Stability AI\'s platform for creating images with Stable Diffusion and other generative models',
    url: 'https://dreamstudio.ai',
    category: 'ai-painting',
    tags: ['image-generation', 'stability-ai', 'interface'],
    isNew: true
  },
  {
    id: 'chatpdf',
    name: 'ChatPDF',
    description: 'AI tool that allows users to chat with and ask questions about PDF documents',
    url: 'https://www.chatpdf.com',
    category: 'ai-office',
    tags: ['pdf', 'document-chat', 'information-extraction'],
    isNew: true
  },
  {
    id: 'scholarai',
    name: 'ScholarAI',
    description: 'Research assistant that helps analyze scientific papers and extract insights',
    url: 'https://scholarai.io',
    category: 'ai-office',
    tags: ['research', 'science', 'papers'],
    isNew: true
  },
  {
    id: 'glean',
    name: 'Glean',
    description: 'AI-powered enterprise search tool that provides unified search across company content',
    url: 'https://www.glean.com',
    category: 'ai-office',
    tags: ['enterprise-search', 'workplace', 'knowledge-management'],
    isNew: true
  },
  {
    id: 'mem',
    name: 'Mem',
    description: 'AI-driven workspace that automatically organizes notes and leverages knowledge to create content',
    url: 'https://mem.ai',
    category: 'ai-office',
    tags: ['workspace', 'organization', 'knowledge'],
    isNew: true
  },
  {
    id: 'bardeen',
    name: 'Bardeen',
    description: 'AI automation tool that connects apps and automates repetitive tasks with natural language',
    url: 'https://www.bardeen.ai',
    category: 'ai-office',
    tags: ['automation', 'workflow', 'productivity'],
    isNew: true
  },
  {
    id: 'clip-drop',
    name: 'ClipDrop',
    description: 'Suite of creative tools powered by AI for image editing, generation, and enhancement',
    url: 'https://clipdrop.co',
    category: 'ai-painting',
    tags: ['editing', 'enhancement', 'background-removal'],
    isNew: true
  },
  {
    id: 'recraft',
    name: 'Recraft',
    description: 'AI design tool that helps create and iterate on vector graphics and icons',
    url: 'https://www.recraft.ai',
    category: 'ai-design',
    tags: ['vector', 'icons', 'illustration'],
    isNew: true
  },
  {
    id: 'scenario',
    name: 'Scenario',
    description: 'AI art generation platform specialized for creating game assets and concept art',
    url: 'https://www.scenario.com',
    category: 'ai-painting',
    tags: ['game-assets', 'concept-art', 'gaming'],
    isNew: true
  },
  {
    id: 'kittl',
    name: 'Kittl',
    description: 'Creative automation platform with AI tools for design and illustration',
    url: 'https://www.kittl.com',
    category: 'ai-design',
    tags: ['design', 'illustration', 'typography'],
    isNew: true
  },
  {
    id: 'pictory',
    name: 'Pictory',
    description: 'AI video creation platform that turns text content into videos with visuals and voiceovers',
    url: 'https://pictory.ai',
    category: 'ai-video',
    tags: ['content-repurposing', 'marketing', 'text-to-video'],
    isNew: true
  },
  {
    id: 'motion',
    name: 'Motion',
    description: 'AI-powered productivity tool that schedules meetings and tasks optimally in your calendar',
    url: 'https://www.usemotion.com',
    category: 'ai-office',
    tags: ['calendar', 'scheduling', 'time-management'],
    isNew: true
  },
  {
    id: 'humata',
    name: 'Humata',
    description: 'AI research assistant that answers questions from PDFs and documents instantly',
    url: 'https://www.humata.ai',
    category: 'ai-office',
    tags: ['document-analysis', 'research', 'question-answering'],
    isNew: true
  },
  {
    id: 'anthropic-api',
    name: 'Anthropic API',
    description: 'Developer access to Claude models for building AI applications with strong safety characteristics',
    url: 'https://www.anthropic.com/api',
    category: 'ai-programming',
    tags: ['api', 'development', 'safety'],
    isNew: true
  },
  {
    id: 'github-copilot-x',
    name: 'GitHub Copilot X',
    description: 'Enhanced version of GitHub Copilot with chat, pull request, and documentation capabilities',
    url: 'https://github.com/features/copilot-x',
    category: 'ai-programming',
    tags: ['development', 'documentation', 'code-review'],
    isNew: true
  },
  {
    id: 'jenni',
    name: 'Jenni',
    description: 'AI writing assistant designed for academic writing and research papers',
    url: 'https://jenni.ai',
    category: 'ai-writing',
    tags: ['academic', 'research', 'education'],
    isNew: true
  },
  {
    id: 'cognosys',
    name: 'Cognosys',
    description: 'AI-powered research tool that helps with literature reviews and academic writing',
    url: 'https://cognosys.ai',
    category: 'ai-writing',
    tags: ['academic', 'literature-review', 'research'],
    isNew: true
  },
  {
    id: 'wordai',
    name: 'WordAI',
    description: 'AI content rewriter that produces unique, human-quality content with one click',
    url: 'https://wordai.com',
    category: 'ai-writing',
    tags: ['rewriting', 'seo', 'content-creation'],
    isNew: true
  },
  {
    id: 'lex',
    name: 'Lex',
    description: 'AI writing assistant designed for collaborative writing and publishing',
    url: 'https://lex.page',
    category: 'ai-writing',
    tags: ['collaborative', 'publishing', 'editor'],
    isNew: true
  },
  {
    id: 'anyword',
    name: 'Anyword',
    description: 'AI copywriting platform with predictive analytics to optimize marketing content',
    url: 'https://anyword.com',
    category: 'ai-writing',
    tags: ['copywriting', 'predictive-analytics', 'marketing'],
    isNew: true
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing assistant that helps create content for blogs, emails, and social media',
    url: 'https://rytr.me',
    category: 'ai-writing',
    tags: ['content-creation', 'affordable', 'multi-purpose'],
    isNew: true
  },
  {
    id: 'scalenut',
    name: 'Scalenut',
    description: 'AI-powered SEO and content marketing platform for creating optimized content',
    url: 'https://www.scalenut.com',
    category: 'ai-writing',
    tags: ['seo', 'content-marketing', 'optimization'],
    isNew: true
  },
  {
    id: 'diffblue',
    name: 'Diffblue',
    description: 'AI-powered automated code generation for Java unit tests',
    url: 'https://www.diffblue.com',
    category: 'ai-programming',
    tags: ['java', 'unit-testing', 'code-generation'],
    isNew: true
  },
  {
    id: 'codium-ai',
    name: 'Codium AI',
    description: 'AI code testing assistant that automatically generates meaningful tests',
    url: 'https://www.codium.ai',
    category: 'ai-programming',
    tags: ['testing', 'code-quality', 'automation'],
    isNew: true
  },
  {
    id: 'blackbox-ai',
    name: 'Blackbox AI',
    description: 'AI-powered coding assistant with specialized features for code understanding and generation',
    url: 'https://www.useblackbox.io',
    category: 'ai-programming',
    tags: ['code-generation', 'code-search', 'learning'],
    isNew: true
  },
  {
    id: 'mintlify',
    name: 'Mintlify',
    description: 'AI documentation writer that generates documentation from code comments and patterns',
    url: 'https://mintlify.com',
    category: 'ai-programming',
    tags: ['documentation', 'developer-experience', 'automation'],
    isNew: true
  },
  {
    id: 'swimm',
    name: 'Swimm',
    description: 'AI-assisted documentation platform that keeps documentation synchronized with code',
    url: 'https://swimm.io',
    category: 'ai-programming',
    tags: ['documentation', 'collaboration', 'knowledge-sharing'],
    isNew: true
  },
  {
    id: 'autodev',
    name: 'AutoDev',
    description: 'AI pair programming tool that helps developers understand and improve code',
    url: 'https://autodev.ai',
    category: 'ai-programming',
    tags: ['pair-programming', 'code-improvement', 'productivity'],
    isNew: true
  },
  {
    id: 'sketch2code',
    name: 'Sketch2Code',
    description: 'Microsoft AI tool that transforms hand-drawn designs into functional HTML code',
    url: 'https://sketch2code.azurewebsites.net',
    category: 'ai-programming',
    tags: ['design-to-code', 'html', 'prototyping'],
    isNew: true
  },
  {
    id: 'safurai',
    name: 'Safurai',
    description: 'Code assistant that provides security-focused code suggestions and improvements',
    url: 'https://safurai.com',
    category: 'ai-programming',
    tags: ['security', 'code-quality', 'assistant'],
    isNew: true
  },
  {
    id: 'assemblyai',
    name: 'AssemblyAI',
    description: 'Speech-to-text API that provides accurate transcription and analysis features',
    url: 'https://www.assemblyai.com',
    category: 'ai-audio',
    tags: ['speech-to-text', 'transcription', 'api'],
    isNew: true
  },
  {
    id: 'playht-ultra',
    name: 'Play.ht Ultra',
    description: 'Advanced AI voice synthesis that creates ultra-realistic voice performances',
    url: 'https://play.ht/ultra',
    category: 'ai-audio',
    tags: ['voice-synthesis', 'realistic', 'performance'],
    isNew: true
  },
  {
    id: 'neets-ai',
    name: 'Neets.ai',
    description: 'AI voice cloning platform for creating personalized voice overs in various languages',
    url: 'https://neets.ai',
    category: 'ai-audio',
    tags: ['voice-cloning', 'multilingual', 'personalization'],
    isNew: true
  },
  {
    id: 'audiostack',
    name: 'Audiostack',
    description: 'Platform for creating custom AI voices and audio content at scale',
    url: 'https://www.audiostack.ai',
    category: 'ai-audio',
    tags: ['voice-creation', 'audio-production', 'enterprise'],
    isNew: true
  },
  {
    id: 'wav2lip',
    name: 'Wav2Lip',
    description: 'Open-source AI model that generates lip-sync videos from audio and reference face',
    url: 'https://github.com/Rudrabha/Wav2Lip',
    category: 'ai-video',
    tags: ['lip-sync', 'open-source', 'face-animation'],
    isNew: true
  },
  {
    id: 'synthesia-translators',
    name: 'Synthesia Translators',
    description: 'AI tool that translates videos into multiple languages with synchronized lip movements',
    url: 'https://www.synthesia.io/features/translators',
    category: 'ai-video',
    tags: ['video-translation', 'localization', 'multilingual'],
    isNew: true
  },
  {
    id: 'rask-ai',
    name: 'Rask AI',
    description: 'AI video localization platform that translates videos while preserving voice tone',
    url: 'https://www.rask.ai',
    category: 'ai-video',
    tags: ['localization', 'voice-preservation', 'translation'],
    isNew: true
  },
  {
    id: 'descript-ai-storyboard',
    name: 'Descript AI Storyboard',
    description: 'Creates animated storyboards from scripts using AI scene visualization',
    url: 'https://www.descript.com/storyboard',
    category: 'ai-video',
    tags: ['storyboarding', 'visualization', 'preproduction'],
    isNew: true
  },
  {
    id: 'stockimg-ai',
    name: 'Stockimg AI',
    description: 'AI stock image generator creating unique, royalty-free images for commercial use',
    url: 'https://stockimg.ai',
    category: 'ai-painting',
    tags: ['stock-images', 'commercial', 'royalty-free'],
    isNew: true
  },
  {
    id: 'lexica',
    name: 'Lexica',
    description: 'Search engine and generation platform for stable diffusion images',
    url: 'https://lexica.art',
    category: 'ai-painting',
    tags: ['search', 'stable-diffusion', 'inspiration'],
    isNew: true
  },
  {
    id: 'designify',
    name: 'Designify',
    description: 'AI design tool that transforms ordinary photos into professional product visuals',
    url: 'https://www.designify.com',
    category: 'ai-painting',
    tags: ['product-photography', 'enhancement', 'transformation'],
    isNew: true
  },
  {
    id: 'getimg-ai',
    name: 'Getimg.ai',
    description: 'Suite of AI image generation tools for creating, editing, and enhancing images',
    url: 'https://getimg.ai',
    category: 'ai-painting',
    tags: ['generation', 'editing', 'enhancement'],
    isNew: true
  },
  {
    id: 'clipdrop-relight',
    name: 'ClipDrop Relight',
    description: 'AI tool that changes the lighting of product photos with professional lighting setups',
    url: 'https://clipdrop.co/relight',
    category: 'ai-painting',
    tags: ['lighting', 'product-photography', 'editing'],
    isNew: true
  },
  {
    id: 'vizcom',
    name: 'Vizcom',
    description: 'AI design tool that transforms rough sketches into refined product renderings',
    url: 'https://www.vizcom.ai',
    category: 'ai-design',
    tags: ['sketch-to-render', 'product-design', 'visualization'],
    isNew: true
  },
  {
    id: 'magician',
    name: 'Magician',
    description: 'AI design assistant for Figma that generates icons, images, and UI elements',
    url: 'https://magician.design',
    category: 'ai-design',
    tags: ['figma', 'ui-design', 'generation'],
    isNew: true
  },
  {
    id: 'galileo-ai',
    name: 'Galileo AI',
    description: 'AI UI design tool that generates interface designs from text descriptions',
    url: 'https://www.usegalileo.ai',
    category: 'ai-design',
    tags: ['ui-design', 'generation', 'interface'],
    isNew: true
  },
  {
    id: 'ai-matrix',
    name: 'AI Matrix',
    description: 'AI design tool for creating 3D objects and environments from text prompts',
    url: 'https://matrix.ai',
    category: 'ai-design',
    tags: ['3d-generation', 'environments', 'objects'],
    isNew: true
  },
  {
    id: 'spline-ai',
    name: 'Spline AI',
    description: 'AI-powered 3D design tool for creating interactive 3D web experiences',
    url: 'https://spline.design',
    category: 'ai-design',
    tags: ['3d-design', 'interaction', 'web-experiences'],
    isNew: true
  },
  {
    id: 'looka',
    name: 'Looka',
    description: 'AI-powered logo and brand identity design platform',
    url: 'https://looka.com',
    category: 'ai-design',
    tags: ['logo', 'branding', 'identity'],
    isNew: true
  },
  {
    id: 'brandmark',
    name: 'Brandmark',
    description: 'AI logo design tool specializing in unique, vector-based logos',
    url: 'https://brandmark.io',
    category: 'ai-design',
    tags: ['logo', 'vector', 'branding'],
    isNew: true
  },
  {
    id: 'midjourney-niji',
    name: 'Midjourney Niji Mode',
    description: 'Midjourney\'s specialized mode optimized for anime and illustration styles',
    url: 'https://docs.midjourney.com/docs/niji',
    category: 'ai-painting',
    tags: ['anime', 'illustration', 'stylized'],
    isNew: true
  },
  {
    id: 'procreate-dreams',
    name: 'Procreate Dreams',
    description: 'AI-enhanced animation app for creating frame-by-frame animations with generative features',
    url: 'https://procreate.com/dreams',
    category: 'ai-video',
    tags: ['animation', 'drawing', 'creative'],
    isNew: true
  },
  {
    id: 'genmo',
    name: 'Genmo',
    description: 'Interactive AI video generation platform with real-time editing capabilities',
    url: 'https://www.genmo.ai',
    category: 'ai-video',
    tags: ['interactive', 'real-time', 'editing'],
    isNew: true
  },
  {
    id: 'prompt-engineering-institute',
    name: 'Prompt Engineering Institute',
    description: 'Platform providing education and certification in AI prompt engineering',
    url: 'https://www.promptengineering.org',
    category: 'ai-prompts',
    tags: ['education', 'certification', 'training'],
    isNew: true
  },
  {
    id: 'promptlayer',
    name: 'PromptLayer',
    description: 'Platform for logging, tracking and managing prompts for LLMs',
    url: 'https://promptlayer.com',
    category: 'ai-prompts',
    tags: ['management', 'tracking', 'organization'],
    isNew: true
  },
  {
    id: 'promptbase-marketplace',
    name: 'PromptBase Marketplace',
    description: 'Marketplace for buying and selling high-performing AI prompts',
    url: 'https://promptbase.com/marketplace',
    category: 'ai-prompts',
    tags: ['marketplace', 'selling', 'premium'],
    isNew: true
  },
  {
    id: 'promptjoy',
    name: 'PromptJoy',
    description: 'Advanced prompt engineering tool with testing and optimization features',
    url: 'https://www.promptjoy.com',
    category: 'ai-prompts',
    tags: ['optimization', 'testing', 'analytics'],
    isNew: true
  },
  {
    id: 'snackprompt',
    name: 'SnackPrompt',
    description: 'Community-driven prompt library with voting and categorization features',
    url: 'https://snackprompt.com',
    category: 'ai-prompts',
    tags: ['community', 'library', 'voting'],
    isNew: true
  },
  {
    id: 'dub-ai',
    name: 'Dub AI',
    description: 'Voice dubbing platform that preserves the original voice characteristics in translations',
    url: 'https://www.dubtechnologies.ai',
    category: 'ai-audio',
    tags: ['dubbing', 'translation', 'voice-preservation'],
    isNew: true
  },
  {
    id: 'krisp-meetings',
    name: 'Krisp Meetings',
    description: 'AI meeting assistant that records, transcribes, and summarizes meetings with noise cancellation',
    url: 'https://krisp.ai/meetings',
    category: 'ai-audio',
    tags: ['meetings', 'summaries', 'transcription'],
    isNew: true
  },
  {
    id: 'audialab',
    name: 'Audialab',
    description: 'AI audio enhancement platform for improving voice quality in recordings',
    url: 'https://www.audialab.ai',
    category: 'ai-audio',
    tags: ['audio-enhancement', 'voice-quality', 'restoration'],
    isNew: true
  },
  {
    id: 'beatoven',
    name: 'Beatoven.ai',
    description: 'AI music composition tool for creating royalty-free background music',
    url: 'https://www.beatoven.ai',
    category: 'ai-audio',
    tags: ['music-composition', 'background-music', 'customization'],
    isNew: true
  },
  {
    id: 'aiva',
    name: 'AIVA',
    description: 'AI composition assistant creating emotional film scores and game music',
    url: 'https://www.aiva.ai',
    category: 'ai-audio',
    tags: ['composition', 'soundtrack', 'emotional'],
    isNew: true
  },
  {
    id: 'riffusion',
    name: 'Riffusion',
    description: 'Stable diffusion-based AI music generation model converting text into music',
    url: 'https://www.riffusion.com',
    category: 'ai-audio',
    tags: ['music-generation', 'text-to-music', 'diffusion'],
    isNew: true
  },
  {
    id: 'soundify',
    name: 'Soundify',
    description: 'AI music generation tool providing royalty-free music for creators',
    url: 'https://soundify.ai',
    category: 'ai-audio',
    tags: ['music-generation', 'royalty-free', 'creators'],
    isNew: true
  },
  {
    id: 'harmonai',
    name: 'Harmonai',
    description: 'Open-source AI music generation community and toolset',
    url: 'https://www.harmonai.org',
    category: 'ai-audio',
    tags: ['open-source', 'community', 'music-generation'],
    isNew: true
  },
  {
    id: 'beatoven',
    name: 'Beatoven.ai',
    description: 'AI music creation platform generating unique background music matching content emotions',
    url: 'https://www.beatoven.ai',
    category: 'ai-audio',
    tags: ['background-music', 'emotional', 'content-creation'],
    isNew: true
  },
  {
    id: 'altered-studio',
    name: 'Altered Studio',
    description: 'AI voice cloning and editing platform providing professional-grade audio processing',
    url: 'https://www.altered.ai/studio',
    category: 'ai-audio',
    tags: ['voice-cloning', 'editing', 'professional'],
    isNew: true
  },
  {
    id: 'boomy',
    name: 'Boomy',
    description: 'AI music creation tool enabling anyone to create and publish original music',
    url: 'https://boomy.com',
    category: 'ai-audio',
    tags: ['music-creation', 'publishing', 'accessibility'],
    isNew: true
  },
  {
    id: 'soundful-studio',
    name: 'Soundful Studio',
    description: 'Professional-grade AI music creation platform providing high-quality music for commercial use',
    url: 'https://studio.soundful.com',
    category: 'ai-audio',
    tags: ['professional', 'commercial', 'high-quality'],
    isNew: true
  },
  {
    id: 'prompts-ai',
    name: 'Prompts AI',
    description: 'Professional prompt engineering platform optimizing AI model output quality',
    url: 'https://prompts.ai',
    category: 'ai-prompts',
    tags: ['prompt-engineering', 'optimization', 'professional'],
    isNew: true
  },
  {
    id: 'promptify',
    name: 'Promptify',
    description: 'AI prompt library and optimization tool improving generated content quality',
    url: 'https://promptify.com',
    category: 'ai-prompts',
    tags: ['library', 'optimization', 'generation'],
    isNew: true
  },
  {
    id: 'phraser',
    name: 'Phraser',
    description: 'AI prompt engineering and optimization tool focused on visual creative generation',
    url: 'https://phraser.tech',
    category: 'ai-prompts',
    tags: ['visual', 'creative', 'optimization'],
    isNew: true
  },
  {
    id: 'promptstacks',
    name: 'PromptStacks',
    description: 'Professional prompt engineering platform providing optimized prompts for different AI models',
    url: 'https://promptstacks.com',
    category: 'ai-prompts',
    tags: ['multi-model', 'professional', 'optimization'],
    isNew: true
  },
  {
    id: 'krea',
    name: 'Krea',
    description: 'AI creative search engine discovering and adapting prompts to generate images',
    url: 'https://www.krea.ai',
    category: 'ai-prompts',
    tags: ['search', 'discovery', 'adaptation'],
    isNew: true
  },
  {
    id: 'gptduck',
    name: 'GPTDuck',
    description: 'Open-source prompt library and sharing platform fostering AI prompt community collaboration',
    url: 'https://www.gptduck.com',
    category: 'ai-prompts',
    tags: ['open-source', 'community', 'collaboration'],
    isNew: true
  },
  {
    id: 'promptsource',
    name: 'PromptSource',
    description: 'Collaborative prompt engineering platform for researchers and developers',
    url: 'https://github.com/bigscience-workshop/promptsource',
    category: 'ai-prompts',
    tags: ['research', 'collaboration', 'development'],
    isNew: true
  },
  {
    id: 'creitive',
    name: 'Creitive',
    description: 'AI creative assistant providing prompt optimization for designers and marketers',
    url: 'https://creitive.ai',
    category: 'ai-prompts',
    tags: ['creative', 'marketing', 'design'],
    isNew: true
  },
  {
    id: 'voicemod',
    name: 'Voicemod AI',
    description: 'Real-time voice changing and sound effects platform with AI-generated voices',
    url: 'https://www.voicemod.net/ai-voices',
    category: 'ai-audio',
    tags: ['voice-changing', 'real-time', 'effects'],
    isNew: true
  },
  {
    id: 'excelformulabot',
    name: 'Excel Formula Bot',
    description: 'AI assistant that generates Excel formulas from natural language descriptions',
    url: 'https://excelformulabot.com',
    category: 'ai-office',
    tags: ['excel', 'formulas', 'productivity'],
    isNew: true
  },
  {
    id: 'magical',
    name: 'Magical',
    description: 'AI text expander and automation tool for speeding up repetitive typing tasks',
    url: 'https://magical.com',
    category: 'ai-office',
    tags: ['text-expansion', 'automation', 'messaging'],
    isNew: true
  },
  {
    id: 'beebee-ai',
    name: 'Beebee AI',
    description: 'AI presentation creator that builds slides from text prompts with brand guidelines',
    url: 'https://beebee.ai',
    category: 'ai-office',
    tags: ['presentations', 'slides', 'branding'],
    isNew: true
  },
  {
    id: 'usechatgpt',
    name: 'UseChat.GPT',
    description: 'Collection of specialized ChatGPT templates for different professional use cases',
    url: 'https://usechatgpt.ai',
    category: 'ai-chat',
    tags: ['templates', 'specialized', 'professional'],
    isNew: true
  },
  {
    id: 'chat-with-rtf',
    name: 'ChatWithRTF',
    description: 'AI-powered RTF (Rich Text Format) file analyzer and query answering tool',
    url: 'https://chatwithrtf.ai',
    category: 'ai-office',
    tags: ['document-analysis', 'rtf', 'question-answering'],
    isNew: true
  },
  {
    id: 'autodoc',
    name: 'AutoDoc',
    description: 'AI document generation platform that creates professional documents from templates',
    url: 'https://autodoc.ai',
    category: 'ai-office',
    tags: ['document-generation', 'templates', 'automation'],
    isNew: true
  },
  {
    id: 'superflows',
    name: 'Superflows',
    description: 'AI assistant for integrating powerful co-pilot experiences into existing products',
    url: 'https://www.superflows.ai',
    category: 'ai-programming',
    tags: ['co-pilot', 'integration', 'product-enhancement'],
    isNew: true
  },
  {
    id: 'arcwise',
    name: 'Arcwise',
    description: 'AI-powered documentation writer for software engineers that integrates with GitHub',
    url: 'https://www.arcwise.ai',
    category: 'ai-programming',
    tags: ['documentation', 'github', 'integration'],
    isNew: true
  },
  {
    id: 'neural-love',
    name: 'Neural.Love',
    description: 'AI art generator and image enhancer with advanced enhancement features',
    url: 'https://neural.love',
    category: 'ai-painting',
    tags: ['art-generation', 'enhancement', 'upscaling'],
    isNew: true
  },
  {
    id: 'waldo-photos',
    name: 'Waldo Photos',
    description: 'AI-powered photo discovery platform that finds photos containing specific people',
    url: 'https://waldophotos.com',
    category: 'ai-painting',
    tags: ['facial-recognition', 'photo-discovery', 'organization'],
    isNew: true
  },
  {
    id: 'jitter',
    name: 'Jitter',
    description: 'AI animation tool that brings designs to life with customizable motion',
    url: 'https://jitter.video',
    category: 'ai-video',
    tags: ['animation', 'motion-design', 'design'],
    isNew: true
  },
  {
    id: 'leia-pix',
    name: 'Leia Pix',
    description: 'AI platform that converts 2D images into 3D lightfield images and animations',
    url: 'https://www.leiapix.com',
    category: 'ai-painting',
    tags: ['3d-conversion', 'lightfield', 'animation'],
    isNew: true
  },
  {
    id: 'clipchamp',
    name: 'Clipchamp',
    description: 'Microsoft\'s AI-powered video editor with text-based editing and automatic enhancements',
    url: 'https://clipchamp.com',
    category: 'ai-video',
    tags: ['video-editing', 'text-based', 'microsoft'],
    isNew: true
  },
  {
    id: 'flim',
    name: 'Flim',
    description: 'AI video editing app that creates professional quality videos from media and text',
    url: 'https://flim.ai',
    category: 'ai-video',
    tags: ['video-editing', 'mobile', 'professional'],
    isNew: true
  },
  {
    id: 'luma-labs-dreamgaussian',
    name: 'DreamGaussian',
    description: 'Luma Labs\' 3D model generation technology that creates 3D assets from text or images',
    url: 'https://lumalabs.ai/dreamgaussian',
    category: 'ai-design',
    tags: ['3d-model', 'generation', 'assets'],
    isNew: true
  },
  {
    id: 'shap-e',
    name: 'Shap-E',
    description: 'OpenAI\'s 3D object generation model for creating 3D objects from text descriptions',
    url: 'https://github.com/openai/shap-e',
    category: 'ai-design',
    tags: ['3d-generation', 'text-to-3d', 'open-source'],
    isNew: true
  },
  {
    id: 'capsule',
    name: 'Capsule',
    description: 'AI-driven video editing platform for creating social media content at scale',
    url: 'https://capsule.video',
    category: 'ai-video',
    tags: ['social-media', 'marketing', 'collaboration'],
    isNew: true
  },
  {
    id: 'kaiber-motion',
    name: 'Kaiber Motion',
    description: 'AI animation tool that transforms still images into dynamic motion videos',
    url: 'https://kaiber.ai/motion',
    category: 'ai-video',
    tags: ['animation', 'motion', 'transformation'],
    isNew: true
  },
  {
    id: 'wonder-dynamics',
    name: 'Wonder Dynamics',
    description: 'AI-powered filmmaking platform that automates CGI character animation',
    url: 'https://www.wonderdynamics.com',
    category: 'ai-video',
    tags: ['cgi', 'animation', 'filmmaking'],
    isNew: true
  },
  {
    id: 'pattern-ai',
    name: 'Pattern AI',
    description: 'AI virtual human creation platform for interactive customer experiences',
    url: 'https://pattern.ai',
    category: 'ai-digital-human',
    tags: ['virtual-human', 'customer-experience', 'interactive'],
    isNew: true
  },
  {
    id: 'ready-player-me',
    name: 'Ready Player Me',
    description: 'Cross-game avatar platform that creates 3D avatars from a single selfie',
    url: 'https://readyplayer.me',
    category: 'ai-digital-human',
    tags: ['avatars', 'gaming', 'metaverse'],
    isNew: true
  },
  {
    id: 'descript-overdub',
    name: 'Descript Overdub',
    description: 'Voice cloning technology for replacing words in audio recordings naturally',
    url: 'https://www.descript.com/overdub',
    category: 'ai-audio',
    tags: ['voice-cloning', 'editing', 'replacement'],
    isNew: true
  },
  {
    id: 'soundful',
    name: 'Soundful',
    description: 'AI music generator creating royalty-free tracks for content creators',
    url: 'https://soundful.com',
    category: 'ai-audio',
    tags: ['music-generation', 'royalty-free', 'creators'],
    isNew: true
  },
  {
    id: 'deepl-write',
    name: 'DeepL Write',
    description: 'AI writing assistant that improves text with refined phrasing and vocabulary',
    url: 'https://www.deepl.com/write',
    category: 'ai-writing',
    tags: ['writing-improvement', 'refinement', 'grammar'],
    isNew: true
  },
  {
    id: 'geneea',
    name: 'Geneea',
    description: 'AI text analytics platform for extracting insights from unstructured text data',
    url: 'https://www.geneea.com',
    category: 'ai-writing',
    tags: ['text-analytics', 'insights', 'nlp'],
    isNew: true
  },
  {
    id: 'textio',
    name: 'Textio',
    description: 'AI writing platform that creates inclusive, effective job descriptions and communications',
    url: 'https://textio.com',
    category: 'ai-writing',
    tags: ['inclusive-language', 'hr', 'communications'],
    isNew: true
  },
  {
    id: 'anthropic-business',
    name: 'Anthropic Business',
    description: 'Enterprise plan for Claude AI with enhanced security and larger context windows',
    url: 'https://www.anthropic.com/business',
    category: 'ai-chat',
    tags: ['enterprise', 'security', 'claude'],
    isNew: true
  },
  {
    id: 'moveworks',
    name: 'Moveworks',
    description: 'AI platform for IT support and employee service automation',
    url: 'https://www.moveworks.com',
    category: 'ai-chat',
    tags: ['it-support', 'automation', 'enterprise'],
    isNew: true
  },
  {
    id: 'chatgpt-enterprise',
    name: 'ChatGPT Enterprise',
    description: 'Enterprise version of ChatGPT with enhanced security, longer context, and data analysis',
    url: 'https://openai.com/enterprise',
    category: 'ai-chat',
    tags: ['enterprise', 'security', 'data-analysis'],
    isNew: true
  },
  {
    id: 'drift-fastlane',
    name: 'Drift Fastlane',
    description: 'AI-powered conversational marketing platform for qualifying leads in real-time',
    url: 'https://www.drift.com/fastlane',
    category: 'ai-chat',
    tags: ['lead-qualification', 'marketing', 'sales'],
    isNew: true
  },
  {
    id: 'forethought',
    name: 'Forethought',
    description: 'AI customer support platform that resolves tickets automatically and assists agents',
    url: 'https://forethought.ai',
    category: 'ai-chat',
    tags: ['customer-support', 'ticket-resolution', 'agent-assistance'],
    isNew: true
  },
  {
    id: 'ada-ai',
    name: 'Ada AI',
    description: 'AI customer service automation platform that creates personalized experiences',
    url: 'https://www.ada.cx',
    category: 'ai-chat',
    tags: ['customer-service', 'automation', 'personalization'],
    isNew: true
  },
  {
    id: 'kore-ai',
    name: 'Kore.ai',
    description: 'Enterprise conversational AI platform for building virtual assistants and chatbots',
    url: 'https://kore.ai',
    category: 'ai-chat',
    tags: ['enterprise', 'virtual-assistants', 'chatbots'],
    isNew: true
  },
  {
    id: 'mindverse',
    name: 'Mindverse',
    description: 'AI platform for creating and deploying specialized AI agents for specific tasks',
    url: 'https://www.mindverse.ai',
    category: 'ai-chat',
    tags: ['ai-agents', 'specialized', 'deployment'],
    isNew: true
  },
  {
    id: 'inflection-pi',
    name: 'Inflection Pi 2',
    description: 'Advanced conversational AI designed for personal, helpful, and harmless interactions',
    url: 'https://inflection.ai/pi',
    category: 'ai-chat',
    tags: ['personal-assistant', 'conversational', 'helpful'],
    isNew: true
  },
  {
    id: 'chatling',
    name: 'Chatling',
    description: 'Platform for creating custom chatbots and virtual assistants without coding',
    url: 'https://chatling.ai',
    category: 'ai-chat',
    tags: ['chatbot-builder', 'no-code', 'customization'],
    isNew: true
  },
  {
    id: 'langchain',
    name: 'LangChain',
    description: 'Framework for developing applications powered by language models with external integrations',
    url: 'https://www.langchain.com',
    category: 'ai-programming',
    tags: ['framework', 'llm', 'development'],
    isNew: true
  },
  {
    id: 'autogpt',
    name: 'AutoGPT',
    description: 'Open-source AI agent that autonomously completes tasks using GPT-4',
    url: 'https://github.com/Significant-Gravitas/AutoGPT',
    category: 'ai-programming',
    tags: ['ai-agent', 'autonomous', 'task-completion'],
    isNew: true
  },
  {
    id: 'llamaindex',
    name: 'LlamaIndex',
    description: 'Data framework for building LLM applications over custom data sources',
    url: 'https://www.llamaindex.ai',
    category: 'ai-programming',
    tags: ['data-framework', 'custom-data', 'llm-applications'],
    isNew: true
  },
  {
    id: 'openai-devday',
    name: 'OpenAI DevDay Models',
    description: 'Latest AI models announced at OpenAI DevDay including GPT-4 Turbo and Vision capabilities',
    url: 'https://openai.com/blog/new-models-and-developer-products-announced-at-devday',
    category: 'ai-programming',
    tags: ['gpt-4-turbo', 'vision', 'development'],
    isNew: true
  },
  {
    id: 'luma-generate',
    name: 'Luma Generate',
    description: 'AI-powered 3D model generation from text prompts for game and XR developers',
    url: 'https://lumalabs.ai/generate',
    category: 'ai-design',
    tags: ['3d-generation', 'game-development', 'xr'],
    isNew: true
  },
  {
    id: 'hotpot-ai-art-generator',
    name: 'Hotpot AI Art Generator',
    description: 'AI art creation tool with design templates and technical optimization for app visuals',
    url: 'https://hotpot.ai/art-generator',
    category: 'ai-painting',
    tags: ['app-visuals', 'technical', 'design-templates'],
    isNew: true
  },
  {
    id: 'microsoft-designer',
    name: 'Microsoft Designer',
    description: 'AI design app that creates high-quality graphics from text prompts',
    url: 'https://designer.microsoft.com',
    category: 'ai-design',
    tags: ['graphics', 'microsoft', 'text-to-image'],
    isNew: true
  },
  {
    id: 'animeai',
    name: 'AnimeAI',
    description: 'Specialized AI art generator for creating anime-style illustrations and characters',
    url: 'https://animeai.app',
    category: 'ai-painting',
    tags: ['anime', 'illustration', 'characters'],
    isNew: true
  },
  {
    id: 'playform',
    name: 'Playform',
    description: 'AI creative assistant for creating unique illustrations and visual concepts',
    url: 'https://www.playform.io',
    category: 'ai-painting',
    tags: ['illustration', 'concept-art', 'creative'],
    isNew: true
  },
  {
    id: 'gemini-pro-vision',
    name: 'Gemini Pro Vision',
    description: 'Google\'s multimodal AI model with advanced vision capabilities for image understanding',
    url: 'https://deepmind.google/technologies/gemini',
    category: 'ai-chat',
    tags: ['multimodal', 'vision', 'google'],
    isNew: true
  },
  {
    id: 'moonvalley',
    name: 'MoonValley',
    description: 'AI platform for creating realistic 3D landscapes and environments from text',
    url: 'https://moonvalley.ai',
    category: 'ai-design',
    tags: ['landscapes', '3d-environments', 'realistic'],
    isNew: true
  },
  {
    id: 'nijijourney',
    name: 'NijiJourney',
    description: 'Specialized AI image generation for anime and manga art styles',
    url: 'https://nijijourney.com',
    category: 'ai-painting',
    tags: ['anime', 'manga', 'stylized'],
    isNew: true
  },
  {
    id: 'stability-ai-api',
    name: 'Stability AI API',
    description: 'Developer access to Stability AI\'s image, language, and audio generation models',
    url: 'https://stability.ai/api',
    category: 'ai-programming',
    tags: ['api', 'multimodal', 'developer'],
    isNew: true
  },
  {
    id: 'runway-research',
    name: 'Runway Research',
    description: 'Advanced AI research lab developing next-generation visual media tools',
    url: 'https://research.runwayml.com',
    category: 'ai-video',
    tags: ['research', 'visual-media', 'cutting-edge'],
    isNew: true
  },
  {
    id: 'openassistant',
    name: 'OpenAssistant',
    description: 'Open-source conversational AI assistant that is fully transparent and accessible',
    url: 'https://open-assistant.io',
    category: 'ai-chat',
    tags: ['open-source', 'transparent', 'accessible'],
    isNew: true
  },
  {
    id: 'vapi-ai',
    name: 'Vapi AI',
    description: 'Voice API for building AI voice agents that conduct natural phone conversations',
    url: 'https://www.vapi.ai',
    category: 'ai-audio',
    tags: ['voice-api', 'phone', 'conversations'],
    isNew: true
  },
  {
    id: 'kaedim',
    name: 'Kaedim',
    description: 'AI tool that transforms 2D images into detailed 3D models',
    url: 'https://www.kaedim3d.com',
    category: 'ai-design',
    tags: ['2d-to-3d', 'models', 'transformation'],
    isNew: true
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    description: 'Anthropic\'s latest AI model with enhanced reasoning capabilities and multimodal understanding',
    url: 'https://www.anthropic.com/claude',
    category: 'ai-chat',
    tags: ['reasoning', 'multimodal', 'enterprise'],
    isNew: true
  },
  {
    id: 'adobe-project-sunrise',
    name: 'Adobe Project Sunrise',
    description: 'Adobe\'s generative AI image editing tool for advanced editing and content generation',
    url: 'https://www.adobe.com/products/photoshop/sunrise.html',
    category: 'ai-painting',
    tags: ['image-editing', 'professional', 'creative'],
    isNew: true
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'AI-based music creation platform that generates original music and songs',
    url: 'https://udio.com',
    category: 'ai-audio',
    tags: ['music-creation', 'composition', 'songwriting'],
    isNew: true
  },
  {
    id: 'gpt-4-turbo-2024',
    name: 'GPT-4 Turbo 2024',
    description: 'OpenAI\'s latest large language model with updated knowledge base and improved performance',
    url: 'https://openai.com/gpt-4',
    category: 'ai-chat',
    tags: ['llm', 'knowledge', 'reasoning'],
    isNew: true
  },
  {
    id: 'perplexity-labs',
    name: 'Perplexity Labs',
    description: 'Perplexity\'s AI research division developing cutting-edge search and information retrieval technologies',
    url: 'https://labs.perplexity.ai',
    category: 'ai-chat',
    tags: ['research', 'search', 'information-retrieval'],
    isNew: true
  },
  {
    id: 'stability-skybox',
    name: 'Stability Skybox',
    description: 'Stability AI\'s 360-degree panoramic image generation tool for VR and game development',
    url: 'https://stability.ai/skybox',
    category: 'ai-design',
    tags: ['panorama', 'vr', 'game-development'],
    isNew: true
  },
  {
    id: 'typeface-ai',
    name: 'Typeface AI',
    description: 'Enterprise-grade generative AI platform for creating and managing brand content',
    url: 'https://www.typeface.ai',
    category: 'ai-writing',
    tags: ['enterprise', 'brand', 'content-creation'],
    isNew: true
  },
  {
    id: 'ideogram-ai',
    name: 'Ideogram AI',
    description: 'AI image generation tool focused on precise text rendering and typography',
    url: 'https://ideogram.ai',
    category: 'ai-painting',
    tags: ['text-rendering', 'typography', 'design'],
    isNew: true
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    description: 'AI generation tool for creating high-quality 3D objects and scenes',
    url: 'https://lumalabs.ai/dream-machine',
    category: 'ai-design',
    tags: ['3d-generation', 'objects', 'scenes'],
    isNew: true
  },
  {
    id: 'meta-llama-3-405b',
    name: 'Meta Llama 3 405B',
    description: 'Meta\'s largest open-source language model with 405 billion parameters',
    url: 'https://llama.meta.com',
    category: 'ai-programming',
    tags: ['open-source', 'llm', 'large-parameter'],
    isNew: true
  },
  {
    id: 'deepmind-gemma',
    name: 'DeepMind Gemma',
    description: 'Google DeepMind\'s open-source, lightweight language model',
    url: 'https://blog.google/technology/ai/google-gemma-open-model/',
    category: 'ai-programming',
    tags: ['open-source', 'lightweight', 'accessible'],
    isNew: true
  },
  {
    id: 'antrhopic-sonnet',
    name: 'Anthropic Sonnet',
    description: 'Anthropic\'s AI assistant optimized for enterprise applications with reliability and safety',
    url: 'https://www.anthropic.com/claude/sonnet',
    category: 'ai-chat',
    tags: ['enterprise', 'reliability', 'safety'],
    isNew: true
  },
  {
    id: 'nvidia-ace',
    name: 'NVIDIA ACE',
    description: 'NVIDIA\'s AI character creation platform for games and interactive experiences',
    url: 'https://www.nvidia.com/en-us/technologies/ace/',
    category: 'ai-digital-human',
    tags: ['game-characters', 'interactive', 'npc'],
    isNew: true
  },
  {
    id: 'versy',
    name: 'Versy',
    description: 'Professional AI video generation platform providing high-quality advertising and marketing videos',
    url: 'https://www.versy.ai',
    category: 'ai-video',
    tags: ['marketing', 'advertising', 'professional'],
    isNew: true
  },
  {
    id: 'meta-seamless',
    name: 'Meta SeamlessM4T',
    description: 'Meta\'s multilingual, multimodal translation system supporting 100+ languages',
    url: 'https://about.fb.com/news/2023/08/seamless-ai-translation-and-communication/',
    category: 'ai-audio',
    tags: ['translation', 'multilingual', 'speech'],
    isNew: true
  },
  {
    id: 'autodev',
    name: 'AutoDev',
    description: 'AI platform for automated software development that understands entire codebases and generates complete features',
    url: 'https://autodev.ai',
    category: 'ai-programming',
    tags: ['software-development', 'automation', 'code-generation'],
    isNew: true
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    description: 'High-performance vector database designed for AI and similarity search applications',
    url: 'https://qdrant.tech',
    category: 'ai-programming',
    tags: ['vector-database', 'similarity-search', 'embeddings'],
    isNew: true
  },
  {
    id: 'airy',
    name: 'Airy',
    description: 'Automatically converts websites or applications into AI-driven natural language interfaces',
    url: 'https://airy.co',
    category: 'ai-programming',
    tags: ['interface', 'conversion', 'natural-language'],
    isNew: true
  },
  {
    id: 'seaplane',
    name: 'Seaplane',
    description: 'Global distributed AI infrastructure making model deployment and scaling simpler',
    url: 'https://www.seaplane.io',
    category: 'ai-programming',
    tags: ['infrastructure', 'deployment', 'scaling'],
    isNew: true
  },
  {
    id: 'devin-ai',
    name: 'Devin AI',
    description: 'The first fully autonomous AI software engineer that can design, build, and deploy software',
    url: 'https://www.cognition.ai',
    category: 'ai-programming',
    tags: ['autonomous', 'software-engineer', 'development'],
    isNew: true
  },
  {
    id: 'bitable',
    name: 'Bitable',
    description: 'AI-based low-code database platform focused on team collaboration and workflow automation',
    url: 'https://www.bitable.com',
    category: 'ai-office',
    tags: ['database', 'low-code', 'collaboration'],
    isNew: true
  },
  {
    id: 'claude-instant',
    name: 'Claude Instant',
    description: 'Anthropic\'s lightweight, responsive AI assistant version',
    url: 'https://www.anthropic.com/claude/instant',
    category: 'ai-chat',
    tags: ['fast', 'lightweight', 'cost-effective'],
    isNew: true
  },
  {
    id: 'reflect',
    name: 'Reflect',
    description: 'AI-powered note-taking and thinking tool that helps users organize ideas and discover connections',
    url: 'https://reflect.app',
    category: 'ai-office',
    tags: ['notes', 'productivity', 'knowledge-management'],
    isNew: true
  },
  {
    id: 'upscayl',
    name: 'Upscayl',
    description: 'Open-source AI image upscaling tool that improves image quality without cloud services',
    url: 'https://www.upscayl.org',
    category: 'ai-painting',
    tags: ['upscaling', 'enhancement', 'open-source'],
    isNew: true
  },
  {
    id: 'coqui-ai',
    name: 'Coqui AI',
    description: 'Advanced speech synthesis technology that creates natural, expressive AI voices',
    url: 'https://coqui.ai',
    category: 'ai-audio',
    tags: ['speech-synthesis', 'voice-cloning', 'emotional'],
    isNew: true
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    description: 'AI video editing tool that automatically identifies and extracts the most engaging clips from videos',
    url: 'https://www.opus.pro/clip',
    category: 'ai-video',
    tags: ['video-editing', 'highlights', 'automation'],
    isNew: true
  },
  {
    id: 'munch',
    name: 'Munch',
    description: 'AI-powered tool that automatically converts long videos into short-form content for social media',
    url: 'https://www.getmunch.com',
    category: 'ai-video',
    tags: ['short-form', 'social-media', 'repurposing'],
    isNew: true
  },
  {
    id: 'alicent',
    name: 'Alicent',
    description: 'AI video analysis and enhancement tool that automatically improves video quality and narrative structure',
    url: 'https://www.alicent.ai',
    category: 'ai-video',
    tags: ['analysis', 'enhancement', 'storytelling'],
    isNew: true
  },
  {
    id: 'lindy',
    name: 'Lindy',
    description: 'AI reading assistant that summarizes web pages and long documents, extracting key information',
    url: 'https://www.lindy.ai',
    category: 'ai-office',
    tags: ['reading', 'summarization', 'knowledge'],
    isNew: true
  },
  {
    id: 'humata',
    name: 'Humata',
    description: 'AI document analysis tool that allows users to ask questions about any PDF and get instant answers',
    url: 'https://www.humata.ai',
    category: 'ai-office',
    tags: ['pdf', 'document-analysis', 'qa'],
    isNew: true
  },
  {
    id: 'glasp',
    name: 'Glasp',
    description: 'Social AI highlighting tool for collecting and sharing insights from across the web',
    url: 'https://glasp.co',
    category: 'ai-office',
    tags: ['highlighting', 'notes', 'social'],
    isNew: true
  },
  {
    id: 'opus-voice-ai',
    name: 'Opus Voice AI',
    description: 'Advanced AI voiceover solution that generates natural, emotionally expressive human voices',
    url: 'https://www.opus.pro/voice',
    category: 'ai-audio',
    tags: ['voice-over', 'narration', 'emotional'],
    isNew: true
  },
  {
    id: 'metahuman',
    name: 'MetaHuman',
    description: 'Epic Games\' high-fidelity digital human creation platform',
    url: 'https://www.unrealengine.com/en-US/metahuman',
    category: 'ai-digital-human',
    tags: ['photorealistic', 'game-development', 'animation'],
    isNew: true
  },
  {
    id: 'd-id-studio',
    name: 'D-ID Studio',
    description: 'Digital human video creation platform that transforms static images into talking avatars',
    url: 'https://www.d-id.com/creative-reality-studio/',
    category: 'ai-digital-human',
    tags: ['talking-avatar', 'video-creation', 'presentations'],
    isNew: true
  },
  {
    id: 'synthesia-avatar',
    name: 'Synthesia AVATAR',
    description: 'Professional AI video avatar platform supporting multilingual content creation',
    url: 'https://www.synthesia.io/avatar',
    category: 'ai-digital-human',
    tags: ['multilingual', 'video-production', 'professional'],
    isNew: true
  },
  {
    id: 'sora-api',
    name: 'Sora API',
    description: 'OpenAI\'s text-to-video API enabling developers to integrate advanced video generation capabilities',
    url: 'https://openai.com/sora',
    category: 'ai-video',
    tags: ['api', 'developer', 'integration'],
    isNew: true
  },
  {
    id: 'eleven-multilingual',
    name: 'ElevenLabs Multilingual',
    description: 'ElevenLabs\' multilingual speech synthesis platform supporting 30+ languages',
    url: 'https://elevenlabs.io/multilingual',
    category: 'ai-audio',
    tags: ['multilingual', 'speech-synthesis', 'global'],
    isNew: true
  },
  {
    id: 'pictory',
    name: 'Pictory',
    description: 'AI video creation platform that automatically converts long-form content into short videos',
    url: 'https://pictory.ai',
    category: 'ai-video',
    tags: ['content-repurposing', 'automation', 'marketing'],
    isNew: true
  },
  {
    id: 'tavus',
    name: 'Tavus',
    description: 'Personalized AI video platform that automatically customizes video content for each viewer',
    url: 'https://www.tavus.io',
    category: 'ai-video',
    tags: ['personalization', 'sales', 'outreach'],
    isNew: true
  },
  {
    id: 'runway-gen-3',
    name: 'Runway Gen-3',
    description: 'Runway\'s third-generation AI video generation model offering higher quality and creative control',
    url: 'https://runwayml.com/gen-3',
    category: 'ai-video',
    tags: ['high-quality', 'creative-control', 'generation'],
    isNew: true
  },
  {
    id: 'lumen5',
    name: 'Lumen5',
    description: 'AI video creation platform focused on converting blogs and articles into marketing videos',
    url: 'https://lumen5.com',
    category: 'ai-video',
    tags: ['marketing', 'content-repurposing', 'social-media'],
    isNew: true
  },
  {
    id: 'deepbrain-ai',
    name: 'DeepBrain AI',
    description: 'AI video synthesis platform creating realistic virtual humans for presentations and demonstrations',
    url: 'https://www.deepbrain.io',
    category: 'ai-digital-human',
    tags: ['video-synthesis', 'presentations', 'corporate'],
    isNew: true
  },
  {
    id: 'wonder-dynamics',
    name: 'Wonder Dynamics',
    description: 'AI animation and visual effects tools for filmmakers and content creators',
    url: 'https://www.wonderdynamics.com',
    category: 'ai-video',
    tags: ['animation', 'visual-effects', 'filmmaking'],
    isNew: true
  },
  {
    id: 'voicemod-ai',
    name: 'Voicemod AI',
    description: 'AI voice changer and sound effect generator for gaming and content creation',
    url: 'https://www.voicemod.net/ai-voices',
    category: 'ai-audio',
    tags: ['voice-changer', 'gaming', 'content-creation'],
    isNew: true
  },
  {
    id: 'stability-image-to-video',
    name: 'Stability Image to Video',
    description: 'Stability AI\'s tool for converting static images into dynamic videos',
    url: 'https://stability.ai/news/stable-video-image-to-video-generation',
    category: 'ai-video',
    tags: ['image-to-video', 'animation', 'motion'],
    isNew: true
  },
  {
    id: 'glimmer-ai',
    name: 'Glimmer AI',
    description: 'AI short video creation tool optimized for social media content',
    url: 'https://www.glimmerai.tech',
    category: 'ai-video',
    tags: ['short-form', 'social-media', 'trends'],
    isNew: true
  },
  {
    id: 'elai-presenter',
    name: 'Elai Presenter',
    description: 'AI-driven presentation video creation tool requiring no camera equipment',
    url: 'https://elai.io/ai-presenter',
    category: 'ai-digital-human',
    tags: ['presentations', 'business', 'education'],
    isNew: true
  },
  {
    id: 'rask-ai',
    name: 'Rask AI',
    description: 'AI video translation and dubbing platform supporting multilingual content localization',
    url: 'https://www.rask.ai',
    category: 'ai-video',
    tags: ['translation', 'dubbing', 'localization'],
    isNew: true
  },
  {
    id: 'vidyo-ai',
    name: 'Vidyo AI',
    description: 'Automatically edits long videos into short-form content for social media',
    url: 'https://vidyo.ai',
    category: 'ai-video',
    tags: ['repurposing', 'short-form', 'automation'],
    isNew: true
  },
  {
    id: 'steve-ai',
    name: 'Steve AI',
    description: 'AI video production platform that automatically creates animated videos from text scripts',
    url: 'https://www.steve.ai',
    category: 'ai-video',
    tags: ['animation', 'marketing', 'explainer'],
    isNew: true
  },
  {
    id: 'wizville',
    name: 'Wizville',
    description: 'AI-generated product demonstration video tool for e-commerce and brands',
    url: 'https://www.wizville.com',
    category: 'ai-video',
    tags: ['product-demo', 'e-commerce', 'marketing'],
    isNew: true
  },
  {
    id: 'leia-ai',
    name: 'Leia AI',
    description: '3D content creation platform that converts 2D images into immersive 3D experiences',
    url: 'https://www.leiainc.com',
    category: 'ai-design',
    tags: ['3d-conversion', 'immersive', 'lightfield'],
    isNew: true
  },
  {
    id: 'scenario',
    name: 'Scenario',
    description: 'AI game asset generation tool creating unique content for game developers',
    url: 'https://www.scenario.com',
    category: 'ai-design',
    tags: ['game-assets', 'development', 'textures'],
    isNew: true
  },
  {
    id: 'masterpiece-studio',
    name: 'Masterpiece Studio',
    description: 'AI-driven 3D creation platform simplifying 3D modeling and animation processes',
    url: 'https://masterpiecestudio.com',
    category: 'ai-design',
    tags: ['3d-modeling', 'animation', 'creation'],
    isNew: true
  },
  {
    id: 'spline-ai',
    name: 'Spline AI',
    description: 'AI-based 3D design tool creating complex 3D scenes from simple prompts',
    url: 'https://spline.design',
    category: 'ai-design',
    tags: ['3d-design', 'interactive', 'web3d'],
    isNew: true
  },
  {
    id: 'rive-ai',
    name: 'Rive AI',
    description: 'Interactive animation design tool using AI to simplify the creation process',
    url: 'https://rive.app',
    category: 'ai-design',
    tags: ['animation', 'interactive', 'design'],
    isNew: true
  },
  {
    id: 'magician-figma',
    name: 'Magician for Figma',
    description: 'Figma\'s AI design assistant generating and editing design elements through text prompts',
    url: 'https://magician.design',
    category: 'ai-design',
    tags: ['figma', 'plugin', 'design-assistant'],
    isNew: true
  },
  {
    id: 'diagram',
    name: 'Diagram',
    description: 'AI design and prototyping tool built for product designers',
    url: 'https://diagram.com',
    category: 'ai-design',
    tags: ['product-design', 'prototyping', 'ui-ux'],
    isNew: true
  },
  {
    id: 'galileo-ai',
    name: 'Galileo AI',
    description: 'AI interface design tool generating complete UI designs from descriptions',
    url: 'https://www.usegalileo.ai',
    category: 'ai-design',
    tags: ['ui-design', 'interface', 'generation'],
    isNew: true
  },
  {
    id: 'mokker',
    name: 'Mokker',
    description: 'AI product visualization image generator creating professional-grade e-commerce visual content',
    url: 'https://mokker.ai',
    category: 'ai-design',
    tags: ['product-photography', 'e-commerce', 'visualization'],
    isNew: true
  },
  {
    id: 'aoi',
    name: 'AOI',
    description: 'AI-driven image editing tool designed specifically for optimizing e-commerce product images',
    url: 'https://www.aoi.ai',
    category: 'ai-painting',
    tags: ['e-commerce', 'product-photography', 'editing'],
    isNew: true
  },
  {
    id: 'khroma',
    name: 'Khroma',
    description: 'AI color tool that learns user preferences to generate personalized color combinations',
    url: 'https://www.khroma.co',
    category: 'ai-design',
    tags: ['color', 'palettes', 'personalization'],
  }
]; 