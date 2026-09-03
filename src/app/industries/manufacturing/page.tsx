import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";
import { industriesData } from "@/data/industriesData";
import { siteConfig } from "@/data/siteConfig";

const slug = "manufacturing";
const industry = industriesData.find((i) => i.slug === slug);

export const metadata: Metadata = {
  title: industry?.metaTitle || "Manufacturing Software Solutions",
  description: industry?.metaDescription,
  keywords: [
    "manufacturing software development",
    "manufacturing execution system",
    "MES software",
    "shop floor management software",
    "production tracking software",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries/${slug}`,
  },
};

export default function ManufacturingPage() {
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
