import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { industriesData } from "@/data/industriesData";
import { siteConfig } from "@/data/siteConfig";
import {
  Activity,
  Truck,
  Factory,
  Store,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Software Solutions | Mitraweb Consulting",
  description:
    "Tailored software engineering for healthcare, logistics, manufacturing, e-commerce, and startups. Built around real-world domain workflows.",
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
};

export default function IndustriesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    healthcare: <Activity className="w-6 h-6 text-rose-600" />,
    logistics: <Truck className="w-6 h-6 text-amber-600" />,
    manufacturing: <Factory className="w-6 h-6 text-blue-600" />,
    ecommerce: <Store className="w-6 h-6 text-purple-600" />,
    startups: <Rocket className="w-6 h-6 text-emerald-600" />,
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Industries" }]} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Domain Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Software Solutions by Industry
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical presents distinct compliance mandates, integration challenges, and operational rhythms. We engineer software tailored to the exact realities of your domain.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industriesData.map((ind) => {
            const isHealthcare = ind.id === "healthcare";
            return (
              <div
                key={ind.id}
                className={`rounded-3xl p-6 sm:p-8 lg:p-10 border transition-all ${
                  isHealthcare
                    ? "bg-rose-50/40 border-rose-200/80 shadow-card hover:shadow-card-hover"
                    : "bg-slate-50/70 border-slate-200/80 hover:bg-white shadow-2xs hover:shadow-card"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                        {iconMap[ind.id] || <Factory className="w-6 h-6 text-blue-600" />}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{ind.title}</h2>
                        {isHealthcare && (
                          <span className="text-[10px] uppercase font-bold text-rose-700 tracking-wider">
                            Specialized Healthcare Engineering Practice
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {ind.overview}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Key Capabilities Delivered:
                      </div>
                      <div className="space-y-1.5">
                        {ind.keyCapabilities.slice(0, 3).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/industries/${ind.slug}`}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow transition-colors ${
                          isHealthcare
                            ? "bg-rose-600 hover:bg-rose-700 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        <span>Explore {ind.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Sample Architecture Solutions:
                    </div>
                    {ind.solutions.slice(0, 3).map((sol, i) => (
                      <div key={i} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                        <div className="text-xs font-bold text-slate-900">{sol.title}</div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          {sol.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
