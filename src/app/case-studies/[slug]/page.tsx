import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FinalCTA from "@/components/sections/FinalCTA";
import { caseStudiesData } from "@/data/caseStudiesData";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface CaseStudyDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyDetailProps): Metadata {
  const study = caseStudiesData.find((s) => s.slug === params.slug);
  if (!study) return {};

  return {
    title: `${study.title} | Case Study | Mitraweb Consulting`,
    description: study.challenge,
    alternates: {
      canonical: `${siteConfig.url}/case-studies/${study.slug}`,
    },
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const study = caseStudiesData.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: study.title },
            ]}
          />

          <div className="mt-6 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                {study.industry}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Client Profile: {study.clientProfile}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Timeline: {study.timeline}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Study Details */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Business Challenge */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Business Challenge
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {study.challenge}
                </p>

                <div className="bg-rose-50/60 border border-rose-200/70 rounded-2xl p-6 space-y-2 mt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800">
                    Existing Operational Bottlenecks:
                  </h3>
                  <div className="space-y-1.5">
                    {study.existingProblems.map((prob, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-4 pt-8 border-t border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900">
                  Our Engineering Approach
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {study.ourApproach}
                </p>
              </div>

              {/* Solution Architecture */}
              <div className="space-y-4 pt-8 border-t border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900">
                  Solution & Architecture
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {study.solutionArchitecture}
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 mt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Implementation Highlights:
                  </h3>
                  <div className="space-y-2">
                    {study.implementationHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-4 pt-8 border-t border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span>Business Outcomes & Metrics</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Key Engineering Learning</h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                    {study.keyLearnings}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technologies Deployed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  <div className="text-xs font-bold text-slate-900">
                    Need a similar solution?
                  </div>
                  <p className="text-xs text-slate-500">
                    We can review your business workflow and create an itemized technical roadmap.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow transition-colors"
                  >
                    Start Technical Discussion
                  </Link>
                </div>
              </div>

              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
