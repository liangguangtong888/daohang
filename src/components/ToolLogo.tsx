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
      'research.runwayml.com/gen1': 'runwayml.com',
      'research.runwayml.com/gen2': 'runwayml.com',
      'runwayml.com/gen-2': 'runwayml.com',
      'docs.midjourney.com/docs/niji': 'midjourney.com',
      'ai.meta.com/llama': 'meta.com',
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
      'www.nvidia.com/en-us/technologies/ace/': 'nvidia.com'
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
    'poe': '#6200ea' // Poe 紫色
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
          onError={() => setLoadingState(LogoLoadingState.LOADING_SECONDARY)}
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
          onError={() => setLoadingState(LogoLoadingState.FAILED)}
          loading="lazy"
        />
      )}
    </div>
  );
} 