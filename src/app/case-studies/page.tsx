import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { caseStudiesData } from "@/data/caseStudiesData";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Case Studies | Mitraweb Consulting",
  description:
    "In-depth technical case studies documenting how Mitraweb Consulting solves operational problems through custom software engineering.",
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Deep-Dive Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Enterprise Case Studies
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Step inside our architectural and delivery process. See how we dissect complex operational problems and turn them into scalable digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Client: {study.clientProfile}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {study.timeline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    {study.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {study.challenge}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Problems Encountered:
                    </div>
                    <div className="space-y-1">
                      {study.existingProblems.slice(0, 3).map((prob, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow transition-colors"
                    >
                      <span>Read Complete Architectural Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>Business Outcomes</span>
                  </div>

                  <div className="space-y-2.5">
                    {study.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium"
                        >
                          {t}
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

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
