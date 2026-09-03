import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Briefcase,
  Layers,
  Cpu,
  Eye,
  CheckCheck,
  ShieldAlert,
  Headphones,
  KeyRound,
} from "lucide-react";

export default function WhyMitraweb() {
  const differentiators = [
    {
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      title: "Business-First Engineering",
      description:
        "We don't write code for the sake of code. We align architectural decisions with operational bottlenecks, customer acquisition, and unit economics.",
    },
    {
      icon: <KeyRound className="w-5 h-5 text-emerald-600" />,
      title: "100% IP & Code Ownership",
      description:
        "You retain complete, unencumbered ownership of all source code, design files, database schemas, and documentation from day one.",
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: "Bespoke, Unbloated Architecture",
      description:
        "No generic cookie-cutter templates. Every system is structured for your exact volume, security constraints, and user concurrency.",
    },
    {
      icon: <Eye className="w-5 h-5 text-amber-600" />,
      title: "Transparent Agile Delivery",
      description:
        "Bi-weekly sprint demos, shared Git repositories, and clear Jira/Linear roadmaps so you never wonder what is being worked on.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      title: "Modern, Long-Lived Stacks",
      description:
        "We utilize battle-tested, mainstream ecosystems (TypeScript, Next.js, Node.js, Python, PostgreSQL) ensuring easy hiring and developer continuity.",
    },
    {
      icon: <CheckCheck className="w-5 h-5 text-cyan-600" />,
      title: "Rigorous Automated Testing",
      description:
        "Every release passes unit tests, API integration suites, and performance budgets before reaching production environments.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      title: "Enterprise Security & Privacy",
      description:
        "Strict adherence to OWASP Top 10 guidelines, encrypted data pipelines, secure role-based access control, and enforceable NDAs.",
    },
    {
      icon: <Headphones className="w-5 h-5 text-slate-700" />,
      title: "Proactive Long-Term Stewardship",
      description:
        "We don't vanish after launch. We offer SLA-backed maintenance, uptime monitoring, security updates, and phased enhancements.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Mitraweb"
          badgeVariant="secondary"
          title="Engineered for Reliability. Accountable for Outcomes."
          subtitle="We partner with organizations that view technology as a core operational asset rather than a commodity expense."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
