"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechEcosystem() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "mobile" | "database" | "cloud">("frontend");

  const categories = [
    { id: "frontend", label: "Frontend & Web" },
    { id: "backend", label: "Backend & APIs" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "database", label: "Database & Storage" },
    { id: "cloud", label: "Cloud & Integrations" },
  ] as const;

  const techStack = {
    frontend: [
      { name: "TypeScript", role: "Type-safe robust frontend architecture", badge: "Primary" },
      { name: "React", role: "Component-driven declarative interfaces", badge: "Core" },
      { name: "Next.js", role: "Server-side rendering & high-speed SEO performance", badge: "Recommended" },
      { name: "Tailwind CSS", role: "Utility-first design systems & micro-interactions", badge: "Core" },
      { name: "HTML5 / Semantic Web", role: "Accessible, screen-reader-compliant markup", badge: "Standard" },
      { name: "Modern JavaScript (ESNext)", role: "Standard client-side scripting & browser APIs", badge: "Standard" },
    ],
    backend: [
      { name: "Node.js / Express", role: "High-throughput asynchronous I/O services", badge: "Primary" },
      { name: "Python / FastAPI / Django", role: "Data-heavy services, automation & parsing", badge: "Primary" },
      { name: "PHP / Laravel", role: "Rapid web application & CMS backends", badge: "Supported" },
      { name: ".NET / C#", role: "Enterprise service architectures & legacy migration", badge: "Enterprise" },
    ],
    mobile: [
      { name: "React Native", role: "Cross-platform iOS & Android from single codebase", badge: "Primary" },
      { name: "Flutter", role: "High-fidelity native compiled mobile experiences", badge: "Primary" },
      { name: "iOS / Swift", role: "Hardware-specific Apple platform optimization", badge: "Native" },
      { name: "Android / Kotlin", role: "Dedicated enterprise mobile deployment", badge: "Native" },
    ],
    database: [
      { name: "PostgreSQL", role: "Relational ACID-compliant transactional persistence", badge: "Primary" },
      { name: "MySQL", role: "Widely adopted structured relational database", badge: "Supported" },
      { name: "MongoDB", role: "Flexible document-based storage for dynamic schemas", badge: "NoSQL" },
      { name: "Redis", role: "Sub-millisecond in-memory caching & session stores", badge: "High-Speed" },
      { name: "TimescaleDB", role: "Time-series storage for IoT & telematics telemetry", badge: "Specialized" },
    ],
    cloud: [
      { name: "REST APIs", role: "Standardized OpenAPI/Swagger documented endpoints", badge: "Core" },
      { name: "Third-Party APIs", role: "Payments, CRMs, ERPs, WhatsApp, SMS & Mapbox", badge: "Seamless" },
      { name: "AWS Cloud", role: "EC2, ECS, S3, RDS, Lambda, CloudFront & SQS", badge: "Enterprise" },
      { name: "Google Cloud (GCP)", role: "Cloud Run, Kubernetes, BigQuery & Cloud Storage", badge: "Supported" },
      { name: "Docker & Containerization", role: "Predictable staging-to-production parity", badge: "Standard" },
    ],
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology Stack"
          badgeVariant="purple"
          title="Battle-Tested Technologies Engineered for Durability"
          subtitle="We deliberately choose modern, mature, and widely supported technologies that ensure long-term stability, rapid hiring, and seamless maintenance."
        />

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-brand-900 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          Need a specific technology stack or legacy integration? We review custom enterprise architectural requirements on discovery calls.
        </div>
      </div>
    </section>
  );
}
