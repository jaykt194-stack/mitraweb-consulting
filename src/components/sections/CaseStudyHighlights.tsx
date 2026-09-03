import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudiesData } from "@/data/caseStudiesData";
import { ArrowRight, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

export default function CaseStudyHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proven Impact"
          badgeVariant="success"
          title="Real Operational Problems Solved Through Scalable Engineering"
          subtitle="A look behind the scenes at how we analyze operational bottlenecks, architect software solutions, and deliver measurable outcomes."
        />

        <div className="mt-16 space-y-12">
          {caseStudiesData.slice(0, 2).map((study) => (
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
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {study.title}
                  </h3>

                  <div className="space-y-3 pt-2 text-sm text-slate-600">
                    <div>
                      <span className="font-bold text-slate-900">The Challenge: </span>
                      {study.challenge}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">The Solution: </span>
                      {study.solutionArchitecture}
                    </div>
                  </div>

                  <div className="pt-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Technologies Leveraged:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 group"
                    >
                      <span>Read Full Technical Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>Verified Operational Outcomes</span>
                  </div>

                  <div className="space-y-3">
                    {study.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
                    Key Architectural Learning: "{study.keyLearnings}"
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-sm font-semibold shadow transition-all"
          >
            <span>View All Engineering Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
