import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

interface SeoData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  twitterCardType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
  robotsDirective?: string;
}

async function getGlobalSeo(): Promise<SeoData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL || process.env.APP_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/seo`, { cache: 'no-store' });
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching global SEO:', error);
    return null;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getGlobalSeo();

  if (!seoData) {
    return {
      title: "DailyEcho - Your Source for News",
      description: "Stay informed with the latest news and updates",
      alternates: {
        canonical: 'https://dailyecho.fr/',
      },
    };
  }

  const metadata: Metadata = {
    title: seoData.metaTitle || "DailyEcho - Your Source for News",
    description: seoData.metaDescription || "Stay informed with the latest news and updates",
    keywords: seoData.metaKeywords || "",
    robots: seoData.robotsDirective || "index, follow",
    alternates: {
      canonical: 'https://dailyecho.fr/',
    },
    openGraph: {
      title: seoData.ogTitle || seoData.metaTitle || "DailyEcho",
      description: seoData.ogDescription || seoData.metaDescription || "Stay informed with the latest news",
      images: seoData.ogImageUrl ? [{ url: seoData.ogImageUrl }] : [],
    },
    twitter: {
      card: (seoData.twitterCardType as any) || "summary_large_image",
      title: seoData.twitterTitle || seoData.metaTitle || "DailyEcho",
      description: seoData.twitterDescription || seoData.metaDescription || "Stay informed with the latest news",
      images: seoData.twitterImageUrl ? [seoData.twitterImageUrl] : [],
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dailyecho.fr/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
