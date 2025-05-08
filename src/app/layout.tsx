import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <link 
          rel="icon" 
          href="/favicon.ico" 
          sizes="any" 
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JEZJ7P1LZS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JEZJ7P1LZS');
          `}
        </Script>
      </head>
      <body className="antialiased bg-apple-50 dark:bg-apple-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
