import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FinalCTA from "@/components/sections/FinalCTA";
import { portfolioData } from "@/data/portfolioData";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import LivePreviewEmbed from "@/components/ui/LivePreviewEmbed";

interface PortfolioDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PortfolioDetailProps): Metadata {
  const project = portfolioData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Profile | Mitraweb Consulting`,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${project.slug}`,
    },
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailProps) {
  const project = portfolioData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
          />

          <div className="mt-6 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Industry: {project.clientIndustry}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {project.liveUrl && (
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo ({project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')})</span>
                </a>
                {project.previewEmbedUrl && (
                  <a
                    href="#live-preview"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-all"
                  >
                    <span>View Interactive Preview Below &darr;</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Breakdown */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Challenge */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  The Business Challenge
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3 pt-6 border-t border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900">
                  Our Engineering Solution
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-4 pt-6 border-t border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900">
                  Measurable Operational Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {res}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Live System Preview */}
              {project.previewEmbedUrl && (
                <div id="live-preview" className="pt-6 border-t border-slate-200/80">
                  <LivePreviewEmbed url={project.previewEmbedUrl} title={project.title} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Live Demo Highlight Card */}
              {project.liveUrl && (
                <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-2xl p-6 border border-blue-900/60 shadow-xl space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                      Live Application
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Demo
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">Experience the Live System</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Test the active deployment, role-based workflows, student/parent portals, and interface in real time.
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow transition-all hover:shadow-blue-500/25"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Project Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  <div className="text-xs font-bold text-slate-900">Have a similar project?</div>
                  <p className="text-xs text-slate-500">
                    Discuss how this architecture can be adapted to your company's operational constraints.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow transition-colors"
                  >
                    Discuss With Our Architects
                  </Link>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Portfolio Projects</span>
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
