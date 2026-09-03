import { PortfolioItem } from "@/types";

export const portfolioData: PortfolioItem[] = [
  {
    id: "diagnostic-chain-lims",
    slug: "diagnostic-chain-lims",
    title: "Multi-Center Diagnostic & Laboratory Information Management Platform",
    clientIndustry: "Healthcare / Diagnostics",
    category: "Healthcare",
    summary:
      "A centralized laboratory operations platform interfacing directly with diagnostic analyzers, automating patient sample barcode tracking and digital report delivery.",
    challenge:
      "A growing regional diagnostic chain operating across 8 collection centers was struggling with paper requisition forms, manual test result data entry from biochemical analyzers, and high turnaround times for patient blood reports.",
    solution:
      "Mitraweb Consulting architected a cloud-based Laboratory Information Management System (LIMS) with bidirectional ASTM analyzer interfacing, barcode sample accessioning, automated multi-level pathologist sign-offs, and instant WhatsApp/SMS report delivery.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "ASTM Protocols", "Redis", "WhatsApp Business API", "AWS"],
    results: [
      "Analyzer-to-cloud automation eliminated 98% of manual result transcription errors",
      "Average report turnaround time reduced from 8 hours to under 2 hours",
      "Multi-center sample tracking provided 100% real-time custody visibility",
      "Automated WhatsApp report dispatch reduced receptionist phone queries by 65%",
    ],
    isFeatured: true,
  },
  {
    id: "cold-chain-logistics-telematics",
    slug: "cold-chain-logistics-telematics",
    title: "Real-Time Cold Chain Fleet & Temperature Monitoring System",
    clientIndustry: "Logistics & Supply Chain",
    category: "Automation",
    summary:
      "An IoT telematics and fleet dispatch platform monitoring temperature-sensitive pharmaceutical and perishable cargo in real time.",
    challenge:
      "A temperature-controlled logistics provider suffered frequent cargo spoilage disputes due to lack of verified, tamper-proof temperature logs during inter-city transit.",
    solution:
      "We engineered a telematics platform ingesting IoT sensor data every 30 seconds via MQTT, paired with driver mobile apps for digital proof-of-delivery and instant route anomaly alerts.",
    technologies: ["React Native", "Python / FastAPI", "TimescaleDB", "MQTT", "Leaflet Maps", "Docker"],
    results: [
      "Zero temperature-excursion spoilage incidents across 450+ tracked transit routes",
      "Digital ePOD reduced customer billing dispute resolution time by 80%",
      "Automated geofencing alerts reduced driver loading dock dwell times by 35%",
      "Consolidated route analytics optimized overall fleet fuel efficiency by 14%",
    ],
    isFeatured: true,
  },
  {
    id: "enterprise-b2b-wholesale-portal",
    slug: "enterprise-b2b-wholesale-portal",
    title: "Headless B2B Wholesale Ordering & Distributor Portal",
    clientIndustry: "Manufacturing & Distribution",
    category: "E-commerce",
    summary:
      "A custom wholesale portal replacing manual email and telephone order placement with personalized tier pricing and ERP synchronization.",
    challenge:
      "An industrial equipment supplier had over 400 authorized distributors placing orders via fragmented phone calls and spreadsheets, overwhelming sales coordinators with manual order entry.",
    solution:
      "We built a headless B2B portal integrated directly with the client's ERP, allowing distributors to view contracted credit limits, tier pricing, live inventory, and generate purchase orders directly.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST APIs", "Redis"],
    results: [
      "85% of distributors transitioned to digital ordering within 60 days of launch",
      "Order processing cycle time plummeted from 48 hours to under 15 minutes",
      "Eliminated out-of-stock ordering errors through live ERP inventory synchronization",
      "Allowed sales managers to focus on high-value client acquisition instead of order entry",
    ],
    isFeatured: true,
  },
  {
    id: "hospital-outpatient-management",
    slug: "hospital-outpatient-management",
    title: "Outpatient Queue Management & Doctor Consultation Station",
    clientIndustry: "Healthcare",
    category: "Healthcare",
    summary:
      "A smart digital OPD token system and physician consultation station eliminating hospital waiting room congestion and streamlining clinical prescriptions.",
    challenge:
      "A 200-bed hospital experienced severe waiting room congestion, delayed doctor rounds, and frequent patient complaints due to chaotic manual token management.",
    solution:
      "We developed an integrated OPD workflow system: self-service check-in kiosks, digital waiting room queue displays, a fast physician prescription pad with drug interaction warnings, and automated pharmacy notifications.",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Tailwind CSS"],
    results: [
      "Patient waiting room congestion reduced by 45% through predictive appointment time slots",
      "Average doctor consultation documentation time decreased by 3 minutes per patient",
      "Digital prescriptions eliminated pharmacy dispensing misreadings entirely",
      "Real-time OPD analytics enabled hospital directors to reallocate clinical staff dynamically",
    ],
    isFeatured: false,
  },
  {
    id: "field-workforce-service-app",
    slug: "field-workforce-service-app",
    title: "Cross-Platform Field Service & Asset Inspection Mobile App",
    clientIndustry: "Facilities & Operations",
    category: "Mobile",
    summary:
      "An offline-first mobile application empowering 200+ field service technicians to conduct scheduled equipment maintenance with checklist compliance.",
    challenge:
      "Field technicians operating in basement plant rooms and industrial zones with zero mobile connectivity lost inspection data and delayed maintenance sign-offs.",
    solution:
      "We engineered a cross-platform mobile app with an offline-first SQLite database, automated background sync, photographic proof capture, and barcode asset scanning.",
    technologies: ["React Native", "TypeScript", "SQLite", "Node.js", "AWS S3", "Docker"],
    results: [
      "100% inspection checklist completion verified before job sign-off",
      "Zero data loss in subterranean and low-connectivity customer sites",
      "Same-day client audit sign-offs replaced 2-week paper review cycles",
      "Customer equipment uptime increased by 18% through automated preventive reminders",
    ],
    isFeatured: true,
  },
  {
    id: "automated-invoice-reconciliation",
    slug: "automated-invoice-reconciliation",
    title: "Automated Multi-Vendor Invoice Parsing & Accounting Reconciliation",
    clientIndustry: "Finance & Operations",
    category: "Automation",
    summary:
      "An automated workflow engine parsing vendor invoices via OCR, matching them against purchase orders, and pushing verified records to the accounting ledger.",
    challenge:
      "Finance staff spent over 120 hours each month manually matching 3,000+ incoming supplier invoices against purchase orders and warehouse receipts.",
    solution:
      "We developed an intelligent automation pipeline using document OCR, two-way and three-way matching logic, exception flagging queues, and automated accounting API sync.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "Tesseract OCR", "REST APIs"],
    results: [
      "92% of standard invoices matched and processed without human intervention",
      "Monthly accounts payable processing time reduced from 120 hours to 10 hours",
      "Duplicate payment risks and billing discrepancies eliminated completely",
      "Early payment discounts captured from suppliers increased cash savings by 4.2%",
    ],
    isFeatured: false,
  },
];
