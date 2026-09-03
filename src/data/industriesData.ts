import { IndustryItem } from "@/types";

export const industriesData: IndustryItem[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare Software Solutions",
    metaTitle: "Healthcare Software Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting develops secure, compliant healthcare software solutions for hospitals, clinics, diagnostic chains, and healthtech providers.",
    headline: "Healthcare Software Solutions Built for Modern Healthcare Operations",
    subheadline:
      "Eliminate patient workflow bottlenecks, streamline diagnostic and lab operations, prevent revenue leakage, and unify clinical records into reliable digital systems.",
    overview:
      "Healthcare facilities and diagnostic providers face tremendous operational complexity. Staff manage hundreds of patient visits daily across scheduling, clinical consultations, laboratory diagnostic equipment, pharmacy dispensing, and insurance claim processing. When these functions operate in isolation, patient wait times increase, clinical staff burn out, and revenue leaks through uncollected bills. Mitraweb Consulting engineers reliable, HIPAA/ABDM-aligned healthcare software platforms that bring operational cohesion, clinical efficiency, and data integrity to hospitals, clinics, and diagnostic chains.",
    challenges: [
      {
        title: "Disconnected Clinical & Administrative Systems",
        description:
          "Doctors, receptionists, lab technicians, and pharmacists operate on separate siloed applications, requiring duplicate data entry and causing frequent miscommunications.",
      },
      {
        title: "Diagnostic & Laboratory Workflow Bottlenecks",
        description:
          "Manual entry of lab analyzer results introduces transcription errors, delays report delivery to doctors, and frustrates patients waiting for critical diagnostic findings.",
      },
      {
        title: "Billing Inaccuracies & Insurance/TPA Revenue Leakage",
        description:
          "Uncaptured procedures, unbilled consumables, and rejected insurance claims lead to massive administrative overhead and substantial financial leakage.",
      },
      {
        title: "Patient Appointment Scheduling Friction",
        description:
          "Chaotic queue management and no-shows create congested waiting rooms, delayed doctor rounds, and degraded patient satisfaction.",
      },
      {
        title: "Scattered Patient Records & Lack of Interoperability",
        description:
          "Inability to securely access longitudinal patient history across multi-branch hospital networks compromises clinical decision-making speed.",
      },
    ],
    solutions: [
      {
        title: "Hospital Information Management Systems (HIMS)",
        description:
          "Modular HIMS integrating OPD/IPD registration, bed allocation, doctor scheduling, nursing stations, and automated billing into a single operational interface.",
      },
      {
        title: "Laboratory Information Management Systems (LIMS)",
        description:
          "Bidirectional LIS/LIMS interfacing with diagnostic lab analyzers (ASTM / HL7 protocols) for automated test result capture, barcode tracking, and instant PDF report dispatch.",
      },
      {
        title: "Electronic Health Records (EHR) & Clinical Workstations",
        description:
          "Fast, structured clinical documentation tools allowing physicians to review vitals, prescribe medications, and view historical diagnostics in seconds.",
      },
      {
        title: "Patient Engagement & Teleconsultation Portals",
        description:
          "Branded patient web portals and mobile apps for self-service appointment booking, digital test report downloads, and secure video consultations.",
      },
      {
        title: "Pharmacy & Medical Inventory Management",
        description:
          "Real-time batch-level inventory tracking, expiry alerts, reorder thresholds, and direct integration with inpatient treatment plans.",
      },
    ],
    keyCapabilities: [
      "ASTM & HL7 device interfacing for bi-directional lab equipment communication",
      "Role-based clinical access controls and granular permission hierarchies",
      "ABDM (Ayushman Bharat Digital Mission) architecture readiness and health ID integration",
      "Automated WhatsApp & SMS dispatch for instant diagnostic report delivery",
      "Centralized multi-branch reporting dashboards for hospital administrators",
      "Audit logging for every patient record access, modification, and billing transaction",
    ],
    technologies: [
      "HL7 / FHIR Standards",
      "Next.js / React",
      "Node.js & Python",
      "PostgreSQL with TimescaleDB",
      "Redis Cache",
      "Encrypted Cloud Storage (S3)",
      "Docker & Kubernetes",
    ],
    faqs: [
      {
        question: "Can your healthcare software interface directly with our lab diagnostic machines?",
        answer:
          "Yes. We specialize in bidirectional laboratory interfacing using HL7, ASTM, and serial/TCP protocols. Test orders are sent directly from the software to analyzers, and diagnostic results are automatically ingested into patient records without manual re-typing.",
      },
      {
        question: "How do you protect sensitive patient health information (PHI)?",
        answer:
          "We implement bank-grade security protocols: AES-256 encryption at rest, TLS 1.3 in transit, granular role-based access control, session timeouts, and immutable audit logs that record every view and change to patient records.",
      },
      {
        question: "Can the system support multi-center diagnostic chains or multi-specialty hospitals?",
        answer:
          "Yes. Our architectures are engineered for multi-tenant and multi-location deployment, enabling centralized management of master rate lists, consolidated revenue reports, and seamless patient history lookup across all branches.",
      },
      {
        question: "Do you offer migration support from our existing legacy hospital software?",
        answer:
          "Yes. We construct custom ETL (Extract, Transform, Load) pipelines to sanitize, validate, and migrate historical patient data, doctor master records, and inventory lists from legacy databases into the new platform without clinical downtime.",
      },
    ],
  },
  {
    id: "logistics",
    slug: "logistics",
    title: "Logistics & Supply Chain Software Solutions",
    metaTitle: "Logistics Software Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting engineers custom logistics, fleet management, and supply chain software solutions that optimize routing and provide end-to-end cargo visibility.",
    headline: "Logistics Software Engineered for Operational Precision & Real-Time Visibility",
    subheadline:
      "Automate fleet dispatch, track shipments in real-time, streamline warehouse fulfillment, and eliminate freight billing discrepancies.",
    overview:
      "Logistics operations thrive or falter on time-critical coordination. Delays in fleet assignment, poor route planning, manual proof of delivery handoffs, and disconnected warehouse data result in escalating fuel expenses and missed delivery SLAs. Mitraweb Consulting builds custom transportation management systems (TMS), warehouse management tools (WMS), and telematics tracking platforms that deliver 100% operational transparency across the supply chain.",
    challenges: [
      {
        title: "Blind Spots in Real-Time Fleet Visibility",
        description:
          "Dispatchers rely on manual driver phone calls to determine vehicle locations, shipment statuses, and expected arrival times.",
      },
      {
        title: "Inefficient Route Planning & Fuel Waste",
        description:
          "Fixed, unoptimized routes fail to adjust for traffic conditions, vehicle weight limits, or multi-stop delivery windows.",
      },
      {
        title: "Paper-Based Proof of Delivery (POD) Bottlenecks",
        description:
          "Physical delivery receipts take days to reach the billing office, delaying invoice generation and severely impacting cash flow.",
      },
      {
        title: "Warehouse Disorganization & Inventory Discrepancies",
        description:
          "Lack of barcode-driven bin location tracking leads to misplaced inventory, picking delays, and inaccurate fulfillment rates.",
      },
    ],
    solutions: [
      {
        title: "Transportation Management Systems (TMS)",
        description:
          "Centralized platform for automated load matching, carrier rate negotiation, dispatch scheduling, and consolidated billing.",
      },
      {
        title: "Real-Time Fleet & Telematics Tracking",
        description:
          "GPS hardware integration, geofence trigger alerts, driver behavior analytics, and temperature monitoring for cold chain transit.",
      },
      {
        title: "Mobile Driver App & Digital ePOD",
        description:
          "Mobile application with turn-by-turn routing, instant digital signature capture, photo damage verification, and instant billing trigger.",
      },
      {
        title: "Warehouse Management Systems (WMS)",
        description:
          "Barcode-driven inventory put-away, optimized batch pick-and-pack workflows, and automated dock scheduling.",
      },
    ],
    keyCapabilities: [
      "Real-time GPS tracking and geofenced milestone notifications",
      "Dynamic multi-stop route optimization algorithms",
      "Digital Proof of Delivery (ePOD) with instant invoice generation",
      "Driver performance scoring and fuel consumption analytics",
      "Integrations with FASTag, toll APIs, and major courier 3PLs",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "PostGIS / PostgreSQL",
      "Leaflet / Mapbox",
      "Redis Pub/Sub",
      "AWS IoT Core",
    ],
    faqs: [
      {
        question: "Can your system integrate with third-party GPS hardware devices installed in our trucks?",
        answer:
          "Yes. We support TCP/UDP socket listeners and standard telematics protocols to ingest telemetry data from virtually all aftermarket GPS trackers and AIS-140 compliant devices.",
      },
      {
        question: "How does digital Proof of Delivery accelerate billing cycles?",
        answer:
          "Once the consignee signs on the driver's mobile device, an authenticated timestamped PDF with photo proof is instantly uploaded to your central server, triggering automated invoice dispatch to the customer immediately.",
      },
      {
        question: "Can the platform manage subcontracted or market vehicle fleets?",
        answer:
          "Yes. The platform provides specialized workflows for third-party market vehicle onboarding, driver verification, trip advance tracking, and trip settlement reconciliation.",
      },
      {
        question: "Is the logistics software usable in areas with weak cellular coverage?",
        answer:
          "Yes. The driver mobile app works in full offline mode, caching GPS checkpoints, signatures, and photos locally, then syncing automatically upon reconnecting to cellular networks.",
      },
    ],
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing Software Solutions",
    metaTitle: "Manufacturing Software Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting engineers custom manufacturing execution systems (MES), production tracking, and inventory platforms for industrial operations.",
    headline: "Manufacturing Software Built for Shop Floor Control & Production Agility",
    subheadline:
      "Connect machines, operators, and ERPs to eliminate production bottlenecks, monitor scrap rates, and maintain continuous quality compliance.",
    overview:
      "Industrial manufacturing environments cannot afford production surprises. Machine downtime, inventory stockouts of raw materials, manual work-order tracking, and delayed quality control inspections erode margins and lead to missed customer ship dates. Mitraweb Consulting builds custom manufacturing execution software (MES), shop floor management portals, and machine integration systems that give plant managers real-time visibility into overall equipment effectiveness (OEE).",
    challenges: [
      {
        title: "Paper Travelers & Manual Work Order Tracking",
        description:
          "Production tracking via physical paper clipboards results in lost job sheets, untracked work-in-progress (WIP), and delayed visibility.",
      },
      {
        title: "Unexpected Machine Downtime & Idle Operators",
        description:
          "Lack of automated equipment monitoring means maintenance is reactive rather than preventive, leading to costly line stoppages.",
      },
      {
        title: "Inaccurate Bill of Materials (BOM) & Raw Material Waste",
        description:
          "Disconnect between design engineering and shop floor consumption causes scrap rate spikes and material inventory discrepancies.",
      },
      {
        title: "Cumbersome Quality Compliance & Traceability Audits",
        description:
          "Assembling batch traceability records during customer audits requires days of digging through paper filing cabinets.",
      },
    ],
    solutions: [
      {
        title: "Manufacturing Execution Systems (MES)",
        description:
          "Digital work order scheduling, real-time stage-by-stage WIP tracking, operator station touchscreens, and scrap logging.",
      },
      {
        title: "Overall Equipment Effectiveness (OEE) Dashboards",
        description:
          "Automated capture of machine uptime, speed losses, cycle counts, and micro-stoppages visualized on plant floor TV displays.",
      },
      {
        title: "End-to-End Batch & Lot Traceability",
        description:
          "Unbroken digital pedigree linking raw material supplier lot numbers to finished serialized goods for instant audit readiness.",
      },
      {
        title: "Preventive Maintenance Management (CMMS)",
        description:
          "Usage-based maintenance scheduling, automated spare parts reorder triggers, and digital machine maintenance logs.",
      },
    ],
    keyCapabilities: [
      "Real-time shop floor workstation interfaces optimized for touchscreen input",
      "BOM version control and automated consumption variance tracking",
      "Batch genealogical traceability for ISO and regulatory compliance",
      "Sensor/PLC integration via Modbus and MQTT industrial protocols",
      "Integration with corporate ERPs including SAP, Oracle, and Microsoft Dynamics",
    ],
    technologies: [
      "Next.js / React",
      "Python / FastAPI",
      "TimescaleDB / PostgreSQL",
      "MQTT & WebSockets",
      "Docker",
      "Tailwind CSS",
    ],
    faqs: [
      {
        question: "Can your software connect to older industrial machinery lacking digital ports?",
        answer:
          "Yes. We work with low-cost IoT edge gateways and digital pulse counters to capture machine cycle counts and runtime hours without requiring expensive controller replacements.",
      },
      {
        question: "How does the system ensure operators actually log production steps?",
        answer:
          "We design simplified shop-floor interfaces with barcode/RFID badge scanning and large touch targets, requiring minimal taps per operation so logging takes under 5 seconds.",
      },
      {
        question: "Can the software integrate with our existing accounting/ERP software?",
        answer:
          "Yes. We build scheduled and event-driven data bridges to post finished goods receipts, scrap summaries, and raw material issuances directly into your ERP ledger.",
      },
      {
        question: "Does the system support ISO traceability requirements?",
        answer:
          "Yes. The platform generates instant bidirectional traceability reports: you can query any finished batch number to view exact raw material lots, machine IDs, and operator timestamps.",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-commerce & Retail Software Solutions",
    metaTitle: "E-commerce Software Solutions | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting builds high-scale custom e-commerce software, omnichannel platforms, and automated order fulfillment systems.",
    headline: "Custom E-commerce Software Built for High Volume & Omnichannel Growth",
    subheadline:
      "Supercharge your digital commerce with lightning-fast frontends, intelligent inventory allocation, and automated fulfillment workflows.",
    overview:
      "Rapidly scaling retail brands quickly outgrow standard e-commerce templates. As SKU counts climb into the tens of thousands and sales channels multiply across web storefronts, mobile apps, physical stores, and marketplaces, inventory discrepancies and slow page performance stall growth. Mitraweb Consulting builds custom commerce engines and headless storefronts engineered for high-concurrency traffic and automated multi-channel operations.",
    challenges: [
      {
        title: "Catalog Performance Degradation Under Heavy Traffic",
        description:
          "Traditional template stores suffer severe database latency during flash sales and peak festival marketing campaigns.",
      },
      {
        title: "Omnichannel Inventory Conflicts & Stockouts",
        description:
          "Selling across marketplaces (Amazon, Flipkart) and own storefronts without instant sync causes overselling and penalties.",
      },
      {
        title: "Checkout Drop-offs from Inflexible Payment Flows",
        description:
          "Lack of instant UPI, localized EMI options, or customized one-click checkout flows reduces checkout conversion.",
      },
      {
        title: "Complex B2B Tiered Wholesale Requirements",
        description:
          "Standard retail e-commerce stores cannot manage custom wholesale price lists, credit limits, or tiered bulk discounts.",
      },
    ],
    solutions: [
      {
        title: "Headless Commerce Architecture",
        description:
          "Blazing fast Next.js frontends decoupled from commerce backends, delivering sub-second page transitions and superior Google Core Web Vitals.",
      },
      {
        title: "Centralized Omnichannel Inventory Hub",
        description:
          "Real-time inventory orchestration allocating stock automatically across storefronts, marketplaces, and physical retail POS.",
      },
      {
        title: "Custom B2B & Wholesale Buying Portals",
        description:
          "Gated wholesale portals with customer-specific pricing catalogs, net payment terms, bulk CSV ordering, and quote negotiation.",
      },
      {
        title: "Automated Returns & Exchange Management",
        description:
          "Self-service customer return workflows with automated carrier pickup scheduling and quality inspection status tracking.",
      },
    ],
    keyCapabilities: [
      "Sub-second First Contentful Paint and instant catalog filtering",
      "Real-time webhook synchronization across multiple sales channels",
      "Dynamic personalized promotion and cross-sell engines",
      "Optimized single-step checkout with address autofill and UPI deep linking",
      "PCI-DSS compliant payment tokenization and fraud detection triggers",
    ],
    technologies: [
      "Next.js / React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Elasticsearch / Meilisearch",
      "Razorpay / Stripe",
      "Shiprocket API",
    ],
    faqs: [
      {
        question: "Why should we choose custom headless e-commerce over standard Shopify themes?",
        answer:
          "Headless e-commerce allows complete freedom over user experience, zero theme bloat, sub-second load speeds, and significantly better SEO and conversion rates. Furthermore, you avoid restrictive app subscription fees as your order volume surges.",
      },
      {
        question: "Can you synchronize inventory in real time across our website and retail stores?",
        answer:
          "Yes. Our centralized inventory hub handles bidirectional webhook synchronization with physical point-of-sale (POS) systems and warehouses, preventing overselling.",
      },
      {
        question: "How do you ensure the site stays fast during high-traffic flash sales?",
        answer:
          "We engineer edge caching on global CDNs, decouple read-heavy catalog searches from write transactions, and utilize Redis in-memory caches to withstand 10x traffic spikes effortlessly.",
      },
      {
        question: "Can we integrate automated courier allocation to select the cheapest shipping partner?",
        answer:
          "Yes. We integrate multi-carrier aggregators with intelligent routing rules that automatically assign orders to the fastest or most cost-effective courier based on pincode.",
      },
    ],
  },
  {
    id: "startups",
    slug: "startups",
    title: "Software Solutions for Startups & Scaleups",
    metaTitle: "Software Development for Startups | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting partners with ambitious startups to build scalable MVPs, robust product architectures, and enterprise-grade software platforms.",
    headline: "Engineering Scalable MVPs and Digital Products for Ambitious Startups",
    subheadline:
      "Ship your product to market faster without sacrificing architectural integrity, code quality, or long-term scalability.",
    overview:
      "Startups face a difficult balancing act: you need to launch quickly to validate customer demand, but taking reckless technical shortcuts creates technical debt that causes product rewrites as soon as you gain traction. Mitraweb Consulting acts as your seasoned technical partner. We architect clean, scalable MVPs using modern technology stacks, ensuring you can onboard your first 10,000 users without refactoring your foundation.",
    challenges: [
      {
        title: "Slow Time to Market Burning Runway",
        description:
          "Spending months hiring developers and dealing with vague scoping leads to delayed launches and depleted capital.",
      },
      {
        title: "Fragile Spaghetti Code Requiring Total Rewrites",
        description:
          "Rushed freelance code built without typing, automated tests, or modular architecture collapses under initial user load.",
      },
      {
        title: "Over-Engineering Microservices Prematurely",
        description:
          "Building complex distributed architectures before product-market fit drains engineering velocity and multiplies cloud bills.",
      },
      {
        title: "Inability to Provide Clean Due Diligence for Investors",
        description:
          "Prospective investors discover security loopholes, undocumented APIs, and messy repositories during technical audits.",
      },
    ],
    solutions: [
      {
        title: "Pragmatic MVP Scoping & Architecture",
        description:
          "We ruthlessly prioritize core value-generating features, defining an architecture that ships in 8-12 weeks with zero throwaway code.",
      },
      {
        title: "Full-Stack Web & Mobile Product Development",
        description:
          "Production-ready TypeScript frontends, clean backend APIs, and modern databases built to professional enterprise standards.",
      },
      {
        title: "Investor-Grade Technical Due Diligence Readiness",
        description:
          "Clean git history, documented architecture diagrams, automated CI/CD pipelines, and secure cloud provisioning on AWS/GCP.",
      },
      {
        title: "Seamless In-House Team Handover",
        description:
          "Comprehensive technical documentation, recorded walkthroughs, and developer onboarding when you are ready to hire internal staff.",
      },
    ],
    keyCapabilities: [
      "Rapid prototyping and clickable design sprints in Figma",
      "Modern monolithic architecture that scales smoothly to high concurrency before microservices are needed",
      "Automated testing and continuous integration (CI/CD) pipelines",
      "Enterprise security practices implemented from day one",
      "Transparent Jira/Linear sprint boards with weekly client demo calls",
    ],
    technologies: [
      "Next.js / React",
      "TypeScript",
      "Node.js / Python",
      "PostgreSQL",
      "Tailwind CSS",
      "Supabase / Firebase / AWS",
    ],
    faqs: [
      {
        question: "How fast can you build and launch an MVP?",
        answer:
          "Depending on project complexity, a focused, production-grade MVP typically takes between 6 to 12 weeks from initial scoping to live user onboarding.",
      },
      {
        question: "Do we own all the code and intellectual property?",
        answer:
          "Yes, 100%. All repositories, cloud accounts, database schemas, and intellectual property are created under your organization from day one.",
      },
      {
        question: "What happens when we want to hire an internal development team?",
        answer:
          "We structure all codebases with strict TypeScript types, clean linting rules, and documentation so that transitioning to an internal engineering team is completely friction-free.",
      },
      {
        question: "Can you sign a Non-Disclosure Agreement (NDA) before we share our idea?",
        answer:
          "Yes. We are happy to execute an NDA to ensure your proprietary business concept and intellectual property remain strictly confidential.",
      },
    ],
  },
];
