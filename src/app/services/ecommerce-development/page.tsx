import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";

const slug = "ecommerce-development";
const service = servicesData.find((s) => s.slug === slug);

export const metadata: Metadata = {
  title: service?.metaTitle || "E-commerce Development Services",
  description: service?.metaDescription,
  keywords: service?.targetKeywords,
  alternates: {
    canonical: `${siteConfig.url}/services/${slug}`,
  },
};

export default function EcommercePage() {
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
