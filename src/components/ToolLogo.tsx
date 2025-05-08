import { Tool } from '@/data/tools';
import Image from 'next/image';

// 根据工具ID返回相应的logo图标URL
function getLogoUrl(toolId: string): string {
  const logoMap: Record<string, string> = {
    'midjourney': 'https://assets-global.website-files.com/6347244ba8f2880608c991f5/64a321b7f0c577ebb08a80fe_Midjourney_Emblem.png',
    'chatgpt': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiE4OGTIrxZ1AHKArmn-SHiRzyEHe2Dp1UEQI4hXSVwA&s',
    'dall-e': 'https://static.wikia.nocookie.net/logopedia/images/6/69/DALL-E_2022.svg/revision/latest?cb=20230605182908',
    'github-copilot': 'https://github.githubassets.com/images/modules/site/copilot/cp-head-square.png',
    'notion-ai': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    'runway': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xQ9wgO7GoToLmL-xVrJ05B-rUg4S3SsSNHXG4pHR&s',
    'elevenlabs': 'https://play-lh.googleusercontent.com/JdmB6jxOUQH0uz5J2-l4Bd_NbueSgjnQeUVbJ4LTzLr6LeGnrqJbwR4hRFzvKwIzLP00',
    'synthesia': 'https://assets-global.website-files.com/61dc0796f359b6145bc06343/635a4e03fc93d3a2ccd4c15d_icon-square-synthesia-ai-p-500.png',
    'copy-ai': 'https://slack-imgs.com/?c=1&o1=wi400.he400.si&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F24%2FCopy.ai_logo.svg%2F1200px-Copy.ai_logo.svg.png',
    'jasper': 'https://pbs.twimg.com/profile_images/1717954519265439744/ImyiW4d9_400x400.jpg',
    'stable-diffusion': 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0ba77638-5a39-40c9-b0a9-7c61c55386e1-0.png',
    'leonardo-ai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Leonardo_AI_logo.svg/1200px-Leonardo_AI_logo.svg.png',
    'adobe-firefly': 'https://companieslogo.com/img/orig/ADBE-3c945fa9.png?t=1633513239',
    'claude': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Anthropic_Logo.png/1200px-Anthropic_Logo.png',
    'bard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Google_Gemini_Logo.svg/1200px-Google_Gemini_Logo.svg.png',
    'pi': 'https://play-lh.googleusercontent.com/V-ufxP7SUemGxnhT0m0pCuUwxLQj5jYzLYlT0_rcYYDk2d_GzgK2T8iwA99h4FBZeA'
  };

  // 默认logo（如果没有匹配到）
  const defaultLogo = 'https://cdn-icons-png.flaticon.com/512/2190/2190466.png';
  
  return logoMap[toolId] || defaultLogo;
}

interface ToolLogoProps {
  tool: Tool;
  size?: number;
}

export default function ToolLogo({ tool, size = 24 }: ToolLogoProps) {
  const logoUrl = getLogoUrl(tool.id);
  
  return (
    <Image 
      src={logoUrl} 
      alt={`${tool.name} logo`} 
      width={size} 
      height={size} 
      className="rounded-md" 
    />
  );
} 