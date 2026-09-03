import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MessageSquare, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Value Statement & Quick Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-brand-900 border border-slate-700">
                <Image
                  src="/images/logo.png"
                  alt="Mitraweb Consulting"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Mitraweb<span className="text-blue-500">.</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1">
                  Consulting
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Mitraweb Consulting is an enterprise technology partner delivering custom software, scalable web applications, mobile apps, business automation, and healthcare digital platforms engineered around real operational needs.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 100% IP & Code Ownership
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Strict NDA & Security
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Contact Box */}
            <div className="sm:col-span-3 bg-brand-900/60 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Have a software project in mind?</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Schedule a confidential technical discovery call with our engineering leaders.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: Structured Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800/80">
          {/* Company Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Company</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="hover:text-blue-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Services</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services/custom-software-development" className="hover:text-blue-400 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-blue-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-blue-400 transition-colors">
                  E-commerce Systems
                </Link>
              </li>
              <li>
                <Link href="/services/api-development-integration" className="hover:text-blue-400 transition-colors">
                  API & Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="hover:text-blue-400 transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-blue-400 transition-colors">
                  UI/UX Product Design
                </Link>
              </li>
              <li>
                <Link href="/services/software-maintenance" className="hover:text-blue-400 transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Target Industries */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Industries</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/industries/healthcare"
                  className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Healthcare Software</span>
                  <span className="text-[9px] uppercase font-bold bg-rose-950 text-rose-300 border border-rose-800/80 px-1.5 py-0.5 rounded">
                    Focus
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="hover:text-blue-400 transition-colors">
                  Logistics & Fleet
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-blue-400 transition-colors">
                  Manufacturing & MES
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce" className="hover:text-blue-400 transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/startups" className="hover:text-blue-400 transition-colors">
                  Startups & Scaleups
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-400 transition-colors text-xs text-blue-400 pt-1 block">
                  All Industries &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="col-span-2 lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Direct Connect</p>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>
              <p className="text-xs text-slate-500 pt-1">
                Consultations available for clients across India, North America, Europe, and the Middle East.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
