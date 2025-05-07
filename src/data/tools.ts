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
    description: '开源的AI图像生成模型，可以本地部署或通过云服务使用',
    url: 'https://stability.ai',
    category: 'ai-painting',
    tags: ['image-generation', 'open-source', 'local-deployment'],
    isNew: true
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.AI',
    description: '专业的AI创意工具，为创作者和企业生成高质量的视觉内容',
    url: 'https://leonardo.ai',
    category: 'ai-painting',
    tags: ['image-generation', 'creative', 'commercial']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Adobe开发的生成式AI创意工具，无缝集成到Creative Cloud应用中',
    url: 'https://firefly.adobe.com',
    category: 'ai-painting',
    tags: ['image-editing', 'creative', 'professional']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic开发的AI助手，擅长自然对话和长文本处理',
    url: 'https://claude.ai',
    category: 'ai-chat',
    tags: ['chat', 'reasoning', 'document-analysis'],
    isNew: true
  },
  {
    id: 'bard',
    name: 'Google Gemini',
    description: 'Google的AI助手，结合了搜索能力和多模态理解',
    url: 'https://gemini.google.com',
    category: 'ai-chat',
    tags: ['chat', 'multimodal', 'search']
  },
  {
    id: 'pi',
    name: 'Pi',
    description: 'Inflection AI开发的个人AI助手，注重个性化和情感化交流',
    url: 'https://pi.ai',
    category: 'ai-chat',
    tags: ['personal-assistant', 'emotional-intelligence', 'conversation']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: '基于AI的代码编辑器，提供智能代码建议和自动完成功能',
    url: 'https://cursor.sh',
    category: 'ai-programming',
    tags: ['code-editor', 'autocomplete', 'development'],
    isNew: true
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: '免费的AI编码助手，支持多种IDE和编程语言',
    url: 'https://codeium.com',
    category: 'ai-programming',
    tags: ['coding', 'autocomplete', 'free']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI代码助手，提供智能代码补全和建议，支持私有代码库学习',
    url: 'https://www.tabnine.com',
    category: 'ai-programming',
    tags: ['code-completion', 'privacy', 'development']
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: '微软推出的AI助手，集成在Office应用中提升工作效率',
    url: 'https://copilot.microsoft.com',
    category: 'ai-office',
    tags: ['office', 'productivity', 'microsoft'],
    isNew: true
  },
  {
    id: 'tome',
    name: 'Tome',
    description: 'AI驱动的演示文稿创建工具，可生成精美的幻灯片和叙事内容',
    url: 'https://tome.app',
    category: 'ai-office',
    tags: ['presentations', 'storytelling', 'design']
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: '智能演示工具，使用AI帮助创建专业级设计的幻灯片',
    url: 'https://www.beautiful.ai',
    category: 'ai-office',
    tags: ['presentations', 'design', 'templates']
  },
  {
    id: 'mubert',
    name: 'Mubert',
    description: 'AI音乐生成平台，为创作者和企业提供免版税音乐资源',
    url: 'https://mubert.com',
    category: 'ai-audio',
    tags: ['music-generation', 'royalty-free', 'soundtrack'],
    isNew: true
  },
  {
    id: 'descript',
    name: 'Descript',
    description: '一体化音频和视频编辑平台，提供转录、编辑和AI声音克隆功能',
    url: 'https://www.descript.com',
    category: 'ai-audio',
    tags: ['audio-editing', 'transcription', 'voice-cloning']
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    description: '高级AI语音生成和克隆工具，适用于商业和创意应用',
    url: 'https://www.resemble.ai',
    category: 'ai-audio',
    tags: ['voice-cloning', 'text-to-speech', 'localization']
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    description: '从文本提示和图像生成高质量视频内容的AI工具',
    url: 'https://pika.art',
    category: 'ai-video',
    tags: ['video-generation', 'text-to-video', 'editing'],
    isNew: true
  },
  {
    id: 'runway-gen2',
    name: 'Runway Gen-2',
    description: '先进的文本到视频生成模型，创建高质量的视觉效果和动画',
    url: 'https://research.runwayml.com/gen2',
    category: 'ai-video',
    tags: ['text-to-video', 'visual-effects', 'animation']
  },
  {
    id: 'elai',
    name: 'Elai.io',
    description: '从文本创建AI视频讲解员，无需摄像设备或绿幕',
    url: 'https://elai.io',
    category: 'ai-video',
    tags: ['ai-presenter', 'explainer-videos', 'text-to-video']
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    description: 'Figma集成的AI设计功能，帮助设计师更快地创建和迭代设计',
    url: 'https://www.figma.com/ai',
    category: 'ai-design',
    tags: ['ui-design', 'prototyping', 'collaboration'],
    isNew: true
  },
  {
    id: 'uizard',
    name: 'Uizard',
    description: 'AI驱动的设计平台，可快速将草图转换为工作原型',
    url: 'https://uizard.io',
    category: 'ai-design',
    tags: ['wireframing', 'prototyping', 'sketch-to-design']
  },
  {
    id: 'designs-ai',
    name: 'Designs.ai',
    description: '一站式AI创意平台，提供logo设计、视频制作和图形设计工具',
    url: 'https://designs.ai',
    category: 'ai-design',
    tags: ['logo-design', 'branding', 'graphic-design']
  },
  {
    id: 'promptbase',
    name: 'PromptBase',
    description: 'AI提示词市场，买卖优质的提示词用于各种AI模型',
    url: 'https://promptbase.com',
    category: 'ai-prompts',
    tags: ['prompt-marketplace', 'optimization', 'templates'],
    isNew: true
  },
  {
    id: 'prompthero',
    name: 'PromptHero',
    description: '发现、创建和分享AI艺术提示词的社区平台',
    url: 'https://prompthero.com',
    category: 'ai-prompts',
    tags: ['prompt-community', 'ai-art', 'inspiration']
  },
  {
    id: 'promptperfect',
    name: 'PromptPerfect',
    description: 'AI提示词优化工具，帮助提高与大型语言模型的交互质量',
    url: 'https://promptperfect.jina.ai',
    category: 'ai-prompts',
    tags: ['prompt-optimization', 'llm', 'fine-tuning']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: '创建逼真的AI视频讲解员和数字分身，支持多语言',
    url: 'https://www.heygen.com',
    category: 'ai-digital-human',
    tags: ['digital-avatar', 'video-generation', 'multilingual'],
    isNew: true
  },
  {
    id: 'dscript',
    name: 'D-ID',
    description: '创建会说话的人像和数字人物的生成式AI平台',
    url: 'https://www.d-id.com',
    category: 'ai-digital-human',
    tags: ['talking-avatars', 'digital-people', 'creative-reality']
  },
  {
    id: 'hour-one',
    name: 'Hour One',
    description: '商业级AI人物生成平台，用于培训、营销和客户服务',
    url: 'https://hourone.ai',
    category: 'ai-digital-human',
    tags: ['business-avatars', 'training', 'customer-service']
  }
]; 