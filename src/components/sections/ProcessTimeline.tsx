import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Requirements",
      desc: "Understand the business model, interview end-users, map edge cases, audit existing databases, and quantify operational goals.",
    },
    {
      num: "02",
      title: "Strategy & Architecture",
      desc: "Define the system architecture, database models, cloud topology, API schemas, security policies, and technical delivery roadmap.",
    },
    {
      num: "03",
      title: "UX/UI Product Design",
      desc: "Create interactive Figma wireframes, accessible component systems, and validate clickable prototypes with real stakeholders.",
    },
    {
      num: "04",
      title: "Agile Development",
      desc: "Build the software in two-week iterative sprints with clean TypeScript code, modular architectures, and weekly progress demos.",
    },
    {
      num: "05",
      title: "Rigorous Testing & QA",
      desc: "Perform end-to-end functional testing, performance audits, vulnerability scanning, cross-device testing, and data integrity checks.",
    },
    {
      num: "06",
      title: "Production Launch",
      desc: "Execute zero-downtime deployment, DNS provisioning, live monitoring integration, and complete technical handover to your team.",
    },
    {
      num: "07",
      title: "Support & Continuous Growth",
      desc: "Provide SLA-backed monitoring, monthly security patches, query optimization, and incremental feature iterations as your company scales.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Delivery Methodology"
          badgeVariant="primary"
          title="Predictable, Transparent Software Delivery"
          subtitle="A structured 7-stage engineering methodology designed to eliminate scope creep, protect delivery timelines, and ensure zero surprises at launch."
        />

        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.slice(0, 4).map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-card transition-all relative"
              >
                <div className="text-3xl font-black text-blue-600/30 font-mono">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-5xl lg:mx-auto">
            {steps.slice(4).map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-card transition-all relative"
              >
                <div className="text-3xl font-black text-indigo-600/30 font-mono">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
