import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";
import { industriesData } from "@/data/industriesData";
import { siteConfig } from "@/data/siteConfig";

const slug = "healthcare";
const industry = industriesData.find((i) => i.slug === slug);

export const metadata: Metadata = {
  title: industry?.metaTitle || "Healthcare Software Development Company",
  description: industry?.metaDescription,
  keywords: [
    "healthcare software development company",
    "hospital software development",
    "healthcare software solutions",
    "diagnostic center software",
    "healthcare automation software",
    "laboratory information management system",
    "HIMS development",
    "LIMS development",
    "ABDM integration",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries/${slug}`,
  },
};

export default function HealthcarePage() {
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} isHealthcare={true} />;
}
