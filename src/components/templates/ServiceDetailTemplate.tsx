import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { ServiceItem } from "@/types";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <div className="bg-white">
      <JsonLd
        type="Service"
        data={{
          title: service.title,
          description: service.metaDescription,
          serviceType: service.shortTitle,
        }}
      />
      <JsonLd type="FAQPage" data={{ faqs: service.faqs }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />

          <div className="mt-6 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>{service.shortTitle} Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {service.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {service.subheadline}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition-all group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all"
              >
                <span>Request a Scope Estimate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Problems Solved */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Operational Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Engineered Around Real Business Needs
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies Utilized for {service.shortTitle}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
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
                Operational Problems We Eliminate:
              </h3>
              <div className="space-y-3">
                {service.problemsSolved.map((prob, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Scope & Specifications"
            title="What We Deliver"
            subtitle={`Concrete architectural and software deliverables included in our ${service.shortTitle.toLowerCase()} engagements.`}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((del, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{del.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {del.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Methodology"
            title={`Our ${service.shortTitle} Development Lifecycle`}
            subtitle="Predictable delivery milestones from initial scoping to long-term operational health."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-2 relative"
              >
                <div className="text-2xl font-black text-blue-600/30 font-mono">
                  {step.step}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <FAQAccordion
        items={service.faqs}
        title={`${service.shortTitle} FAQs`}
        subtitle="Direct answers to technical, commercial, and operational questions."
      />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
