import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Cookie Policy | Mitraweb Consulting",
  description: "Information regarding cookie usage and analytics on the Mitraweb Consulting website.",
  alternates: {
    canonical: `${siteConfig.url}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

        <div className="mt-8 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: September 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-6">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit websites. They help websites remember preferences, understand user navigation patterns, and improve loading performance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">2. How We Use Cookies</h2>
              <p>
                Mitraweb Consulting uses minimal, privacy-conscious cookies solely for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><span className="font-semibold text-slate-900">Essential Technical Cookies:</span> Necessary for website security, session persistence, and anti-spam verification.</li>
                <li><span className="font-semibold text-slate-900">Analytics Cookies:</span> Aggregated, anonymized performance measurement (such as Google Analytics) to understand which technical service pages are most valuable to visitors.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">3. Managing Your Preferences</h2>
              <p>
                You can control or disable cookies through your browser settings at any time. Disabling cookies will not affect your ability to browse our services or contact our team.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
