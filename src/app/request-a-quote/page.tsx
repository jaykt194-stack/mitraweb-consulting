"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/components/seo/Analytics";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send,
  Sparkles,
  FileCheck,
} from "lucide-react";

export default function RequestAQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    // Step 1: Scope
    industry: "Healthcare & Diagnostics",
    projectType: "Custom Software Development",
    targetPlatforms: ["Web Application"],
    requiredFeatures: ["User Authentication / RBAC", "API Integration"],
    // Step 2: Details & Budget
    budget: "₹10L–₹20L",
    timeline: "3 to 6 Months",
    currentTech: "",
    description: "",
    // Step 3: Contact
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    referralSource: "Google Search",
    honeypot: "",
  });

  const availableIndustries = [
    "Healthcare & Diagnostics",
    "Logistics & Supply Chain",
    "Manufacturing & Industrial",
    "E-commerce & Retail",
    "Startups & SaaS",
    "Financial & Professional Services",
    "Other",
  ];

  const availableProjectTypes = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development (iOS/Android)",
    "Business Process Automation",
    "API Development & Integration",
    "Headless E-commerce Storefront",
    "UI/UX Product Redesign",
    "System Migration / Modernization",
  ];

  const availablePlatforms = [
    "Web Application",
    "Mobile App (iOS)",
    "Mobile App (Android)",
    "Cloud Backend / API Gateway",
    "Desktop / Kiosk Workstation",
  ];

  const commonFeatures = [
    "User Authentication / RBAC",
    "Automated PDF Invoicing & Reports",
    "WhatsApp / SMS Notifications",
    "Payment Gateway Integration",
    "API Integration (ERP / CRM)",
    "Real-Time Telemetry / WebSockets",
    "Offline-First Data Storage",
    "Admin Analytics Dashboard",
  ];

  const budgetTiers = [
    "Below ₹5L",
    "₹5L–₹10L",
    "₹10L–₹20L",
    "₹20L–₹50L",
    "₹50L+",
  ];

  const timelineOptions = [
    "Immediate (Under 4 Weeks)",
    "1 to 3 Months",
    "3 to 6 Months",
    "Flexible / Scoping Phase",
  ];

  const togglePlatform = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      targetPlatforms: prev.targetPlatforms.includes(platform)
        ? prev.targetPlatforms.filter((p) => p !== platform)
        : [...prev.targetPlatforms, platform],
    }));
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      requiredFeatures: prev.requiredFeatures.includes(feature)
        ? prev.requiredFeatures.filter((f) => f !== feature)
        : [...prev.requiredFeatures, feature],
    }));
  };

  const validateStep = (step: number) => {
    setErrorMessage("");
    if (step === 1) {
      if (formData.targetPlatforms.length === 0) {
        setErrorMessage("Please select at least one target platform.");
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!formData.description.trim()) {
        setErrorMessage("Please provide a brief description of your project requirements.");
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setErrorMessage("Please provide your Name, Email, and Phone number.");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage("Please enter a valid work email address.");
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setStatus("success");
        trackEvent("quote_request_submission", {
          industry: formData.industry,
          budget: formData.budget,
          projectType: formData.projectType,
        });
      } else {
        setStatus("error");
        setErrorMessage(res.error || "Failed to submit quote request.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out directly.");
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Request a Quote" }]} />

          <div className="mt-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Interactive Scope Estimator</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Request a Project Scope & Cost Estimate
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Complete this 3-step project scope builder to outline your technical specifications, platform needs, and delivery timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Estimator Container */}
      <section className="py-12 lg:py-20 border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === "success" ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Scope Inquiry Successfully Submitted
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A senior software architect from Mitraweb Consulting is reviewing your technical requirements and will assemble a tailored scope breakdown within 24 to 48 business hours.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1">
                <div><span className="font-bold">Project Type:</span> {formData.projectType}</div>
                <div><span className="font-bold">Estimated Budget:</span> {formData.budget}</div>
                <div><span className="font-bold">Target Platforms:</span> {formData.targetPlatforms.join(", ")}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow transition-colors"
                >
                  Return to Homepage
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
                >
                  Message Directly on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
              {/* Progress Indicator */}
              <div className="pb-8 border-b border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  <span>Step {currentStep} of 3</span>
                  <span>
                    {currentStep === 1 && "Scope & Platforms"}
                    {currentStep === 2 && "Features & Timeline"}
                    {currentStep === 3 && "Contact Details"}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Step 1: Scope & Platforms */}
              {currentStep === 1 && (
                <div className="py-6 space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Industry Vertical
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                    >
                      {availableIndustries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                    >
                      {availableProjectTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Target Platforms * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {availablePlatforms.map((plat) => {
                        const isChecked = formData.targetPlatforms.includes(plat);
                        return (
                          <button
                            type="button"
                            key={plat}
                            onClick={() => togglePlatform(plat)}
                            className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                              isChecked
                                ? "bg-blue-50 border-blue-500 text-blue-700 shadow-2xs"
                                : "border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span>{plat}</span>
                            {isChecked && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow transition-all"
                    >
                      <span>Continue to Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Features, Timeline & Budget */}
              {currentStep === 2 && (
                <div className="py-6 space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Key Required Modules & Features
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {commonFeatures.map((feat) => {
                        const isChecked = formData.requiredFeatures.includes(feat);
                        return (
                          <button
                            type="button"
                            key={feat}
                            onClick={() => toggleFeature(feat)}
                            className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all flex items-center justify-between ${
                              isChecked
                                ? "bg-blue-50 border-blue-400 text-blue-800"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span>{feat}</span>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Estimated Budget Tier
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      >
                        {budgetTiers.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Target Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current Technology or Legacy System (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.currentTech}
                      onChange={(e) => setFormData({ ...formData, currentTech: e.target.value })}
                      placeholder="e.g. Existing PHP app, Excel spreadsheets, Tally ERP, or completely greenfield"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Description & Core Problem to Solve *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Detail your operational workflow, user roles, or key business bottlenecks you want resolved."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 leading-relaxed"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous Step</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow transition-all"
                    >
                      <span>Final Step: Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details & Submit */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit} className="py-6 space-y-6">
                  {/* Honeypot */}
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
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Singhania"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. MedCare Diagnostic Network"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@medcarelabs.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Current Website (Optional)
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourcompany.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        How Did You Hear About Us?
                      </label>
                      <select
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800"
                      >
                        <option value="Google Search">Google Search</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Industry Referral / Peer">Industry Referral / Peer</option>
                        <option value="Blog / Technical Article">Blog / Technical Article</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Specifications</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-md transition-all disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <span>Processing Estimate...</span>
                      ) : (
                        <>
                          <span>Submit Scope & Request Estimate</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
