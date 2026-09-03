import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/servicesData";
import {
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Network,
  Cpu,
  Palette,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    "custom-software-development": <Code2 className="w-6 h-6 text-blue-600" />,
    "web-development": <Globe className="w-6 h-6 text-indigo-600" />,
    "mobile-app-development": <Smartphone className="w-6 h-6 text-emerald-600" />,
    "ecommerce-development": <ShoppingCart className="w-6 h-6 text-amber-600" />,
    "api-development-integration": <Network className="w-6 h-6 text-cyan-600" />,
    "business-automation": <Cpu className="w-6 h-6 text-violet-600" />,
    "ui-ux-design": <Palette className="w-6 h-6 text-pink-600" />,
    "software-maintenance": <Wrench className="w-6 h-6 text-slate-600" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/60" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Enterprise Capabilities"
          title="Full-Lifecycle Software Engineering & Digital Solutions"
          subtitle="From initial architectural scoping to continuous cloud scaling, we deliver robust technology systems tailored to your specific business model."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[service.id] || <Code2 className="w-6 h-6 text-blue-600" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.shortTitle}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {service.overview}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Outcomes:
                  </div>
                  {service.problemsSolved.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800 gap-1 transition-colors group-hover:underline"
                >
                  <span>Explore {service.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold shadow-2xs hover:shadow-xs transition-all"
          >
            <span>Compare All 8 Service Offerings & Tech Stacks</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
