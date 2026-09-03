import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import {
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Network,
  Cpu,
  Palette,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Services & Technology Consulting",
  description:
    "Explore Mitraweb Consulting's full range of custom software development, web applications, mobile apps, business automation, and API integration services.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "custom-software-development": <Code2 className="w-6 h-6 text-blue-600" />,
    "web-development": <Globe className="w-6 h-6 text-indigo-600" />,
    "mobile-app-development": <Smartphone className="w-6 h-6 text-emerald-600" />,
    "ecommerce-development": <ShoppingCart className="w-6 h-6 text-amber-600" />,
    "api-development-integration": <Network className="w-6 h-6 text-cyan-600" />,
    "business-automation": <Cpu className="w-6 h-6 text-violet-600" />,
    "ui-ux-design": <Palette className="w-6 h-6 text-pink-600" />,
    "software-maintenance": <Wrench className="w-6 h-6 text-slate-600" />,
  };

  const allServiceFAQs = servicesData.flatMap((s) => s.faqs).slice(0, 8);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Enterprise Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Software Development & Digital Solutions
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              We design, engineer, deploy, and scale enterprise software applications tailored to the specific operational realities of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="bg-slate-50/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {iconMap[service.id] || <Code2 className="w-6 h-6 text-blue-600" />}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.overview}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Operational Problems We Solve:
                    </h3>
                    <div className="space-y-1.5">
                      {service.problemsSolved.slice(0, 3).map((prob, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow transition-colors"
                    >
                      <span>Explore Dedicated Service Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <span>Request Scope Estimate</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    What We Deliver
                  </h3>
                  <div className="space-y-3">
                    {service.deliverables.slice(0, 3).map((del, i) => (
                      <div key={i} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                        <div className="text-xs font-bold text-slate-900">{del.title}</div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          {del.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Technology Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        items={allServiceFAQs}
        title="Services & Technology FAQ"
        subtitle="Common questions regarding scoping, delivery timelines, integration with legacy stacks, and code ownership."
      />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
