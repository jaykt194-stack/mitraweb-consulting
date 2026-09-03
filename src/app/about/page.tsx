import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import TechEcosystem from "@/components/sections/TechEcosystem";
import { siteConfig } from "@/data/siteConfig";
import {
  Target,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Technology Partner for Ambitious Businesses",
  description:
    "Learn about Mitraweb Consulting—our mission, engineering philosophy, and commitment to building durable software that drives real business efficiency.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const principles = [
    {
      title: "Business Value Before Code",
      desc: "Software that doesn't solve a quantifiable operational bottleneck or generate revenue is a distraction. Every technical decision starts with your business balance sheet.",
    },
    {
      title: "Clean Architecture & Scalability",
      desc: "We write clean, modular, and strictly-typed codebases. We don't take shortcuts that result in expensive technical rewrites 12 months down the road.",
    },
    {
      title: "Radical Transparency",
      desc: "No black boxes. You get access to weekly sprint demos, git commit history, and direct communication with engineers doing the work.",
    },
    {
      title: "Uncompromising Security & IP",
      desc: "We protect your proprietary data with strict NDA agreements, bank-grade encryption protocols, and 100% intellectual property transfer.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology Partner for Ambitious Businesses
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Mitraweb Consulting bridges the critical gap between executive business strategy and modern software engineering. We help organizations replace manual operational friction with reliable, custom-engineered digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>Our Core Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                To Engineer Software That Delivers Unquestionable Business Clarity & Growth
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Too many companies are trapped between inflexible off-the-shelf software subscriptions that don't fit their workflows, and unreliable freelancers who write fragile spaghetti code without documentation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Mitraweb Consulting was established to provide a superior alternative: seasoned engineering rigor, enterprise-grade development standards, and direct accountability for commercial outcomes.
              </p>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">What Guides Our Engineering</h3>
              <div className="space-y-4">
                {principles.map((p, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{p.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Standards"
            title="How We Work With You"
            subtitle="An agile, collaborative model built on weekly milestones, working software demonstrations, and zero technical jargon."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Senior Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You communicate directly with experienced software architects and engineers who understand system design—not junior account managers.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Sprint Demos & Continuous Deployment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every two weeks, you test actual functional software in a dedicated staging environment, ensuring full alignment before production rollout.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Comprehensive Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deliver structured documentation, API guides, and recorded video walkthroughs. You are never vendor-locked or dependent on secret knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechEcosystem />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
