import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, MessageSquare, ShieldCheck, Clock, FileCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900 text-white relative overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide mb-6">
          <span>Let's Discuss Your Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Have a Software Project in Mind?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us about your business, requirements, and goals. We'll help you identify the right technology approach, architectural trade-offs, and estimated development timeline.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 gap-2 group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/request-a-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl shadow-xs transition-all duration-200"
          >
            <span>Request a Detailed Quote</span>
          </Link>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/50 rounded-xl transition-all duration-200 gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Quick Connect</span>
          </a>
        </div>

        {/* Reassurance points */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Mutual Non-Disclosure Agreement (NDA)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Prompt 24-Hour Response Time</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FileCheck className="w-4 h-4 text-purple-400" />
            <span>Transparent Scope & Cost Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
