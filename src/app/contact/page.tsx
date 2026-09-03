"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/components/seo/Analytics";
import {
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Send,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Custom Software Development",
    budget: "₹5L–₹10L",
    description: "",
    preferredMethod: "Email",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Healthcare Software Solutions",
    "E-commerce Development",
    "API Development & Integration",
    "Business Process Automation",
    "UI/UX Product Design",
    "Software Maintenance & Support",
  ];

  const budgetOptions = [
    "Below ₹5L",
    "₹5L–₹10L",
    "₹10L–₹20L",
    "₹20L–₹50L",
    "₹50L+",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.description.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        trackEvent("contact_form_submission", {
          project_type: formData.projectType,
          budget: formData.budget,
        });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit. Please contact support directly.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out to us via email or WhatsApp.");
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Start A Conversation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Let's Build Something That Moves Your Business Forward.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Share your business requirements, existing system bottlenecks, or new software initiative. An experienced software architect will review your project and get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-card">
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Project Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Mitraweb Consulting. We have received your project details. An engineering consultant will review your requirements and respond within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          projectType: "Custom Software Development",
                          budget: "₹5L–₹10L",
                          description: "",
                          preferredMethod: "Email",
                          honeypot: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Query
                    </button>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Anti-spam honeypot (hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Health Logistics"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@apexlogistics.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            formData.budget === b
                              ? "bg-blue-50 border-blue-500 text-blue-700 shadow-2xs"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Overview & Operational Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what your business needs: workflows to automate, integrations required, expected user volume, or timeline."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 leading-relaxed"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Communication Method
                    </label>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                      {["Email", "Phone", "WhatsApp"].map((method) => (
                        <label key={method} className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredMethod"
                            value={method}
                            checked={formData.preferredMethod === method}
                            onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <span>Processing Submission...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    All conversations are strictly confidential and governed by our mutual Non-Disclosure policies.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Direct Engineering Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Prefer direct communication over filling out forms? Contact our technology advisory team directly.
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    onClick={() => trackEvent("email_click")}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Official Inquiries</div>
                      <div className="text-xs text-blue-600 group-hover:underline">{siteConfig.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    onClick={() => trackEvent("phone_click")}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Direct Telephone</div>
                      <div className="text-xs text-slate-700">{siteConfig.phone}</div>
                    </div>
                  </a>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click")}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Instant WhatsApp Message</div>
                      <div className="text-xs text-emerald-600 group-hover:underline">Chat directly with an architect</div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Business Hours: {siteConfig.businessHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>NDAs signed prior to confidential technical disclosure</span>
                  </div>
                </div>
              </div>

              {/* Scope Estimator Quick Link */}
              <div className="bg-brand-950 text-white rounded-3xl p-8 border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white">
                  Need an Itemized Project Estimate?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Use our interactive multi-step project estimator to calculate scope, target platforms, and feature complexity.
                </p>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Open Interactive Scope Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
