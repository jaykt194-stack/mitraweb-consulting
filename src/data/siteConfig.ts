import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mitraweb Consulting",
  legalName: "Mitraweb Consulting",
  tagline: "Custom Software Solutions Built Around Your Business",
  description:
    "Mitraweb Consulting is a premier technology partner delivering custom software development, enterprise web applications, mobile apps, business automation, and healthcare software solutions.",
  url: "https://mitrawebconsulting.net",
  email: "support@mitrawebconsulting.net",
  phone: "+91 8860498089",
  phoneRaw: "918860498089",
  whatsappUrl:
    "https://wa.me/918860498089?text=Hello%20Mitraweb%20Consulting%2C%20I%20would%20like%20to%20discuss%20a%20software%20project.",
  location: {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    addressDisplay: "Available for client consultations and remote engagements worldwide",
  },
  businessHours: "Monday - Friday: 9:00 AM - 6:30 PM IST",
  navLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
      children: [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          description: "Bespoke enterprise applications engineered around your exact workflows.",
        },
        {
          title: "Web Development",
          href: "/services/web-development",
          description: "High-performance web apps and portals built with modern frameworks.",
        },
        {
          title: "Mobile App Development",
          href: "/services/mobile-app-development",
          description: "Native and cross-platform iOS and Android applications.",
        },
        {
          title: "E-commerce Development",
          href: "/services/ecommerce-development",
          description: "Scalable digital commerce platforms optimized for conversion.",
        },
        {
          title: "API Development & Integration",
          href: "/services/api-development-integration",
          description: "Robust REST/GraphQL APIs and seamless third-party system integrations.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          description: "Automate manual operations, eliminate bottlenecks, and connect data.",
        },
        {
          title: "UI/UX Design",
          href: "/services/ui-ux-design",
          description: "Intuitive, high-converting interfaces crafted for modern digital products.",
        },
        {
          title: "Software Maintenance & Support",
          href: "/services/software-maintenance",
          description: "Proactive monitoring, performance tuning, and continuous enhancement.",
        },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
      children: [
        {
          title: "Healthcare Software",
          href: "/industries/healthcare",
          description: "Workflows for hospitals, clinics, diagnostic labs, and healthcare providers.",
        },
        {
          title: "Logistics Software",
          href: "/industries/logistics",
          description: "Fleet tracking, warehouse management, and dispatch automation.",
        },
        {
          title: "Manufacturing Software",
          href: "/industries/manufacturing",
          description: "Production tracking, inventory sync, and operational monitoring.",
        },
        {
          title: "E-commerce & Retail",
          href: "/industries/ecommerce",
          description: "High-concurrency online stores, inventory, and omnichannel tools.",
        },
        {
          title: "Startups & Scaleups",
          href: "/industries/startups",
          description: "MVP acceleration, scalable cloud architecture, and rapid deployment.",
        },
      ],
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
};
