import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { IndustryItem } from "@/types";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

interface IndustryDetailTemplateProps {
  industry: IndustryItem;
  isHealthcare?: boolean;
}

export default function IndustryDetailTemplate({
  industry,
  isHealthcare = false,
}: IndustryDetailTemplateProps) {
  return (
    <div className="bg-white">
      <JsonLd
        type="Service"
        data={{
          title: industry.title,
          description: industry.metaDescription,
          serviceType: `${industry.title} Development`,
        }}
      />
      <JsonLd type="FAQPage" data={{ faqs: industry.faqs }} />

      {/* Hero */}
      <section
        className={`pt-10 pb-16 lg:pt-14 lg:pb-24 border-b ${
          isHealthcare
            ? "bg-gradient-to-b from-rose-50/50 via-white to-slate-50 border-rose-200/60"
            : "bg-gradient-to-b from-slate-50 via-white to-slate-50/40 border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />

          <div className="mt-6 max-w-4xl space-y-4">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isHealthcare
                  ? "bg-rose-100 text-rose-800 border border-rose-200"
                  : "bg-blue-50 border border-blue-200 text-blue-700"
              }`}
            >
              <span>{industry.title}</span>
              {isHealthcare && <span>&bull; Strategic Practice Area</span>}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {industry.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {industry.subheadline}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm shadow transition-all group ${
                  isHealthcare
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                <span>
                  {isHealthcare
                    ? "Discuss Your Healthcare Software Project"
                    : "Discuss Your Industry Solution"}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all"
              >
                <span>Request Project Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Challenges & Overview */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Industry Challenges</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Addressing Complex Operational Realities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {industry.overview}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies Applied:
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Critical Pain Points We Solve:
              </h3>
              <div className="space-y-4">
                {industry.challenges.map((ch, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">{ch.title}</div>
                      <div className="text-slate-600 mt-0.5 leading-relaxed">{ch.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Purpose-Built Solutions"
            title={`Tailored Software Architecture for ${industry.title}`}
            subtitle="Engineered to integrate seamlessly with existing operational workflows, third-party hardware, and enterprise backends."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{sol.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-800 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Engineering Capabilities & Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.keyCapabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        items={industry.faqs}
        title={`${industry.title} FAQs`}
        subtitle="Clarifications on regulatory compliance, hardware interfacing, data migrations, and multi-tenant architectures."
      />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
