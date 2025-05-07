import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Directory - 发现最佳AI工具",
  description: "探索我们精心策划的最强大、最创新的AI工具集合，满足您的各种需求。找到适合您项目的完美AI解决方案。",
  keywords: "AI工具, 人工智能, 机器学习, AI导航, AI资源",
  authors: [{ name: "AI Tools Directory" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "AI Tools Directory - 发现最佳AI工具",
    description: "探索我们精心策划的最强大、最创新的AI工具集合，满足您的各种需求。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link 
          rel="icon" 
          href="/favicon.ico" 
          sizes="any" 
        />
      </head>
      <body className="antialiased bg-apple-50 dark:bg-apple-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
