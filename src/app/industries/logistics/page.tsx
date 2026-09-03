import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";
import { industriesData } from "@/data/industriesData";
import { siteConfig } from "@/data/siteConfig";

const slug = "logistics";
const industry = industriesData.find((i) => i.slug === slug);

export const metadata: Metadata = {
  title: industry?.metaTitle || "Logistics Software Solutions",
  description: industry?.metaDescription,
  keywords: [
    "logistics software development",
    "fleet management software",
    "transportation management system",
    "cold chain telematics software",
    "dispatch automation software",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries/${slug}`,
  },
};

export default function LogisticsPage() {
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
