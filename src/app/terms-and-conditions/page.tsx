import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mitraweb Consulting",
  description: "Terms and conditions governing consulting and software development services at Mitraweb Consulting.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="mt-8 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: September 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-6">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">1. Overview of Services</h2>
              <p>
                Mitraweb Consulting provides custom software development, system architecture advisory, web and mobile app engineering, process automation, and maintenance services. All engagements are governed by formal Master Services Agreements (MSA) and specific Statements of Work (SOW).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">2. Scope & Estimates</h2>
              <p>
                Informal estimates or budgetary ranges provided through our website or preliminary discussions are indicative and non-binding until formalized through an executed Statement of Work detailing functional requirements, deliverables, milestones, and payment schedules.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property Ownership</h2>
              <p>
                Unless explicitly agreed otherwise in writing, upon full payment of agreed project milestone invoices, all custom developed source code, design artifacts, and schemas created specifically for the client transfer 100% to the client's ownership.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">4. Limitation of Liability</h2>
              <p>
                Software solutions are engineered to high professional standards and tested rigorously. Mitraweb Consulting provides defined warranty support windows as specified in individual client contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">5. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising out of website usage or contracts are subject to the exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
