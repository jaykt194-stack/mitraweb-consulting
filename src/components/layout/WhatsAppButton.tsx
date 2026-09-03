"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with Mitraweb Consulting on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white/20 text-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
