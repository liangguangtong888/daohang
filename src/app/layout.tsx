import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools Directory - Discover the Best AI Tools",
  description: "Explore our curated collection of the most powerful and innovative AI tools for your needs. Find the perfect AI solution for your projects.",
  keywords: "AI tools, artificial intelligence, machine learning, AI directory, AI resources",
  authors: [{ name: "AI Tools Directory" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "AI Tools Directory - Discover the Best AI Tools",
    description: "Explore our curated collection of the most powerful and innovative AI tools for your needs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
