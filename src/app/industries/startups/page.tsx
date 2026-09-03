import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/templates/IndustryDetailTemplate";
import { industriesData } from "@/data/industriesData";
import { siteConfig } from "@/data/siteConfig";

const slug = "startups";
const industry = industriesData.find((i) => i.slug === slug);

export const metadata: Metadata = {
  title: industry?.metaTitle || "Software Development for Startups & Scaleups",
  description: industry?.metaDescription,
  keywords: [
    "startup software development",
    "MVP development services",
    "software engineering for startups",
    "technical co-pilot for startups",
    "scalable MVP development",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries/${slug}`,
  },
};

export default function StartupsPage() {
  if (!industry) notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
