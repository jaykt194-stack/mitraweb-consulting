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
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Database,
  Server,
  Code2,
  Workflow,
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
    title: `${project.title} — System Architecture | Mitraweb Consulting`,
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
              {project.architecture && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {project.architecture.pattern}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Architecture & Case Breakdown */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  Operational Challenge
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  The Business Challenge
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Engineering Approach
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Our Engineering Solution
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Comprehensive System Architecture Section */}
              {project.architecture && (
                <div className="space-y-6 pt-8 border-t border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                    <Workflow className="w-4 h-4" />
                    System Architecture & Design
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Technical Architecture Breakdown
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.architecture.summary}
                    </p>
                  </div>

                  {/* Architecture Pattern Banner */}
                  <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
                    <Layers className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                        Architectural Pattern:
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-indigo-800 mt-0.5">
                        {project.architecture.pattern}
                      </p>
                    </div>
                  </div>

                  {/* Layered Components Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.architecture.layers.map((layer, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              {idx === 0 && <Code2 className="w-4 h-4 text-blue-600" />}
                              {idx === 1 && <Server className="w-4 h-4 text-emerald-600" />}
                              {idx === 2 && <Database className="w-4 h-4 text-amber-600" />}
                              {idx === 3 && <ShieldCheck className="w-4 h-4 text-purple-600" />}
                              {layer.name}
                            </span>
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-500 border border-slate-200">
                              Tier {idx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {layer.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                          {layer.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 text-[10px] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Highlights */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Architectural Guarantees
                    </h3>
                    <div className="space-y-2">
                      {project.architecture.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Embedded Live System Preview Inside Architecture Section */}
                  {project.previewEmbedUrl && (
                    <div className="pt-8 border-t border-slate-200/80 space-y-4">
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Live Interactive Architecture Verification
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          Active System Environment Preview
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Test the deployed architecture, responsive layouts, and user workflows directly inside the live environment frame below:
                        </p>
                      </div>

                      <LivePreviewEmbed url={project.previewEmbedUrl} title={project.title} />
                    </div>
                  )}
                </div>
              )}

              {/* Results */}
              <div className="space-y-4 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Business Impact
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Architecture Blueprint Card */}
              {project.architecture && (
                <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                      Architecture Blueprint
                    </span>
                    <Cpu className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Pattern</div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {project.architecture.pattern}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Tiers</div>
                      <div className="text-slate-200 font-semibold mt-0.5">
                        {project.architecture.layers.length} Layers
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Deployment</div>
                      <div className="text-slate-200 font-semibold mt-0.5">Cloud Native</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Full Tech Stack */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Verified Tech Stack
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
                  <div className="text-xs font-bold text-slate-900">Have a similar requirement?</div>
                  <p className="text-xs text-slate-500">
                    Discuss how this system architecture can be customized to your company's scale and workflows.
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
                <span>Back to All Portfolio Architectures</span>
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
