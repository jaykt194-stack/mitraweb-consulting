import React from "react";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyMitraweb from "@/components/sections/WhyMitraweb";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TechEcosystem from "@/components/sections/TechEcosystem";
import CaseStudyHighlights from "@/components/sections/CaseStudyHighlights";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { globalFAQs } from "@/data/faqData";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesGrid />
      <WhyMitraweb />
      <ProcessTimeline />
      <IndustriesSection />
      <TechEcosystem />
      <CaseStudyHighlights />
      <FAQAccordion
        items={globalFAQs.slice(0, 6)}
        title="Clear Answers About How We Build Software"
        subtitle="Transparent answers regarding intellectual property, engineering methodologies, budget guidelines, and delivery speed."
      />
      <FinalCTA />
    </>
  );
}
