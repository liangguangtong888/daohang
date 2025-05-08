"use client";

import { Tool } from '@/data/tools';
import { useState, useEffect } from 'react';

// 使用clearbit.com的Logo API获取公司官方LOGO
function getCompanyLogoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}

// 备用Logo API选项
function getFaviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

// 从工具URL中提取域名
function extractDomain(url: string): string {
  try {
    // 移除协议
    let domain = url.replace(/(^\w+:|^)\/\//, '');
    
    // 特殊域名处理，确保获取正确的品牌域名
    const specialDomains: Record<string, string> = {
      'chat.openai.com': 'openai.com',
      'openai.com/dall-e-2': 'openai.com',
      'openai.com/sora': 'openai.com',
      'openai.com/gpt-4o': 'openai.com',
      'openai.com/enterprise': 'openai.com',
      'openai.com/research/whisper': 'openai.com',
      'deepmind.google/technologies/gemini': 'google.com',
      'deepmind.google/technologies/gemini/': 'google.com',
      'blog.google/technology/ai/google-gemma-open-model/': 'google.com',
      'claude.ai': 'anthropic.com',
      'www.anthropic.com/claude': 'anthropic.com', 
      'github.com/features/copilot': 'github.com',
      'github.com/features/copilot-x': 'github.com',
      'stability.ai': 'stability.ai',
      'stability.ai/stable-video': 'stability.ai',
      'stability.ai/skybox': 'stability.ai',
      'stability.ai/stable-audio': 'stability.ai',
      'research.runwayml.com/gen1': 'runwayml.com',
      'research.runwayml.com/gen2': 'runwayml.com',
      'research.runwayml.com/gen-3': 'runwayml.com',
      'runwayml.com/gen-2': 'runwayml.com',
      'docs.midjourney.com/docs/niji': 'midjourney.com',
      'ai.meta.com/llama': 'meta.com',
      'llama.meta.com': 'meta.com',
      'about.fb.com/news/2023/08/seamless-ai-translation-and-communication/': 'fb.com',
      'ai21.com': 'ai21.com',
      'sdk.vercel.ai': 'vercel.ai',
      'github.com/Significant-Gravitas/AutoGPT': 'github.com',
      'github.com/Rudrabha/Wav2Lip': 'github.com',
      'github.com/openai/shap-e': 'github.com',
      'github.com/bigscience-workshop/promptsource': 'github.com',
      'www.unrealengine.com/en-US/metahuman': 'unrealengine.com',
      'huggingface.co': 'huggingface.co',
      'v0.dev': 'v0.dev',
      'aws.amazon.com/q': 'aws.amazon.com',
      'sketch2code.azurewebsites.net': 'microsoft.com',
      'www.nvidia.com/en-us/technologies/ace/': 'nvidia.com',
      // 新增工具特殊域名映射
      'grok.x.ai': 'x.ai',
      'pika.art': 'pika.art',
      'firefly.adobe.com': 'adobe.com',
      'express.adobe.com': 'adobe.com',
      'www.adobe.com/products/photoshop/sunrise.html': 'adobe.com',
      'gemini.google.com': 'google.com',
      'www.d-id.com/creative-reality-studio/': 'd-id.com',
      'd-id.com': 'd-id.com',
      'promptperfect.jina.ai': 'jina.ai',
      'www.perplexity.ai': 'perplexity.ai',
      'www.synthesia.io/studio': 'synthesia.io',
      'www.synthesia.io/avatars': 'synthesia.io',
      'www.synthesia.io/features/translators': 'synthesia.io',
      'copilot.microsoft.com': 'microsoft.com',
      'designer.microsoft.com': 'microsoft.com',
      'elevenlabs.io/multilingual': 'elevenlabs.io',
      'promptbase.com/marketplace': 'promptbase.com',
      'www.airtable.com/ai': 'airtable.com',
      'runwayml.com/gen-3': 'runwayml.com',
      'www.anthropic.com/claude/instant': 'anthropic.com',
      'www.anthropic.com/claude/sonnet': 'anthropic.com',
      'www.anthropic.com/api': 'anthropic.com',
      'www.anthropic.com/business': 'anthropic.com',
      'teachablemachine.withgoogle.com': 'google.com',
      'grammarly.com/go': 'grammarly.com',
      'www.together.ai': 'together.ai',
      'replit.com/ghostwriter': 'replit.com',
      'sourcegraph.com/cody': 'sourcegraph.com',
      'research.nvidia.com': 'nvidia.com',
      'www.veed.io/ai': 'veed.io',
      'www.notion.so/product/ai': 'notion.so',
      'www.figma.com/ai': 'figma.com',
      'lumalabs.ai/generate': 'lumalabs.ai',
      'lumalabs.ai/dream-machine': 'lumalabs.ai',
      'www.jasper.ai': 'jasper.ai',
      'clipdrop.co/relight': 'clipdrop.co',
      'play.ht/ultra': 'play.ht',
      'kaiber.ai/motion': 'kaiber.ai',
      'elai.io/ai-presenter': 'elai.io',
      'labs.perplexity.ai': 'perplexity.ai',
      // 修正特定工具的域名映射
      'gamma.app': 'gamma.app',
      'lexica.art': 'lexica.art',
      'tome.app': 'tome.app',
      'godmode.space': 'godmode.space',
      'fireflies.ai': 'fireflies.ai',
      'reflect.app': 'reflect.app',
      'uizard.io': 'uizard.io',
      'designs.ai': 'designs.ai',
      'hourone.ai': 'hourone.ai',
      'glean.com': 'glean.com',
      'mem.ai': 'mem.ai',
      'krisp.ai': 'krisp.ai',
      'notion.so': 'notion.so',
      'fliki.ai': 'fliki.ai',
      'flair.ai': 'flair.ai',
      'character.ai': 'character.ai',
      'bardeen.ai': 'bardeen.ai',
      'rask.ai': 'rask.ai',
      'otter.ai': 'otter.ai',
      'vidyo.ai': 'vidyo.ai',
      'lovo.ai': 'lovo.ai',
      'adcreative.ai': 'adcreative.ai',
      'texta.ai': 'texta.ai',
      'aoi.ai': 'aoi.ai',
      'autodev.ai': 'autodev.ai',
      'riku.ai': 'riku.ai',
      'soofy.io': 'soofy.io',
      'debuild.app': 'debuild.app',
      'alicent.ai': 'alicent.ai',
      'lindy.ai': 'lindy.ai',
      'neets.ai': 'neets.ai',
      'obvibase.com': 'obvibase.com',
      'leia.ai': 'leia.ai'
    };

    // 检查是否有特殊域名处理
    if (specialDomains[domain]) {
      return specialDomains[domain];
    }
    
    // 移除路径
    domain = domain.split('/')[0];
    
    // 提取根域名（如果有），例如从 app.example.com 中提取 example.com
    // 除非这是一个已知的服务，应该保留其子域名
    const preserveSubdomains = [
      'vercel.ai', 'github.io', 'replicate.com', 'streamlit.app', 
      'huggingface.io', 'huggingface.co', 'openai.com', 'anthropic.com'
    ];
    
    const shouldPreserveSubdomain = preserveSubdomains.some(d => domain.includes(d));
    
    if (!shouldPreserveSubdomain) {
      // 提取根域名，忽略www
      const parts = domain.split('.');
      if (parts.length > 2) {
        // 检查是否是 www 子域名
        if (parts[0] === 'www') {
          domain = parts.slice(1).join('.');
        } else {
          // 提取主域名（通常是最后两部分）
          const tld = parts[parts.length - 1];
          const sld = parts[parts.length - 2];
          
          // 检查是否有国家代码顶级域名（例如 .co.uk, .com.cn）
          const countryCodeTLDs = ['uk', 'au', 'nz', 'jp', 'cn', 'br', 'mx', 'in', 'ru', 'eu', 'fr', 'de', 'it', 'nl', 'es'];
          
          if (parts.length > 2 && tld.length === 2 && countryCodeTLDs.includes(tld)) {
            // 对于国家代码顶级域名，保留最后三部分
            domain = parts.slice(-3).join('.');
          } else {
            // 否则只保留最后两部分
            domain = `${sld}.${tld}`;
          }
        }
      }
    }
    
    return domain;
  } catch (error) {
    return '';
  }
}

// 根据工具ID获取颜色（用于备用图标）
function getToolColor(toolId: string): string {
  const colorMap: Record<string, string> = {
    'midjourney': '#0b65c6',
    'chatgpt': '#10a37f',
    'dall-e': '#ff9500',
    'github-copilot': '#6e40c9',
    'notion-ai': '#000000',
    'runway': '#bd00ff',
    'elevenlabs': '#fb516a',
    'synthesia': '#625df5',
    'copy-ai': '#4354fd',
    'jasper': '#ff7a00',
    'stable-diffusion': '#f96743',
    'leonardo-ai': '#4a72f5',
    'adobe-firefly': '#ff3366',
    'claude': '#6344df',
    'bard': '#8e44ad',
    'pi': '#ff2d55',
    // 新增工具的颜色
    'anthropic-claude-opus': '#6344df', // Anthropic 紫色
    'gpt-4o': '#10a37f', // OpenAI 绿色
    'sora': '#ff9500', // OpenAI 橙色
    'gemini-pro': '#4285f4', // Google 蓝色
    'llama-3': '#0668e1', // Meta 蓝色
    'midjourney-v6': '#0b65c6', // Midjourney 蓝色
    'perplexity-ai': '#1cbccf', // Perplexity 青色
    'kaiber': '#ff4f8b', // Kaiber 粉色
    'stability-ai': '#f96743', // Stability AI 橙色
    'huggingface': '#f9b744', // Hugging Face 黄色
    'cohere': '#2596be', // Cohere 蓝色
    'deepl': '#0f2b46', // DeepL 深蓝色
    'replicate': '#5936f0', // Replicate 紫色
    'gamma': '#ff6e40', // Gamma 橙色
    'otter': '#ff8a00', // Otter 橙色
    'fireflies': '#ff4500', // Fireflies 红色
    'soundraw': '#3a86ff', // Soundraw 蓝色
    'flair': '#ff70a6', // Flair 粉色
    'whisperapi': '#2ec27e', // OpenAI Whisper 绿色
    'langchain': '#2d81ff', // LangChain 蓝色
    'ollama': '#ff4b4b', // Ollama 红色
    'phind': '#9a7cff', // Phind 紫色
    'v0': '#000000', // v0 黑色
    'typeface': '#6236ff', // Typeface 紫色
    'grammarly-go': '#15c39a', // Grammarly 绿色
    'anthropic-claude-sonnet': '#6344df', // Anthropic 紫色
    'videoask': '#ff5722', // VideoAsk 橙色
    'caktus': '#00bcd4', // Caktus 青色
    'lexica': '#1e88e5', // Lexica 蓝色
    'civitai': '#ff9e80', // Civitai 橙色
    'aiva': '#673ab7', // AIVA 紫色
    'craiyon': '#ff9900', // Craiyon 橙色
    'play-ht': '#ff5252', // Play.ht 红色
    'together-ai': '#00796b', // Together 绿色
    'gencraft': '#ff5252', // Gencraft 红色
    'veed-ai': '#ff3d00', // VEED 红色
    'text-blaze': '#f57c00', // Text Blaze 橙色
    'poe': '#6200ea', // Poe 紫色
    // 更多工具颜色
    'khroma': '#ff6d00', // Khroma 橙色
    'humata': '#00bfa5', // Humata 青绿色
    'taskade': '#ff4081', // Taskade 粉色
    'hyperwrite': '#1976d2', // HyperWrite 蓝色
    'mem': '#4527a0', // Mem 深紫色
    'anyword': '#c2185b', // Anyword 品红色
    'gpt4all': '#5d4037', // GPT4All 棕色
    'writely': '#d50000', // Writely 红色
    'chatpdf': '#ff6f00', // ChatPDF 橙色
    'modelize': '#6200ea', // Modelize 紫色
    'llama-index': '#283593', // LlamaIndex 深蓝色
    'promptify': '#ff5722', // Promptify 橙红色
    'reflect': '#2962ff', // Reflect 蓝色
    'getimg': '#f50057', // GetIMG 粉红色
    'amper': '#7cb342', // Amper 绿色
    'synthesia-studio': '#536dfe', // Synthesia Studio 蓝紫色
    'replit-ghost': '#ff3d00', // Replit Ghost 红橙色
    'webflow-ai': '#2196f3', // Webflow AI 蓝色
    'framer-ai': '#3d5afe', // Framer AI 靛蓝色
    'arthur-ai': '#00695c', // Arthur AI 深青色
    'ezi': '#ff5252', // EZI 红色
    'moonbeam': '#283593', // Moonbeam 深蓝色
    'openai-dalle3': '#ff9800', // DALL-E 3 橙色
    'chatgpt-enterprise': '#00897b', // ChatGPT Enterprise 青绿色
    'inflection-pi': '#c2185b', // Inflection Pi 品红色
    'paperpal': '#1565c0', // Paperpal 蓝色
    'texta': '#f57c00', // Texta 橙色
    'superflow': '#0277bd', // Superflow 蓝色
    'scalenut': '#7cb342', // Scalenut 绿色
    'tldrthis': '#0097a7', // TLDR This 青色
    'notu': '#00bfa5', // Notu 青绿色
    'neuroflash': '#7b1fa2', // Neuroflash 紫色
    'frase': '#0288d1', // Frase 蓝色
    'invideo': '#d84315', // InVideo 红橙色
    'visme': '#0d47a1', // Visme 深蓝色
    'ai21': '#283593', // AI21 深蓝色
    'wix-adc': '#1976d2', // Wix ADC 蓝色
    'adept': '#00838f', // Adept 深青色
    'forefront': '#2962ff', // Forefront 蓝色
    'magai': '#4a148c', // Magai 深紫色
    'compose-ai': '#3949ab', // Compose AI 蓝色
    'riku': '#ff6f00', // Riku 橙色
    'soofy': '#0091ea', // Soofy 蓝色
    'stockimg': '#f57f17', // Stockimg 深橙色
    'debuild': '#00695c', // Debuild 深青色
    'alysia': '#6a1b9a', // Alysia 紫色
    'phraser': '#ad1457', // Phraser 粉色
    'namelix': '#ff6d00', // Namelix 橙色
    'runway-gen-3': '#c2185b', // Runway Gen-3 品红色
    'lumen5': '#0277bd', // Lumen5 蓝色
    'deepbrain-ai': '#6200ea', // DeepBrain AI 紫色
    'wonder-dynamics': '#ff3d00', // Wonder Dynamics 红橙色
    'voicemod-ai': '#f50057', // Voicemod AI 粉红色
    'stability-image-to-video': '#ff5722', // Stability Image to Video 橙红色
    'glimmer-ai': '#ff4081', // Glimmer AI 粉色
    'elai-presenter': '#7cb342', // Elai Presenter 绿色
    'vidyo-ai': '#00b0ff', // Vidyo AI 蓝色
    'steve-ai': '#e91e63', // Steve AI 粉色
    'wizville': '#ffa000', // Wizville 琥珀色
    'masterpiece-studio': '#00bfa5', // Masterpiece Studio 青绿色
    'rive-ai': '#304ffe', // Rive AI 靛蓝色
    'magician-figma': '#f50057', // Magician for Figma 粉红色
    'diagram': '#00695c', // Diagram 深青色
    'mokker': '#ff6d00', // Mokker 橙色
    'dub-ai': '#00c853', // Dub AI 绿色
    'krisp-meetings': '#0277bd', // Krisp Meetings 蓝色
    'audialab': '#2962ff', // Audialab 蓝色
    'riffusion': '#ff5252', // Riffusion 红色
    'soundify': '#304ffe', // Soundify 靛蓝色
    'harmonai': '#00bfa5', // Harmonai 青绿色
    'altered-studio': '#d50000', // Altered Studio 红色
    'boomy': '#ff3d00', // Boomy 红橙色
    'soundful-studio': '#2979ff', // Soundful Studio 蓝色
    'prompts-ai': '#7b1fa2', // Prompts AI 紫色
    'gptduck': '#ff6f00', // GPTDuck 橙色
    'promptsource': '#00c853', // PromptSource 绿色
    'creitive': '#c2185b', // Creitive 品红色
    'voicemod': '#e91e63', // Voicemod 粉色
    'excelformulabot': '#388e3c', // Excel Formula Bot 绿色
    'magical': '#3949ab', // Magical 蓝色
    'beebee-ai': '#f57c00', // Beebee AI 橙色
    'usechatgpt': '#00897b', // UseChat.GPT 青绿色
    'chat-with-rtf': '#d32f2f', // ChatWithRTF 红色
    'autodoc': '#0091ea', // AutoDoc 蓝色
    'superflows': '#2962ff', // Superflows 蓝色
    'arcwise': '#00bfa5', // Arcwise 青绿色
    'neural-love': '#ff4081', // Neural.Love 粉色
    'jitter': '#2979ff', // Jitter 蓝色
    'leia-pix': '#304ffe', // Leia Pix 靛蓝色
    'clipchamp': '#d50000', // Clipchamp 红色
    'flim': '#c2185b', // Flim 品红色
    'luma-labs-dreamgaussian': '#673ab7', // DreamGaussian 紫色
    'shap-e': '#00bcd4', // Shap-E 青色
    'capsule': '#f57c00', // Capsule 橙色
    'kaiber-motion': '#ff4081', // Kaiber Motion 粉色
    'pattern-ai': '#3949ab', // Pattern AI 蓝色
    'ready-player-me': '#7b1fa2', // Ready Player Me 紫色
    'descript-overdub': '#ff3d00', // Descript Overdub 红橙色
    'deepl-write': '#1565c0', // DeepL Write 蓝色
    'geneea': '#00897b', // Geneea 青绿色
    'textio': '#7cb342', // Textio 绿色
    'anthropic-business': '#6a1b9a', // Anthropic Business 紫色
    'moveworks': '#0d47a1', // Moveworks 深蓝色
    'drift-fastlane': '#f57c00', // Drift Fastlane 橙色
    'forethought': '#00bfa5', // Forethought 青绿色
    'ada-ai': '#2962ff', // Ada AI 蓝色
    'kore-ai': '#e91e63', // Kore.ai 粉色
    'mindverse': '#7c4dff', // Mindverse 紫色
    'chatling': '#ff5722', // Chatling 橙红色
    'autogpt': '#1a237e', // AutoGPT 深蓝色
    'openai-devday': '#ff9800', // OpenAI DevDay Models 橙色
    'luma-generate': '#673ab7', // Luma Generate 紫色
    'hotpot-ai-art-generator': '#f50057', // Hotpot AI Art Generator 粉红色
    'microsoft-designer': '#0277bd', // Microsoft Designer 蓝色
    'animeai': '#d81b60', // AnimeAI 粉色
    'playform': '#7b1fa2', // Playform 紫色
    'gemini-pro-vision': '#4285f4', // Gemini Pro Vision 蓝色
    'moonvalley': '#00c853', // MoonValley 绿色
    'nijijourney': '#ff4081', // NijiJourney 粉色
    'stability-ai-api': '#e91e63', // Stability AI API 粉色
    'runway-research': '#8e24aa', // Runway Research 紫色
    'openassistant': '#43a047', // OpenAssistant 绿色
    'vapi-ai': '#00b0ff', // Vapi AI 蓝色
    'kaedim': '#3949ab', // Kaedim 蓝色
    'claude-3-5-sonnet': '#6a1b9a', // Claude 3.5 Sonnet 紫色
    'adobe-project-sunrise': '#ff3d00', // Adobe Project Sunrise 红橙色
    'gpt-4-turbo-2024': '#00897b', // GPT-4 Turbo 2024 青绿色
    'perplexity-labs': '#0d47a1', // Perplexity Labs 深蓝色
    'stability-skybox': '#f57c00', // Stability Skybox 橙色
    'ideogram-ai': '#304ffe', // Ideogram AI 靛蓝色
    'luma-dream-machine': '#9c27b0', // Luma Dream Machine 紫色
    'meta-llama-3-405b': '#1565c0', // Meta Llama 3 405B 蓝色
    'deepmind-gemma': '#4285f4', // DeepMind Gemma 蓝色
    'antrhopic-sonnet': '#7c4dff', // Anthropic Sonnet 紫色
    'nvidia-ace': '#76ff03', // NVIDIA ACE 绿色
    'versy': '#ff5722', // Versy 橙红色
    'meta-seamless': '#1976d2', // Meta SeamlessM4T 蓝色
    'qdrant': '#ff4081', // Qdrant 粉色
    'airy': '#00c853', // Airy 绿色
    'seaplane': '#1565c0', // Seaplane 蓝色
    'devin-ai': '#6a1b9a', // Devin AI 紫色
    'bitable': '#00bfa5', // Bitable 青绿色
    'waldo-photos': '#ff9800', // Waldo Photos 橙色
    'designify': '#7c4dff', // Designify 紫色
    'getimg-ai': '#f50057' // GetIMG.ai 粉红色
  };
  
  return colorMap[toolId] || '#3498db';
}

// 获取工具名称的缩写用于备用图标
function getToolInitials(tool: Tool): string {
  const name = tool.name;
  
  // 特殊处理一些工具名称
  const specialCases: Record<string, string> = {
    'midjourney': 'MJ',
    'chatgpt': 'CG',
    'dall-e': 'DE',
    'github-copilot': 'GC',
    'notion-ai': 'NA',
    'runway': 'RW',
    'elevenlabs': 'EL',
    'synthesia': 'SY',
    'copy-ai': 'CA',
    'jasper': 'JP',
    'stable-diffusion': 'SD',
    'leonardo-ai': 'LA',
    'adobe-firefly': 'AF',
    'claude': 'CL',
    'bard': 'GM', // Gemini
    'pi': 'PI',
    // 新增工具的缩写
    'anthropic-claude-opus': 'CO', // Claude Opus
    'gpt-4o': '4O', // GPT-4o
    'sora': 'SR', // Sora
    'gemini-pro': 'GP', // Gemini Pro
    'llama-3': 'L3', // Llama 3
    'midjourney-v6': 'MJ', // Midjourney V6
    'perplexity-ai': 'PX', // Perplexity
    'kaiber': 'KB', // Kaiber
    'stability-ai': 'SA', // Stability AI
    'huggingface': 'HF', // Hugging Face
    'cohere': 'CH', // Cohere
    'deepl': 'DL', // DeepL
    'replicate': 'RP', // Replicate
    'gamma': 'GA', // Gamma
    'otter': 'OT', // Otter
    'fireflies': 'FF', // Fireflies
    'soundraw': 'SW', // Soundraw
    'flair': 'FL', // Flair
    'whisperapi': 'WA', // WhisperAPI
    'langchain': 'LC', // LangChain
    'ollama': 'OL', // Ollama
    'phind': 'PH', // Phind
    'v0': 'V0', // v0
    'typeface': 'TF', // Typeface
    'grammarly-go': 'GG', // Grammarly Go
    'anthropic-claude-sonnet': 'CS', // Claude Sonnet
    'videoask': 'VA', // VideoAsk
    'caktus': 'CA', // Caktus
    'lexica': 'LX', // Lexica
    'civitai': 'CV', // Civitai
    'aiva': 'AI', // AIVA
    'craiyon': 'CR', // Craiyon
    'play-ht': 'PH', // Play.ht
    'together-ai': 'TA', // Together AI
    'gencraft': 'GC', // Gencraft
    'veed-ai': 'VA', // VEED.IO
    'text-blaze': 'TB', // Text Blaze
    'poe': 'PE' // Poe
  };
  
  if (specialCases[tool.id]) {
    return specialCases[tool.id];
  }
  
  // 提取名称中的大写字母作为缩写
  const uppercaseLetters = name.match(/[A-Z]/g);
  if (uppercaseLetters && uppercaseLetters.length >= 2) {
    return uppercaseLetters.slice(0, 2).join('');
  }
  
  // 如果有空格，取每个单词的首字母
  if (name.includes(' ')) {
    return name.split(' ')
      .map(word => word[0].toUpperCase())
      .slice(0, 2)
      .join('');
  }
  
  // 默认取首字母
  return name.charAt(0).toUpperCase();
}

// 生成备用图标（当LOGO加载失败时使用）
function FallbackIcon({ tool, size }: { tool: Tool; size: number }) {
  const bgColor = getToolColor(tool.id);
  const initials = getToolInitials(tool);
  
  return (
    <div 
      className="flex items-center justify-center rounded-md" 
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: bgColor,
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <span className="text-white font-bold" style={{ 
        fontSize: Math.round(size * 0.45) + 'px',
        lineHeight: 1
      }}>
        {initials}
      </span>
    </div>
  );
}

// 定义加载状态枚举
enum LogoLoadingState {
  LOADING_PRIMARY,
  LOADING_SECONDARY,
  FAILED
}

interface ToolLogoProps {
  tool: Tool;
  size?: number;
}

export default function ToolLogo({ tool, size = 36 }: ToolLogoProps) {
  const [loadingState, setLoadingState] = useState<LogoLoadingState>(LogoLoadingState.LOADING_PRIMARY);
  
  // 从URL中提取域名，用于获取LOGO
  const domain = extractDomain(tool.url);
  const primaryLogoUrl = getCompanyLogoUrl(domain);
  const secondaryLogoUrl = getFaviconUrl(domain);
  
  // 如果没有域名，直接显示备用图标
  if (!domain) {
    return <FallbackIcon tool={tool} size={size} />;
  }

  // 尝试从localStorage中读取之前失败的图标记录，避免重复请求失败的图标
  useEffect(() => {
    const failedLogos = JSON.parse(localStorage.getItem('failedLogos') || '{}');
    
    // 如果这个域名的主图标曾经加载失败，直接尝试次要图标
    if (failedLogos[`primary_${domain}`]) {
      setLoadingState(LogoLoadingState.LOADING_SECONDARY);
    }
    
    // 如果主图标和次要图标都曾加载失败，直接使用备用图标
    if (failedLogos[`primary_${domain}`] && failedLogos[`secondary_${domain}`]) {
      setLoadingState(LogoLoadingState.FAILED);
    }
  }, [domain]);
  
  // 记录失败的图标到localStorage
  const handlePrimaryError = () => {
    try {
      const failedLogos = JSON.parse(localStorage.getItem('failedLogos') || '{}');
      failedLogos[`primary_${domain}`] = true;
      localStorage.setItem('failedLogos', JSON.stringify(failedLogos));
    } catch (error) {
      // 忽略localStorage错误
    }
    setLoadingState(LogoLoadingState.LOADING_SECONDARY);
  };
  
  const handleSecondaryError = () => {
    try {
      const failedLogos = JSON.parse(localStorage.getItem('failedLogos') || '{}');
      failedLogos[`secondary_${domain}`] = true;
      localStorage.setItem('failedLogos', JSON.stringify(failedLogos));
    } catch (error) {
      // 忽略localStorage错误
    }
    setLoadingState(LogoLoadingState.FAILED);
  };

  // 根据加载状态显示不同的图标
  if (loadingState === LogoLoadingState.FAILED) {
    return <FallbackIcon tool={tool} size={size} />;
  }
  
  return (
    <div 
      className="flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden" 
      style={{ width: size, height: size, minWidth: size }}
    >
      {loadingState === LogoLoadingState.LOADING_PRIMARY && (
        <img 
          src={primaryLogoUrl}
          alt={`${tool.name} logo`} 
          width={size} 
          height={size}
          className="w-full h-full object-contain"
          onError={handlePrimaryError}
          loading="lazy"
        />
      )}
      
      {loadingState === LogoLoadingState.LOADING_SECONDARY && (
        <img 
          src={secondaryLogoUrl}
          alt={`${tool.name} logo`} 
          width={size} 
          height={size}
          className="w-full h-full object-contain"
          onError={handleSecondaryError}
          loading="lazy"
        />
      )}
    </div>
  );
} 