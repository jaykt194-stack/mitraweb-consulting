import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";
import { industriesData } from "@/data/industriesData";
import { siteConfig } from "@/data/siteConfig";

const slug = "ecommerce";
const industry = industriesData.find((i) => i.slug === slug);

export const metadata: Metadata = {
  title: industry?.metaTitle || "E-commerce & Retail Software Solutions",
  description: industry?.metaDescription,
  keywords: [
    "ecommerce software development",
    "headless commerce development",
    "omnichannel retail software",
    "b2b wholesale portal development",
    "custom commerce platform",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries/${slug}`,
  },
};

export default function EcommerceIndustryPage() {
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
