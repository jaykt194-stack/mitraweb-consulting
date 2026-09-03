import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import Analytics from "@/components/seo/Analytics";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Custom Software Development & Enterprise Digital Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom software development company",
    "software development services",
    "web application development",
    "mobile app development company",
    "healthcare software development",
    "business process automation",
    "API integration services",
    "ecommerce development company",
    "UI UX design company",
    "software maintenance services",
    "Mitraweb Consulting",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Custom Software Solutions Built Around Your Business`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/logo.png`,
        width: 800,
        height: 600,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Custom Software Development`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/logo.png`],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/images/icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
      </head>
      <body className="flex flex-col min-h-full">
        <Analytics />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
