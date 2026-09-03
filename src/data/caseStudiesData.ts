import { CaseStudyItem } from "@/types";

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "healthcare-diagnostic-workflow-transformation",
    slug: "healthcare-diagnostic-workflow-transformation",
    title: "Streamlining Diagnostic Laboratory Workflows Across Multi-Branch Centers",
    industry: "Healthcare & Diagnostics",
    clientProfile: "Regional Diagnostic Chain (8 collection centers, central processing lab)",
    timeline: "16 Weeks (Discovery to multi-center rollout)",
    challenge:
      "The diagnostic chain was experiencing severe operational bottlenecks as patient volumes grew by 40% year-over-year. Technicians were manually copying blood biochemistry analyzer numbers into desktop spreadsheets, leading to transcription fatigue, delivery delays of critical patient reports, and patient frustration.",
    existingProblems: [
      "Manual transcription of test results from 6 different diagnostic analyzer models",
      "Patients waiting up to 8 hours for routine blood test reports",
      "Sample barcodes not linked bidirectionally to clinical test profiles",
      "Lack of centralized multi-center revenue and test volume visibility for management",
      "High staff burnout and frequent patient phone inquiries regarding test readiness",
    ],
    ourApproach:
      "Rather than attempting a complex generic off-the-shelf ERP rollout that would disrupt daily lab operations, Mitraweb Consulting took an incremental, workflow-first approach. We shadowed lab phlebotomists, biochemists, and pathologists for two weeks to map the exact physical and digital custody chain of patient blood vials.",
    solutionArchitecture:
      "We engineered a modern, cloud-native Laboratory Information Management System (LIMS) featuring a bidirectional hardware interface service connecting to serial and TCP ports of biochemical and hematology analyzers. Test requests generated at patient registration automatically program the analyzers via ASTM protocols, and result values flow directly into pathologist verification queues.",
    technologies: [
      "Next.js / React (Clinical Web Dashboard)",
      "Node.js & Python (Hardware Middleware & Parsing)",
      "PostgreSQL (Encrypted Multi-Tenant Database)",
      "Redis (Real-time Message Queue)",
      "ASTM / HL7 Protocols",
      "WhatsApp Business Cloud API",
      "AWS Cloud Infrastructure",
    ],
    implementationHighlights: [
      "Developed custom ASTM protocol adapters for Sysmex, Roche, and Mindray diagnostic machines",
      "Implemented a zero-latency digital signature and multi-stage pathologist review workflow",
      "Built an automated WhatsApp and SMS pipeline dispatching encrypted PDF reports the instant pathologists sign off",
      "Created an administrative real-time dashboard displaying test volumes, TAT (turnaround time), and revenue metrics across all 8 centers",
    ],
    outcomes: [
      "Report turnaround time reduced from 8 hours to under 2 hours on average",
      "98% reduction in manual data entry errors and result transcription discrepancies",
      "65% decrease in phone inquiries to collection centers due to automated WhatsApp delivery",
      "Central lab processing capacity increased by 2.4x without adding administrative staff",
    ],
    keyLearnings:
      "Hardware-software interfacing projects succeed when edge cases (such as analyzer disconnects, sample reruns, and dilution factors) are treated as first-class architectural requirements rather than afterthoughts.",
  },
  {
    id: "logistics-cold-chain-visibility-platform",
    slug: "logistics-cold-chain-visibility-platform",
    title: "Engineering Real-Time Telematics & Proof-of-Delivery for Cold Chain Logistics",
    industry: "Logistics & Supply Chain",
    clientProfile: "Specialized Cold Chain Freight Carrier (120+ refrigerated vehicles)",
    timeline: "14 Weeks",
    challenge:
      "Transporting high-value pharmaceuticals and temperature-sensitive biological reagents requires absolute compliance with temperature thresholds. The carrier faced frequent cargo damage disputes from consignees because paper temperature records and offline data loggers could only be analyzed hours or days after delivery.",
    existingProblems: [
      "Inability to detect refrigeration compressor malfunctions while vehicles were in transit",
      "Paper-based proof-of-delivery receipts requiring 7-10 days to reach central billing",
      "Customer payment withholdings due to unverified temperature compliance documentation",
      "Disjointed fleet dispatch relying on phone calls and WhatsApp groups",
    ],
    ourApproach:
      "Mitraweb Consulting designed an end-to-end IoT telematics and driver mobility platform. We separated high-frequency telemetry ingestion from the core transactional dispatch database, ensuring sub-second response times even under millions of daily location and sensor data points.",
    solutionArchitecture:
      "We deployed an MQTT ingestion pipeline connected to IoT temperature probes and GPS hardware, streaming into TimescaleDB. On the driver side, we built an offline-first React Native mobile application supporting digital signatures, cargo photo inspection, and automated dispatch check-ins.",
    technologies: [
      "React Native (Driver Mobile App)",
      "Python / FastAPI (High-Throughput Telemetry API)",
      "TimescaleDB & PostgreSQL (Time-Series Sensor Storage)",
      "Leaflet / OpenStreetMap (Fleet Tracking UI)",
      "MQTT Broker / RabbitMQ",
      "Docker & AWS ECS",
    ],
    implementationHighlights: [
      "Engineered automated anomaly detection alerting dispatchers within 60 seconds if cabin temperature drifted outside 2°C–8°C bounds",
      "Built tamper-proof digital delivery certificates embedding verified route temperature graphs alongside consignee signatures",
      "Created an offline-first mobile app that caches data during cellular network dropouts and syncs automatically upon reconnecting",
    ],
    outcomes: [
      "Zero temperature-excursion cargo losses across 450+ tracked inter-state transit routes",
      "Consignee payment clearance cycles reduced from 45 days to 12 days through instant digital ePOD",
      "Dispatcher efficiency improved by 40%, managing twice as many active loads per operator",
    ],
    keyLearnings:
      "In logistics, operational simplicity is paramount. Drivers will only adopt mobile tools that are fast, operate seamlessly offline, and require minimal taps during pickup and drop-off.",
  },
  {
    id: "b2b-distributor-commerce-modernization",
    slug: "b2b-distributor-commerce-modernization",
    title: "Modernizing Wholesale Distributor Ordering for an Industrial Supplier",
    industry: "Manufacturing & Distribution",
    clientProfile: "Industrial Components Manufacturer (400+ authorized dealers)",
    timeline: "12 Weeks",
    challenge:
      "The client's sales operations were overwhelmed by manual order intake. 400+ dealers submitted purchase orders via handwritten WhatsApp photos, emails, and phone calls. Sales coordinators spent entire workdays re-keying line items into the internal ERP, leading to catalog pricing errors and shipping delays.",
    existingProblems: [
      "Order entry errors causing incorrect part numbers and costly warehouse return shipments",
      "Dealers frequently ordering out-of-stock items due to zero visibility into factory inventory",
      "Sales staff acting as clerical data entry operators instead of cultivating client relationships",
      "Disputes regarding contract pricing tiers and credit limit exhaustion",
    ],
    ourApproach:
      "We designed a customized B2B wholesale self-service portal tailored specifically for industrial dealers. We mapped custom pricing structures, volume discount tiers, and real-time inventory buffers directly from the company's internal ERP via secure API bridges.",
    solutionArchitecture:
      "A high-performance Next.js web application with authenticated dealer accounts, custom price lists, quick-order CSV uploads, credit limit meters, and an administrative order approval workflow.",
    technologies: [
      "Next.js / TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "RESTful API Bridges",
      "AWS S3 & CloudFront",
    ],
    implementationHighlights: [
      "Designed a frictionless bulk-ordering UI allowing dealers to enter SKUs and quantities rapidly like a spreadsheet",
      "Integrated real-time credit checking to prevent order dispatch if credit limits are exceeded without managerial approval",
      "Automated PDF quotation and purchase order generation with one-click approval workflows",
    ],
    outcomes: [
      "85% of regular distributor orders placed digitally within 60 days of launch",
      "Order entry error rate dropped to near 0%",
      "Average order fulfillment cycle dropped from 48 hours to under 15 minutes",
      "Sales coordinators freed from 25+ hours of weekly clerical data entry",
    ],
    keyLearnings:
      "B2B buyers do not want consumer-style flashy carousels; they prize speed, accurate pricing, immediate inventory clarity, and frictionless re-ordering of repeat part lists.",
  },
];
