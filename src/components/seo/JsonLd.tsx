import React from "react";
import { siteConfig } from "@/data/siteConfig";

interface JsonLdProps {
  type?: "Organization" | "WebSite" | "Service" | "FAQPage" | "Article" | "BreadcrumbList";
  data?: Record<string, any>;
}

export default function JsonLd({ type = "Organization", data }: JsonLdProps) {
  let schemaData: Record<string, any> = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo.png`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          email: siteConfig.email,
          availableLanguage: ["English", "Hindi"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        addressCountry: siteConfig.location.country,
      },
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    };
  } else if (type === "Service" && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.title,
      description: data.description,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: data.serviceType || "Custom Software Development",
      areaServed: "Worldwide",
    };
  } else if (type === "FAQPage" && data && Array.isArray(data.faqs)) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq: { question: string; answer: string }) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  } else if (type === "Article" && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title,
      description: data.excerpt,
      author: {
        "@type": "Organization",
        name: data.author?.name || siteConfig.name,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo.png`,
        },
      },
      datePublished: data.publishedAt,
      dateModified: data.updatedAt || data.publishedAt,
      mainEntityOfPage: `${siteConfig.url}/blog/${data.slug}`,
    };
  } else if (type === "BreadcrumbList" && data && Array.isArray(data.items)) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.items.map((item: { name: string; url: string }, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
