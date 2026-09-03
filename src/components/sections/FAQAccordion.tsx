"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQItem } from "@/types";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "purple" | "rose";
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to common questions regarding our software engineering processes, intellectual property, pricing, and timelines.",
  badge = "Clarity & FAQs",
  badgeVariant = "default",
}: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={badge}
          badgeVariant={badgeVariant}
          title={title}
          subtitle={subtitle}
        />

        <div className="mt-12 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 hover:text-blue-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
