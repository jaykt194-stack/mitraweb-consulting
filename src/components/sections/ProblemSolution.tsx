import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  AlertTriangle,
  CheckCircle,
  FileSpreadsheet,
  Unplug,
  Clock,
  Database,
  TrendingDown,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ProblemSolution() {
  const problems = [
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-rose-500" />,
      title: "Manual, Repetitive Processes",
      description:
        "High-value employees spending hours re-typing figures between spreadsheets and disconnected administrative tools.",
    },
    {
      icon: <Unplug className="w-5 h-5 text-amber-500" />,
      title: "Disconnected Business Systems",
      description:
        "CRM, billing, inventory, and field operations running on isolated islands that fail to communicate automatically.",
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      title: "Outdated Legacy Codebases",
      description:
        "Fragile software that crashes during busy hours, lacks modern API connectivity, and is increasingly costly to maintain.",
    },
    {
      icon: <Database className="w-5 h-5 text-red-500" />,
      title: "Scattered, Inaccurate Data",
      description:
        "Leadership lacks real-time operational visibility because reports must be manually stitched together over days.",
    },
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      title: "Purpose-Built Custom Workflows",
      description:
        "Software architected precisely around how your organization operates—eliminating manual friction and workarounds.",
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      title: "Unified, Connected Systems",
      description:
        "Resilient API integrations and event-driven automation synchronizing data instantly across every department.",
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-indigo-500" />,
      title: "Modern, Maintainable Architecture",
      description:
        "Clean, typed codebases built with modern stacks (TypeScript, Next.js, PostgreSQL) that scale with company growth.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-cyan-500" />,
      title: "Single Source of Truth",
      description:
        "Real-time executive dashboards and automated reporting giving decision-makers instant, accurate operational metrics.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Business Reality"
          badgeVariant="warning"
          title="Technology Should Solve Business Problems — Not Create More of Them."
          subtitle="Most companies don't need 'more apps'—they need reliable digital systems that eliminate operational bottlenecks, reduce human error, and deliver measurable return on investment."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Where Businesses Struggle */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Where Traditional Software Fails
                </h3>
              </div>
              <div className="mt-6 space-y-6">
                {problems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white shadow-2xs shrink-0 border border-slate-200/60">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              Result: Lost productivity, frustrated teams, and stalled business scaling.
            </div>
          </div>

          {/* How Mitraweb Approaches Software */}
          <div className="bg-gradient-to-br from-brand-950 to-brand-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">
                  The Mitraweb Strategic Engineering Approach
                </h3>
              </div>
              <div className="mt-6 space-y-6">
                {solutions.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-brand-800/80 border border-slate-700 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Turn operational friction into competitive advantage.
              </span>
              <Link
                href="/about"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                Learn Our Philosophy <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
