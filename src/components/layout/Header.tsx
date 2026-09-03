"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Network,
  Cpu,
  Palette,
  Wrench,
  Activity,
  Truck,
  Factory,
  Store,
  Rocket,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const serviceIcons: Record<string, React.ReactNode> = {
    "custom-software-development": <Code2 className="w-5 h-5 text-blue-600" />,
    "web-development": <Globe className="w-5 h-5 text-indigo-600" />,
    "mobile-app-development": <Smartphone className="w-5 h-5 text-emerald-600" />,
    "ecommerce-development": <ShoppingCart className="w-5 h-5 text-amber-600" />,
    "api-development-integration": <Network className="w-5 h-5 text-cyan-600" />,
    "business-automation": <Cpu className="w-5 h-5 text-violet-600" />,
    "ui-ux-design": <Palette className="w-5 h-5 text-pink-600" />,
    "software-maintenance": <Wrench className="w-5 h-5 text-slate-600" />,
  };

  const industryIcons: Record<string, React.ReactNode> = {
    healthcare: <Activity className="w-5 h-5 text-rose-600" />,
    logistics: <Truck className="w-5 h-5 text-amber-600" />,
    manufacturing: <Factory className="w-5 h-5 text-blue-600" />,
    ecommerce: <Store className="w-5 h-5 text-purple-600" />,
    startups: <Rocket className="w-5 h-5 text-emerald-600" />,
  };

  const services = siteConfig.navLinks.find((l) => l.title === "Services")?.children || [];
  const industries = siteConfig.navLinks.find((l) => l.title === "Industries")?.children || [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center bg-brand-900 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Mitraweb Consulting Logo"
                width={40}
                height={40}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-sans">
                Mitraweb<span className="text-blue-600">.</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 -mt-1">
                Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/" ? "text-blue-600 bg-blue-50/60" : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/about" ? "text-blue-600 bg-blue-50/60" : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-blue-600 bg-blue-50/60"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-4 grid grid-cols-2 gap-2">
                    {services.map((item) => {
                      const slug = item.href.split("/").pop() || "";
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-2 rounded-md bg-slate-100/80 group-hover:bg-white group-hover:shadow-xs transition-colors shrink-0">
                            {serviceIcons[slug] || <Code2 className="w-5 h-5 text-blue-600" />}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="col-span-2 pt-2 mt-2 border-t border-slate-100 flex items-center justify-between px-2">
                      <span className="text-xs text-slate-500">Looking for an end-to-end software partnership?</span>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/industries")
                    ? "text-blue-600 bg-blue-50/60"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
                aria-expanded={industriesOpen}
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-4 space-y-1">
                    {industries.map((item) => {
                      const slug = item.href.split("/").pop() || "";
                      const isHealthcare = slug === "healthcare";
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors group ${
                            isHealthcare ? "bg-rose-50/40 hover:bg-rose-50/80 border border-rose-100/60" : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="p-2 rounded-md bg-slate-100 group-hover:bg-white group-hover:shadow-xs transition-colors shrink-0">
                            {industryIcons[slug] || <Activity className="w-5 h-5 text-rose-600" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </span>
                              {isHealthcare && (
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
                                  Strategic Focus
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between px-2">
                      <span className="text-xs text-slate-500">Engineered for domain-specific workflows</span>
                      <Link
                        href="/industries"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        All Industries <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/portfolio")
                  ? "text-blue-600 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/case-studies"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/case-studies")
                  ? "text-blue-600 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-blue-600 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/contact"
                  ? "text-blue-600 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors py-2 px-2.5 rounded-md hover:bg-slate-50"
              title="Call our technology advisory team"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all duration-150"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/request-a-quote"
              className="text-xs font-semibold px-3 py-1.5 bg-blue-600 text-white rounded-md shadow-xs"
            >
              Start Project
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="px-4 pt-3 pb-8 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/60 rounded-lg">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/60 rounded-lg">
                  {industries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    className="block px-3 py-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    View All Industries &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Portfolio
            </Link>
            <Link
              href="/case-studies"
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Contact Us
            </Link>

            <div className="pt-4 mt-4 border-t border-slate-200 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Direct: {siteConfig.phone}</span>
              </a>
              <Link
                href="/request-a-quote"
                className="block text-center w-full py-3 px-4 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
