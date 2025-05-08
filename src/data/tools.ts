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
    description: 'AI-powered workspace that organizes information and generates insights for knowledge workers',
    url: 'https://mem.ai',
    category: 'ai-office',
    tags: ['notes', 'knowledge-management', 'organization'],
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
  }
]; 