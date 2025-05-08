import { Tool } from '@/data/tools';
import { useState, useEffect } from 'react';

// 使用clearbit.com的Logo API获取公司官方LOGO
function getCompanyLogoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}

// 从工具URL中提取域名
function extractDomain(url: string): string {
  try {
    // 移除协议
    let domain = url.replace(/(^\w+:|^)\/\//, '');
    // 移除路径
    domain = domain.split('/')[0];
    // 移除www.
    domain = domain.replace(/^www\./, '');
    
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
    'pi': '#ff2d55'
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
    'pi': 'PI'
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

interface ToolLogoProps {
  tool: Tool;
  size?: number;
}

export default function ToolLogo({ tool, size = 36 }: ToolLogoProps) {
  const [imgError, setImgError] = useState(false);
  
  // 从URL中提取域名，用于获取LOGO
  const domain = extractDomain(tool.url);
  const logoUrl = getCompanyLogoUrl(domain);
  
  if (imgError || !domain) {
    return <FallbackIcon tool={tool} size={size} />;
  }
  
  return (
    <div 
      className="flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden" 
      style={{ width: size, height: size, minWidth: size }}
    >
      <img 
        src={logoUrl}
        alt={`${tool.name} logo`} 
        width={size} 
        height={size}
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
} 