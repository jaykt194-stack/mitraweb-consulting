"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Database,
  Cloud,
  Cpu,
  Activity,
  Layers,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200/60">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Technology Partner for Ambitious Enterprises</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Custom Software Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Built Around Your Business
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From custom software and web applications to mobile apps, automation, and API integrations, Mitraweb Consulting helps businesses build scalable digital solutions designed around their real operational needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 gap-2 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl shadow-xs transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Badges Area (No Fake Stats) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">100% IP Ownership</div>
                  <div className="text-[11px] text-slate-500">You own all source code</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Enterprise Security</div>
                  <div className="text-[11px] text-slate-500">NDA & strict data privacy</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Domain Specialization</div>
                  <div className="text-[11px] text-slate-500">Healthcare, logistics & SaaS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Tech Dashboard Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none bg-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-800 text-slate-200 font-sans">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  mitraweb.cloud/ops-dashboard
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Connected Services Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>API Gateway</span>
                    <Code2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-lg font-bold text-white mt-1">99.98%</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span>Healthy</span> &bull; <span>14ms Latency</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Postgres DB</span>
                    <Database className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-lg font-bold text-white mt-1">Sync Active</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Encrypted AES-256</div>
                </div>
              </div>

              {/* Real-Time Telemetry Stream Simulation */}
              <div className="mt-4 p-4 rounded-xl bg-brand-950/90 border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>EVENT DISPATCH QUEUE</span>
                  <span className="text-blue-400">0 ERRORS</span>
                </div>
                <div className="text-slate-300 flex items-center justify-between text-[11px]">
                  <span className="truncate">✓ [HL7-LIMS] Barcode #9842 verified & signoff</span>
                  <span className="text-slate-500 text-[10px]">Just now</span>
                </div>
                <div className="text-slate-300 flex items-center justify-between text-[11px]">
                  <span className="truncate">✓ [FASTag-TMS] Fleet Route #108 completed</span>
                  <span className="text-slate-500 text-[10px]">1m ago</span>
                </div>
                <div className="text-slate-300 flex items-center justify-between text-[11px]">
                  <span className="truncate">✓ [ERP-Sync] 124 dealer orders processed</span>
                  <span className="text-slate-500 text-[10px]">3m ago</span>
                </div>
              </div>

              {/* Architecture Blueprint Nodes */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-blue-400" />
                  <span>AWS / Edge CDN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Event Workers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CI/CD Automated</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-200/80 items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Production Ready</div>
                <div className="text-[11px] text-slate-500">Engineered for uptime & scale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
