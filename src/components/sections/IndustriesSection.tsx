import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { industriesData } from "@/data/industriesData";
import {
  Activity,
  Truck,
  Factory,
  Store,
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function IndustriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    healthcare: <Activity className="w-6 h-6 text-rose-600" />,
    logistics: <Truck className="w-6 h-6 text-amber-600" />,
    manufacturing: <Factory className="w-6 h-6 text-blue-600" />,
    ecommerce: <Store className="w-6 h-6 text-purple-600" />,
    startups: <Rocket className="w-6 h-6 text-emerald-600" />,
  };

  const healthcareItem = industriesData.find((i) => i.id === "healthcare");
  const otherIndustries = industriesData.filter((i) => i.id !== "healthcare");

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industry Specialization"
          badgeVariant="rose"
          title="Domain Expertise Where Software Reliability Is Mission-Critical"
          subtitle="Software that understands regulatory compliance, operational edge cases, and industry-specific workflows."
        />

        {/* Strategic Spotlight: Healthcare Software */}
        {healthcareItem && (
          <div className="mt-14 bg-gradient-to-br from-rose-950/90 via-slate-900 to-brand-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-rose-900/40 shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Strategic Domain Focus &bull; Healthcare & Diagnostics</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {healthcareItem.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {healthcareItem.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {healthcareItem.keyCapabilities.slice(0, 4).map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/industries/${healthcareItem.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm shadow-md transition-colors"
                  >
                    <span>Explore Healthcare Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                  >
                    <span>Discuss Your Hospital/Diagnostic Project</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Healthcare Compliance</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered with strict HIPAA and ABDM alignment: end-to-end data encryption, ASTM/HL7 analyzer communication protocols, and immutable access logs.
                </p>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                  <div>&bull; Multi-Branch Diagnostic Chains</div>
                  <div>&bull; Hospital Information Management (HIMS)</div>
                  <div>&bull; Laboratory Information Systems (LIMS)</div>
                  <div>&bull; Automated WhatsApp Report Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Industries Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherIndustries.map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[ind.id] || <Factory className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {ind.overview}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800 gap-1 group-hover:underline"
                >
                  <span>View Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow transition-all"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
