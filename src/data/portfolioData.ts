import { PortfolioItem } from "@/types";

export const portfolioData: PortfolioItem[] = [
  {
    id: "eduex-school-college-lms",
    slug: "school-college-management-lms",
    title: "EduEx — School & College Management System and Comprehensive LMS",
    clientIndustry: "Education & Institutional Academia",
    category: "Education",
    liveUrl: "https://eduex.mhquickdev.com/",
    previewEmbedUrl: "https://eduex.mhquickdev.com/",
    summary:
      "A complete cloud-based educational ERP and Learning Management System (LMS) designed for schools, colleges, and training institutes featuring student admissions, digital classrooms, fee automation, and parent portals.",
    challenge:
      "Educational institutions struggle with fragmented administrative silos: manual student admission paperwork, unorganized offline fee registers, chaotic timetable scheduling, paper report cards, and lack of a cohesive digital learning environment for assignments and online testing.",
    solution:
      "Mitraweb Consulting engineered EduEx, an all-in-one institutional management and learning platform. Built with a responsive role-based architecture, it provides dedicated portals for administrators, faculty, students, and parents. Features automated online fee collection, dynamic timetable generation, student information system (SIS), gradebook automation, digital classroom assignments, attendance tracking, and parent communication channels.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "AWS"],
    results: [
      "80% reduction in admission processing time and paper registration administrative overhead",
      "Automated digital fee collection eliminated ledger discrepancies and banking reconciliation delays",
      "100% real-time attendance and academic performance monitoring accessible to parents via portal",
      "Robust high-concurrency LMS supporting interactive course content and online assessments",
    ],
    isFeatured: true,
    architecture: {
      pattern: "Multi-Tenant Cloud ERP & Modular Microservices LMS",
      summary: "Tiered multi-tenant architecture with strict tenant isolation, role-based access control (RBAC), and high-throughput LMS asset streaming.",
      layers: [
        {
          name: "Client & Presentation Layer",
          description: "Responsive web portals for Admins, Teachers, Students, and Parents with dynamic state hydration, PWA support, and real-time alerts.",
          tech: ["Next.js", "React 19", "Tailwind CSS", "Lucide Icons", "WebSockets"],
        },
        {
          name: "Application & Microservices Layer",
          description: "Decoupled domain services handling admissions, timetable optimization algorithms, grading computations, and payment webhooks.",
          tech: ["Node.js", "TypeScript", "RESTful APIs", "JWT Auth", "Stripe / Razorpay SDKs"],
        },
        {
          name: "Persistence & Caching Tier",
          description: "Relational schema with multi-tenant row-level security (RLS), Redis query caching for course catalogs, and S3 asset delivery.",
          tech: ["PostgreSQL", "Redis", "AWS S3", "Prisma ORM"],
        },
        {
          name: "Infrastructure & Security",
          description: "Auto-scaling container clusters behind CloudFront CDN, automated daily database snapshots, and role-based zero-trust security.",
          tech: ["AWS ECS / Fargate", "CloudFront CDN", "Route 53", "Docker"],
        },
      ],
      highlights: [
        "Multi-Tenant Isolation: Complete database schema segregation ensuring school data privacy",
        "Concurrent LMS Scaling: Load-balanced video course delivery supporting 10,000+ simultaneous learners",
        "Automated Ledger Settlement: Integrated fee webhook reconciliation with instant parent receipt generation",
        "Role-Based Access: Granular permissions matrix for superadmins, principals, teachers, accountants, and guardians",
      ],
    },
  },
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
    architecture: {
      pattern: "Bidirectional ASTM/HL7 Hardware Gateway & Event-Driven LIMS",
      summary: "Hybrid edge-to-cloud diagnostic architecture connecting on-premise biochemical analyzers directly to AWS cloud through an encrypted local agent.",
      layers: [
        {
          name: "Analyzer Edge Interface",
          description: "Local RS-232 / TCP/IP serial daemon parsing bidirectional ASTM E1381/E1394 and HL7 data packets from lab analyzers.",
          tech: ["Node.js Edge Daemon", "ASTM 1381/1394", "HL7 v2.x", "Local SQLite Queue"],
        },
        {
          name: "Cloud Core & Workflow Engine",
          description: "Event-driven microservices processing sample accessioning, normal reference range validations, and multi-tier pathologist review gates.",
          tech: ["Next.js", "Node.js", "Redis Queue", "Docker"],
        },
        {
          name: "Storage & Clinical Repository",
          description: "ACID-compliant clinical database storing patient histories, test parameters, delta checks, and tamper-proof audit trails.",
          tech: ["PostgreSQL", "AWS S3 (Encrypted PDFs)", "Redis Cache"],
        },
        {
          name: "Delivery & Notification Pipeline",
          description: "Asynchronous notification workers dispatching signed diagnostic reports directly to WhatsApp, SMS, and doctor portals.",
          tech: ["WhatsApp Business API", "Twilio SMS", "SES", "AWS Lambda"],
        },
      ],
      highlights: [
        "Sub-Second Result Ingestion: Eliminated manual data entry with zero packet drops from high-throughput analyzers",
        "Delta Check Verification: Automated alerts when critical analyte deviations occur compared to patient history",
        "Audit Trail Compliance: Immutable timestamp logs for sample draw, technician receipt, testing, and physician sign-off",
        "Decoupled Edge Buffering: Diagnostic instruments continue processing tests without data loss even during internet disruptions",
      ],
    },
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
    architecture: {
      pattern: "High-Throughput Timescale IoT Telematics & Geofencing Pipeline",
      summary: "Ingests real-time telematics sensor streams every 30 seconds across fleet vehicles with sub-second excursion alerting.",
      layers: [
        {
          name: "IoT Ingestion Tier",
          description: "Lightweight MQTT broker handling encrypted cellular payloads containing GPS coordinates, ambient temperature, and reefer compressor states.",
          tech: ["MQTT Broker (EMQX)", "Cellular OBD-II Gateways", "TLS 1.3"],
        },
        {
          name: "Stream Processing & Geofencing Engine",
          description: "High-velocity worker cluster validating incoming temperature metrics against transit thresholds and polygon route boundaries.",
          tech: ["Python / FastAPI", "Celery", "Redis Streams", "GeoJSON / Shapely"],
        },
        {
          name: "Time-Series Data Store",
          description: "Optimized temporal database compressing billions of temperature readings with hypertable chunking and fast aggregation.",
          tech: ["TimescaleDB", "PostgreSQL", "PostGIS"],
        },
        {
          name: "Dispatcher Console & Driver Mobile App",
          description: "Real-time dispatch dashboard featuring live vehicle telemetry maps and offline-capable mobile app for electronic Proof of Delivery (ePOD).",
          tech: ["React Native", "Next.js", "Leaflet Maps", "WebSockets"],
        },
      ],
      highlights: [
        "Sub-Minute Excursion Detection: Instant SMS/WhatsApp alarms when reefer temperatures breach cold-chain limits",
        "Data Compression Efficiency: 90% storage reduction using TimescaleDB hypertable columnar compression",
        "Offline ePOD Integrity: Cryptographically signed delivery timestamps and photographic proof saved during zero-signal dock unloading",
        "Route Deviation Analytics: Automated alerts when vehicles stray outside approved transport corridors",
      ],
    },
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
    architecture: {
      pattern: "Headless Decoupled B2B Commerce with Bidirectional ERP Sync",
      summary: "High-performance enterprise wholesale portal interfacing with SAP/Oracle ERP for live inventory, tiered contract pricing, and credit terms.",
      layers: [
        {
          name: "Storefront & Distributor UX",
          description: "Lightning-fast static and server-rendered catalog with quick-order spreadsheets, bulk CSV upload, and quote request workflows.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
        },
        {
          name: "Commerce Core & Business Logic",
          description: "Decoupled microservice evaluating multi-tiered price contracts, account credit limits, sales tax calculations, and approval workflows.",
          tech: ["Node.js", "Express / NestJS", "JWT Auth", "REST APIs"],
        },
        {
          name: "Enterprise ERP Sync Layer",
          description: "Bi-directional event worker syncing purchase orders, shipping manifests, and live inventory levels directly with legacy ERP backends.",
          tech: ["SAP / NetSuite Connectors", "RabbitMQ", "Redis Cache"],
        },
        {
          name: "Data Persistence Tier",
          description: "Robust database maintaining distributor hierarchies, purchase history, payment ledgers, and dynamic invoice generation.",
          tech: ["PostgreSQL", "AWS S3", "Elasticsearch"],
        },
      ],
      highlights: [
        "Instant Wholesale Catalog Search: Sub-50ms search response across 50,000+ SKU variants via Elasticsearch",
        "Dynamic Contract Pricing Engine: Real-time price resolution based on distributor tier, volume commitments, and currency",
        "Credit Limit Protection: Automated hold workflows if new order totals exceed authorized distributor credit limits",
        "Zero-Downtime Resilience: Storefront remains fully operational to capture orders even during periodic ERP maintenance windows",
      ],
    },
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
    architecture: {
      pattern: "Event-Driven Reactive Clinic Flow & WebSocket Queue Architecture",
      summary: "Real-time hospital consultation orchestration system routing patients from self-service check-in kiosks to physician consultation desks and pharmacy counters.",
      layers: [
        {
          name: "Touchpoint & Queue Display Layer",
          description: "Touchscreen check-in kiosk UI, high-definition waiting lounge TV displays, and doctor consultation digital desks.",
          tech: ["React", "Tailwind CSS", "WebSockets Client", "PWA Kiosk Mode"],
        },
        {
          name: "Reactive Queue Engine",
          description: "Ultra-low-latency WebSocket state broker prioritizing clinical emergencies, appointment slots, and physician room availability.",
          tech: ["Node.js", "Socket.io / WebSockets", "Redis Pub/Sub", "TypeScript"],
        },
        {
          name: "Clinical Prescription & SIS Services",
          description: "Physician workstation service providing digital drug interaction alerts, ICD-10 diagnostic coding, and instant pharmacy dispensing signals.",
          tech: ["Node.js", "PostgreSQL", "REST APIs", "FHIR / HL7 Ready"],
        },
        {
          name: "Infrastructure & Security",
          description: "Local area hospital server failover with encrypted cloud synchronization and role-based nurse/doctor access controls.",
          tech: ["Docker", "Nginx Load Balancer", "PostgreSQL Replication"],
        },
      ],
      highlights: [
        "Zero Waiting Room Confusion: Synchronized audio-visual token chimes on lounge screens and SMS alerts to patient phones",
        "Prescription Drug Interaction Warnings: Automated clinical alerts prevent accidental contraindicative medicine dispensing",
        "Real-Time Room Reallocation: Hospital superintendents dynamically balance doctor patient loads during OPD rush hours",
        "HIPAA / Data Privacy Protection: Patient identifiers tokenized and protected under granular clinical access controls",
      ],
    },
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
    architecture: {
      pattern: "Offline-First Local Database with Cryptographic Cloud Delta Sync",
      summary: "Mobile architecture engineered for technicians working in basements, rural towers, and industrial sub-stations with complete offline resilience.",
      layers: [
        {
          name: "Mobile Client & Local Store",
          description: "Native-performance mobile application storing full asset history and active maintenance schedules inside encrypted local SQLite.",
          tech: ["React Native", "TypeScript", "WatermelonDB / SQLite", "Zustand"],
        },
        {
          name: "Conflict-Free Sync Engine",
          description: "Background synchronization worker resolving two-way data deltas using timestamps and operational state transforms when connectivity resumes.",
          tech: ["Node.js", "REST APIs", "WebSocket Sync", "BullMQ"],
        },
        {
          name: "Media Ingestion & Document Pipeline",
          description: "Secure upload service compressing inspection photos, generating digital PDF audit certificates, and archiving equipment tags.",
          tech: ["AWS S3 (Pre-signed URLs)", "AWS Lambda", "PDFKit"],
        },
        {
          name: "Enterprise Admin & Dispatch Portal",
          description: "Centralized supervisor dashboard showing technician live map positions, completed checklists, and equipment preventive health scores.",
          tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Docker"],
        },
      ],
      highlights: [
        "100% Offline Independence: Technicians inspect complex equipment and complete 50-point checklists without a single bar of mobile signal",
        "Automated Background Delta Re-Sync: Inspection records sync invisibly the second the device touches Wi-Fi or 4G",
        "Geofenced Check-In Verification: Verifies technician physical presence on site via GPS bounds before inspection unlocks",
        "Instant PDF Client Sign-Off: Customers sign directly on the tablet screen; signed PDF certificates auto-dispatch via email immediately",
      ],
    },
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
    architecture: {
      pattern: "Asynchronous OCR Pipeline & Multi-Way Ledger Reconciliation Engine",
      summary: "Automated accounts payable workflow ingesting PDF/scanned supplier invoices, performing 3-way matching against POs, and syncing ledger records.",
      layers: [
        {
          name: "Document Ingestion Gateway",
          description: "Multi-channel intake receiving invoices via dedicated email mailboxes, API uploads, and supplier drag-and-drop web portals.",
          tech: ["FastAPI (Python)", "Celery", "AWS S3", "IMAP Mailbox Listener"],
        },
        {
          name: "OCR & Field Extraction Engine",
          description: "Intelligent document parsing extracting vendor tax IDs, invoice numbers, line-item pricing, tax rates, and total payable amounts.",
          tech: ["Tesseract OCR", "Regex Pattern Extractors", "Python NLP", "Pydantic"],
        },
        {
          name: "3-Way Matching & Rule Engine",
          description: "Automated business logic verifying invoice line items against purchase orders and warehouse Goods Received Notes (GRN).",
          tech: ["Python Core Rules", "PostgreSQL", "Redis Cache"],
        },
        {
          name: "Ledger Connector & Exception Queue",
          description: "Push connector updating ERP accounting entries for matched invoices, routing discrepancies to an accountant review queue.",
          tech: ["Tally / QuickBooks / SAP APIs", "Next.js Review UI", "PostgreSQL"],
        },
      ],
      highlights: [
        "92% Straight-Through Processing: Standard invoices processed and approved into accounts payable without manual intervention",
        "Automated Discrepancy Flagging: Identifies quantity mismatches, unauthorized price increases, and duplicate invoices instantly",
        "Complete Tax Validation: Cross-checks vendor GSTIN / VAT registration and calculated tax breakdown automatically",
        "Early Payment Optimization: Prioritizes processing of invoices offering early-settlement vendor discounts",
      ],
    },
  },
];
