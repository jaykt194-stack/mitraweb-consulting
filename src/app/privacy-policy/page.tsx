import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Mitraweb Consulting",
  description: "Privacy policy and data governance practices at Mitraweb Consulting.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="mt-8 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: September 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-6">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">1. Commitment to Confidentiality</h2>
              <p>
                Mitraweb Consulting ("we", "our", or "us") respects the privacy and confidentiality of our prospective and active clients, partners, and website visitors. This Privacy Policy details how we handle information submitted through our website (<span className="text-blue-600">{siteConfig.url}</span>).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
              <p>
                We only collect information voluntarily provided by visitors when submitting project consultations, request-a-quote forms, or contacting us directly via email or telephone. This typically includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Full name and contact details (email address, phone number)</li>
                <li>Company name and industry vertical</li>
                <li>Project requirements, estimated budgets, and operational workflows</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">3. Non-Disclosure & Intellectual Property</h2>
              <p>
                We recognize that project inquiries often contain sensitive commercial ideas, proprietary workflows, and confidential data. All submissions are treated as confidential. We regularly execute formal mutual Non-Disclosure Agreements (NDAs) prior to receiving detailed software architecture briefs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">4. Data Sharing & Third Parties</h2>
              <p>
                We do not sell, rent, lease, or monetize client information to third-party advertisers or brokers. Information is only utilized by our internal engineering and project consulting staff to evaluate scope and provide technology recommendations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">5. Contact Information</h2>
              <p>
                If you have inquiries regarding our privacy standards, please contact:
              </p>
              <p className="font-semibold text-slate-900">
                Data Privacy Officer &bull; Mitraweb Consulting<br />
                Email: {siteConfig.email}<br />
                Telephone: {siteConfig.phone}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
