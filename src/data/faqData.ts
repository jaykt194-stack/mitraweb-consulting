import { FAQItem } from "@/types";

export const globalFAQs: FAQItem[] = [
  {
    question: "How much does a custom software development project cost?",
    answer:
      "Custom software costs vary based on project scope, architecture complexity, third-party integrations, and performance benchmarks. Targeted workflow modules and MVPs typically range from ₹3L to ₹10L, while comprehensive multi-tier enterprise systems or healthcare platforms range from ₹10L to ₹50L+. We provide transparent, itemized fixed-scope estimates or flexible sprint-based retainers.",
    category: "Cost & Scoping",
  },
  {
    question: "How long does it take to develop and launch a custom software application?",
    answer:
      "A focused Minimum Viable Product (MVP) or targeted business automation workflow typically deploys within 6 to 10 weeks. Larger enterprise platforms, multi-center hospital systems, or full-scale SaaS platforms usually take between 12 to 24 weeks. We work in bi-weekly agile sprints, demonstrating working software at every milestone.",
    category: "Timelines & Delivery",
  },
  {
    question: "Can Mitraweb Consulting work with or modernize our existing legacy software?",
    answer:
      "Yes. A significant portion of our work involves refactoring legacy codebases, building secure API layers on top of existing databases, or migrating fragile desktop/spreadsheet workflows into modern cloud applications without interrupting active business operations.",
    category: "Technical Capabilities",
  },
  {
    question: "Who owns the source code and intellectual property (IP)?",
    answer:
      "You retain 100% full intellectual property ownership. Upon project delivery and milestone sign-off, all Git repositories, architecture diagrams, database schemas, and documentation are transferred completely to your organization.",
    category: "Legal & IP",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes, absolutely. We prioritize client confidentiality and are happy to execute standard mutual or client-provided NDAs before discussing proprietary workflows, project briefs, or business models.",
    category: "Legal & IP",
  },
  {
    question: "What happens after the software is deployed to production?",
    answer:
      "We provide post-launch warranty support with every engagement, followed by flexible monthly software maintenance and SLA retainers. Our support covers infrastructure monitoring, security patching, cloud management, and iterative feature development.",
    category: "Support & Maintenance",
  },
  {
    question: "What technologies does Mitraweb Consulting use?",
    answer:
      "We select battle-tested, modern, scalable technology stacks: TypeScript, React, Next.js, Node.js, Python (FastAPI/Django), React Native, Flutter, PostgreSQL, Redis, Docker, and cloud infrastructure on AWS, Google Cloud, and Azure.",
    category: "Technical Capabilities",
  },
  {
    question: "Can you build software compliant with healthcare data security requirements?",
    answer:
      "Yes. Our healthcare engineering practice designs software compliant with HIPAA guidelines and ABDM (Ayushman Bharat Digital Mission) standards, featuring end-to-end encryption, strict role-based access controls, and immutable clinical audit trails.",
    category: "Healthcare Software",
  },
];
