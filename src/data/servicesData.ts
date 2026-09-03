import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development Services",
    shortTitle: "Custom Software",
    metaTitle: "Custom Software Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting engineers bespoke custom software solutions that streamline complex operations, replace legacy bottlenecks, and scale with your enterprise growth.",
    headline: "Custom Software Engineered Around Your Real Business Workflows",
    subheadline:
      "Off-the-shelf software forces your business into someone else's mold. We design and build purpose-built software architectures that give you a durable competitive advantage.",
    overview:
      "Every enterprise possesses unique operational workflows, proprietary business logic, and complex integration requirements that commercial off-the-shelf packages cannot accommodate without expensive workarounds. Mitraweb Consulting builds secure, maintainable, and scalable custom software platforms engineered precisely around how your organization operates.",
    problemsSolved: [
      "Rigid off-the-shelf tools that require disruptive workarounds or multiple subscription fees",
      "Manual data re-entry across disjointed, non-communicating business systems",
      "Legacy software codebases that are fragile, insecure, or costly to maintain",
      "Inability to scale infrastructure smoothly as transaction volumes and users expand",
      "Lack of real-time operational visibility and unified reporting for executive decision-makers",
    ],
    deliverables: [
      {
        title: "Enterprise Web & Desktop Portals",
        description:
          "Centralized operational hubs enabling internal teams and external stakeholders to interact securely.",
      },
      {
        title: "Custom CRM, ERP & Operations Modules",
        description:
          "Targeted workflow engines that replace spreadsheets and disjointed SaaS subscriptions with single-source-of-truth platforms.",
      },
      {
        title: "Microservices & Cloud Backend Architectures",
        description:
          "Fault-tolerant distributed backends with automated failover, load balancing, and secure multi-tenant isolation.",
      },
      {
        title: "Data Pipelines & Reporting Dashboards",
        description:
          "Aggregated business intelligence pipelines delivering actionable insights and automated audit trails.",
      },
    ],
    keyFeatures: [
      "Role-based access control (RBAC) & enterprise-grade single sign-on (SSO)",
      "Strict data encryption at rest and in transit (AES-256 & TLS 1.3)",
      "Clean modular architecture with comprehensive API documentation",
      "Scalable relational and NoSQL database schemas with automated migrations",
      "Comprehensive test suites (unit, integration, and end-to-end testing)",
      "Automated CI/CD deployment pipelines on AWS, Google Cloud, or Azure",
    ],
    technologies: [
      "Node.js / TypeScript",
      "Python / FastAPI / Django",
      "Next.js / React",
      "PostgreSQL",
      "Redis",
      "Docker & Kubernetes",
      "AWS / GCP",
    ],
    processSteps: [
      {
        step: "01",
        title: "Architecture & Workflow Discovery",
        description:
          "We analyze your current processes, audit existing data structures, and establish strict functional and non-functional requirements.",
      },
      {
        step: "02",
        title: "System Design & Prototyping",
        description:
          "We model database schemas, API contracts, and high-fidelity clickable UI prototypes before writing production code.",
      },
      {
        step: "03",
        title: "Agile Milestone Sprints",
        description:
          "We deliver functional, working increments every two weeks with automated testing, transparent progress demos, and continuous feedback.",
      },
      {
        step: "04",
        title: "Deployment & Production Hardening",
        description:
          "Zero-downtime deployment, infrastructure monitoring, disaster recovery runbooks, and comprehensive team handover.",
      },
    ],
    faqs: [
      {
        question: "How do we determine if custom software is right versus commercial SaaS?",
        answer:
          "If your business relies on proprietary operational logic, handles specialized regulatory compliance, or spends substantial recurring licensing fees on SaaS tools that only fulfill 60% of your needs, custom software offers a decisive return on investment and permanent IP ownership.",
      },
      {
        question: "Who owns the intellectual property (IP) and source code?",
        answer:
          "You retain 100% full ownership of all custom source code, documentation, architecture schemas, and digital assets upon project completion.",
      },
      {
        question: "How do you handle security and data privacy?",
        answer:
          "We implement security best practices from day one: parameterized SQL queries, strict input sanitization, OWASP Top 10 mitigation, encryption in transit and at rest, and audit logging.",
      },
      {
        question: "Can custom software integrate with our existing accounting or ERP system?",
        answer:
          "Yes. We specialize in building secure API adapters and synchronization bridges between new custom software and existing legacy platforms like SAP, Tally, Zoho, Salesforce, or proprietary databases.",
      },
    ],
    targetKeywords: [
      "custom software development company",
      "custom software development services",
      "enterprise software development",
      "bespoke software development",
      "software development company",
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Application Development Services",
    shortTitle: "Web Development",
    metaTitle: "Web Application Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting builds high-performing, secure, and modern web applications that provide responsive user experiences and reliable business operations.",
    headline: "Modern Web Applications Engineered for Speed, Scale, and Reliability",
    subheadline:
      "Fast, responsive web apps that turn complex business logic into intuitive user experiences across every desktop, tablet, and mobile device.",
    overview:
      "Today’s web applications are the primary frontline for customer engagement, operational execution, and digital service delivery. Mitraweb Consulting builds enterprise-grade web applications using modern JavaScript/TypeScript ecosystems, responsive design standards, and robust server architectures designed for sub-second load times and high concurrency.",
    problemsSolved: [
      "Slow, unresponsive legacy web portals frustrating users and damaging brand reputation",
      "High bounce rates and abandoned user journeys caused by unintuitive navigation",
      "Fragile frontends tightly coupled with outdated backend databases",
      "Poor mobile web responsiveness driving away smartphone and tablet traffic",
      "Inability to support high concurrent user loads during seasonal demand spikes",
    ],
    deliverables: [
      {
        title: "Client & Customer Portals",
        description:
          "Self-service digital hubs where customers can track requests, manage accounts, and view documents securely.",
      },
      {
        title: "Single Page & Progressive Web Apps (PWA)",
        description:
          "App-like web experiences featuring offline caching, instant screen transitions, and push notifications.",
      },
      {
        title: "Internal Management Dashboards",
        description:
          "High-density data visualization and administration tools designed for operational team productivity.",
      },
      {
        title: "Enterprise Corporate Websites",
        description:
          "SEO-optimized, accessible corporate web presences that communicate credibility and generate high-intent inbound leads.",
      },
    ],
    keyFeatures: [
      "Server-side rendering (SSR) and static site generation (SSG) for lightning-fast First Contentful Paint",
      "Full mobile-first responsiveness tested across 320px to 4K displays",
      "Strict Web Content Accessibility Guidelines (WCAG) compliance",
      "Robust state management and real-time WebSocket communication",
      "Search Engine Optimization (SEO) structured markup and performance tuning",
    ],
    technologies: [
      "Next.js / React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST & GraphQL",
      "PostgreSQL",
      "Vercel / AWS CloudFront",
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical Discovery & Scope Definition",
        description:
          "We evaluate user personas, define application states, map user journeys, and establish technology benchmarks.",
      },
      {
        step: "02",
        title: "Component-Driven UI/UX",
        description:
          "We construct a reusable design system in Figma, ensuring atomic component consistency and accessibility compliance.",
      },
      {
        step: "03",
        title: "Full-Stack Development",
        description:
          "We build clean TypeScript frontends paired with robust backend APIs, optimized data fetching, and automated tests.",
      },
      {
        step: "04",
        title: "Performance & Cross-Browser Audit",
        description:
          "We run rigorous Lighthouse, Core Web Vitals, cross-browser, and network throttling audits before production launch.",
      },
    ],
    faqs: [
      {
        question: "What frameworks do you use for web development?",
        answer:
          "We specialize in React, Next.js, and TypeScript on the frontend, supported by Node.js, Python, and modern relational databases on the backend.",
      },
      {
        question: "How do you ensure fast web application performance?",
        answer:
          "We leverage code splitting, server-side rendering, asset optimization (AVIF/WebP), responsive image srcset, browser caching, edge CDNs, and minimal client-side JavaScript execution.",
      },
      {
        question: "Will the web application be responsive on mobile devices?",
        answer:
          "Yes. Every interface is designed mobile-first and tested extensively across diverse screen widths from 320px to 1920px+.",
      },
      {
        question: "Can you modernize or rebuild our existing web application?",
        answer:
          "Yes. We frequently execute migration strategies—either refactoring incrementally with strangler-fig patterns or performing clean architectural rebuilds without interrupting your live business.",
      },
    ],
    targetKeywords: [
      "web development company",
      "web development services",
      "custom web development",
      "web application development",
      "web app development company",
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    shortTitle: "Mobile Apps",
    metaTitle: "Mobile App Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting develops high-performance native and cross-platform mobile apps for iOS and Android that engage users and streamline mobile business operations.",
    headline: "High-Performance Mobile Apps Built for iOS and Android",
    subheadline:
      "From on-the-ground operational field apps to consumer-facing mobile solutions, we craft intuitive, stable, and secure mobile applications.",
    overview:
      "Mobile devices have become the default interface through which employees perform field duties and customers consume digital services. Mitraweb Consulting engineers cross-platform and native mobile applications that deliver smooth 60fps animations, robust offline capabilities, secure biometrics, and seamless cloud synchronization.",
    problemsSolved: [
      "Clunky hybrid web views that feel sluggish and crash frequently",
      "Loss of connectivity in remote field conditions causing data entry loss",
      "Fragmented user experiences across differing Android versions and iOS devices",
      "Complex app store review rejections and certificate compliance friction",
      "High battery drain and inefficient background synchronization routines",
    ],
    deliverables: [
      {
        title: "Cross-Platform Apps (React Native & Flutter)",
        description:
          "Single codebase applications delivering native look, feel, and performance on both iOS and Android platforms.",
      },
      {
        title: "B2B & Enterprise Field Workforce Apps",
        description:
          "Offline-first mobile tools for field inspectors, delivery agents, logistics drivers, and healthcare nurses.",
      },
      {
        title: "Customer Engagement & Service Apps",
        description:
          "Intuitive mobile products featuring loyalty rewards, push notifications, scheduling, and secure payment processing.",
      },
      {
        title: "App Store Publishing & Compliance Handover",
        description:
          "Full management of Apple App Store and Google Play Store provisioning, compliance verification, and releases.",
      },
    ],
    keyFeatures: [
      "Offline-first SQLite/WatermelonDB storage with automatic background synchronization",
      "Biometric authentication (FaceID, TouchID, Android Biometrics)",
      "Location services, background geofencing, and BLE hardware connectivity",
      "Push notification integration via Firebase Cloud Messaging and Apple APNs",
      "Encrypted keychain storage for tokens and sensitive credentials",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "TypeScript",
      "iOS / Swift",
      "Android / Kotlin",
      "Firebase",
      "Fastlane CI/CD",
    ],
    processSteps: [
      {
        step: "01",
        title: "Mobile UX Mapping & Prototyping",
        description:
          "We design gesture-friendly touch targets, thumb-zone navigation, and device-native interaction patterns.",
      },
      {
        step: "02",
        title: "Architecture & Offline Synchronization",
        description:
          "We structure local database persistence and conflict-resolution strategies for zero-latency offline usage.",
      },
      {
        step: "03",
        title: "Cross-Platform Implementation",
        description:
          "We build cleanly typed components backed by automated unit tests and device farm testing.",
      },
      {
        step: "04",
        title: "App Store Launch & Monitoring",
        description:
          "We coordinate app store submission, monitor crash analytics via Sentry, and provide ongoing OS update maintenance.",
      },
    ],
    faqs: [
      {
        question: "Should we build cross-platform or purely native apps?",
        answer:
          "For 90% of business applications, modern cross-platform frameworks like React Native or Flutter provide identical performance to native code while saving 40-50% in development time and maintenance costs. We evaluate your specific hardware access needs before advising.",
      },
      {
        question: "How do you handle mobile apps that need to work without internet?",
        answer:
          "We implement offline-first architectures: data is stored locally in an encrypted client database and smoothly syncs with the central server once connectivity is restored.",
      },
      {
        question: "Do you assist with publishing to Apple and Google App Stores?",
        answer:
          "Yes. We manage the entire store preparation, screenshot production, privacy manifest compliance, review guidance, and post-approval deployment.",
      },
      {
        question: "How do you maintain apps when iOS or Android releases a major update?",
        answer:
          "We offer proactive maintenance agreements that ensure your mobile applications are updated and tested against new OS versions and device form factors well in advance.",
      },
    ],
    targetKeywords: [
      "mobile app development company",
      "mobile app development services",
      "cross platform app development",
      "Android app development",
      "iOS app development",
    ],
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development Services",
    shortTitle: "E-commerce",
    metaTitle: "E-commerce Development Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting builds custom, scalable e-commerce platforms and storefronts engineered for fast checkout, high conversion rates, and seamless ERP/inventory integration.",
    headline: "Scalable E-commerce Platforms Engineered for Higher Conversion",
    subheadline:
      "Custom shopping experiences, headless storefronts, and automated backend operations that turn browsers into lifelong customers.",
    overview:
      "Modern e-commerce requires far more than putting products on a webpage. Businesses need lightning-fast catalog search, frictionless checkout funnels, automated inventory sync, and multi-channel fulfillment. Mitraweb Consulting builds tailored e-commerce platforms and headless architectures engineered for high transaction concurrency and maximum conversion rates.",
    problemsSolved: [
      "Slow page speeds causing high cart abandonment and lost search rankings",
      "Inflexible template platforms unable to accommodate unique B2B wholesale pricing tiers",
      "Manual inventory reconciliation between physical warehouses and online storefronts",
      "Checkout friction and lack of localized payment gateways reducing checkout completion",
      "Site slowdowns or crashes during flash sales and high-traffic marketing campaigns",
    ],
    deliverables: [
      {
        title: "Headless E-commerce Storefronts",
        description:
          "Decoupled Next.js frontends connected to robust commerce engines for instant page loads and custom buying journeys.",
      },
      {
        title: "B2B Wholesale & Distributor Portals",
        description:
          "Custom catalog portals with tier-based pricing, volume discounts, purchase orders, and credit terms.",
      },
      {
        title: "Payment Gateway & Logistics Integration",
        description:
          "Seamless integration with Razorpay, Stripe, PayU, Cashfree, Shiprocket, and proprietary 3PL carriers.",
      },
      {
        title: "Automated Inventory & Order Management",
        description:
          "Real-time inventory synchronization across warehouses, marketplaces, and physical retail points.",
      },
    ],
    keyFeatures: [
      "Sub-second page navigation and instant client-side catalog filtering",
      "Single-page checkout with guest checkout and address auto-completion",
      "Multi-currency, tax calculation, and localized payment gateway support",
      "Built-in cart abandonment recovery notifications and email hooks",
      "Robust security complying with PCI-DSS guidelines for card data protection",
    ],
    technologies: [
      "Next.js / React",
      "Node.js",
      "Shopify Storefront API",
      "WooCommerce Headless",
      "PostgreSQL",
      "Redis",
      "Razorpay / Stripe",
    ],
    processSteps: [
      {
        step: "01",
        title: "Catalog & Purchase Journey Mapping",
        description:
          "We analyze customer conversion paths, catalog structures, pricing logic, and checkout friction points.",
      },
      {
        step: "02",
        title: "Storefront UX & Conversion Design",
        description:
          "We craft high-converting product pages, cart drawers, trust badges, and intuitive checkout flows.",
      },
      {
        step: "03",
        title: "Platform Engineering & System Integrations",
        description:
          "We implement payment gateways, courier APIs, ERP inventory connectors, and automated tax calculations.",
      },
      {
        step: "04",
        title: "Stress Testing & Go-Live Optimization",
        description:
          "We perform load testing to simulate high-concurrency checkouts and monitor performance through launch.",
      },
    ],
    faqs: [
      {
        question: "What is headless commerce and why should we consider it?",
        answer:
          "Headless commerce separates the front-end user experience from back-end database and business logic. It provides unmatched page speeds, total design flexibility, and better conversion rates compared to monolithic platforms.",
      },
      {
        question: "Can you handle complex B2B pricing and wholesale account rules?",
        answer:
          "Yes. We frequently build custom B2B platforms featuring role-based buyer approvals, custom price lists per client group, bulk order uploads, and purchase order checkout.",
      },
      {
        question: "Which payment gateways can be integrated?",
        answer:
          "We integrate all major international and Indian gateways including Razorpay, Stripe, PayU, Cashfree, PayPal, and UPI direct rails.",
      },
      {
        question: "How do you protect customer transaction data?",
        answer:
          "All sensitive payment processing is offloaded to PCI-DSS compliant gateway tokenization, ensuring no unencrypted credit card data touches your servers.",
      },
    ],
    targetKeywords: [
      "ecommerce development company",
      "ecommerce website development",
      "custom ecommerce development",
      "ecommerce application development",
      "b2b ecommerce development",
    ],
  },
  {
    id: "api-development-integration",
    slug: "api-development-integration",
    title: "API Development & Integration Services",
    shortTitle: "API Integration",
    metaTitle: "API Development & Integration Services | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting engineers secure, scalable REST and GraphQL APIs and integrates third-party systems to connect your business software ecosystem seamlessly.",
    headline: "Secure, Scalable APIs That Connect Your Entire Software Ecosystem",
    subheadline:
      "Break down data silos, automate inter-system communication, and unlock new business capabilities with engineered API integrations.",
    overview:
      "Modern organizations run on dozens of software applications: accounting, CRM, payment gateways, marketing automation, logistics, and internal databases. When these systems don’t talk to each other, operations grind to a halt. Mitraweb Consulting builds clean, high-performance RESTful and GraphQL APIs, along with enterprise middleware that guarantees reliable, fault-tolerant data synchronization.",
    problemsSolved: [
      "Isolated data islands forcing staff into duplicate manual data entry",
      "Unreliable third-party webhooks failing silently and losing critical customer transactions",
      "Legacy software lacking documented APIs for modern mobile and cloud integration",
      "Rate-limiting bottlenecks and slow response times throttling downstream workflows",
      "Security vulnerabilities from exposed API endpoints and unauthenticated routes",
    ],
    deliverables: [
      {
        title: "Custom REST & GraphQL API Architecture",
        description:
          "Cleanly versioned, documented, and secure APIs engineered for high-throughput data processing.",
      },
      {
        title: "Third-Party SaaS Integrations",
        description:
          "Connect CRM (Salesforce, HubSpot, Zoho), ERP (SAP, Tally), Payment, and Communication APIs seamlessly.",
      },
      {
        title: "Enterprise Middleware & Webhook Gateways",
        description:
          "Resilient message queues, retry logic, and webhook listeners that guarantee zero data loss.",
      },
      {
        title: "Developer Documentation & SDKs",
        description:
          "Interactive OpenAPI/Swagger documentation, Postman collections, and client SDKs for easy partner onboarding.",
      },
    ],
    keyFeatures: [
      "OAuth 2.0, JWT tokenization, and fine-grained API key permission management",
      "Asynchronous message brokering via RabbitMQ / Redis for long-running processes",
      "Automated rate-limiting, IP whitelisting, and DDoS protection mechanisms",
      "Strict data contract validation via JSON Schema / Zod",
      "Comprehensive request logging, tracing, and health monitoring",
    ],
    technologies: [
      "Node.js / Express",
      "Python / FastAPI",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "OpenAPI / Swagger",
      "Docker",
    ],
    processSteps: [
      {
        step: "01",
        title: "API Schema & Contract Design",
        description:
          "We define API contracts, payload models, status codes, and security requirements before implementation.",
      },
      {
        step: "02",
        title: "Secure Endpoint Engineering",
        description:
          "We build endpoints with input validation, transactional database queries, and robust authentication layers.",
      },
      {
        step: "03",
        title: "Queueing & Resilience Setup",
        description:
          "We implement retry workers, dead-letter queues, and circuit breakers to handle third-party downtime gracefully.",
      },
      {
        step: "04",
        title: "Automated Integration Testing & Documentation",
        description:
          "We generate interactive Swagger documentation and execute rigorous integration test suites.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure data isn't lost if a third-party API goes down?",
        answer:
          "We implement resilient asynchronous message queues with persistent storage, exponential backoff retry mechanisms, and dead-letter queues that alert engineers immediately if an external service fails repeatedly.",
      },
      {
        question: "Can you build APIs that connect to our on-premise legacy database?",
        answer:
          "Yes. We design secure API gateways with VPN tunneling or reverse proxy layers to securely expose legacy on-premise databases without exposing your internal network.",
      },
      {
        question: "Do you provide interactive API documentation?",
        answer:
          "Every API we deliver includes comprehensive OpenAPI / Swagger specifications and Postman collections, making onboarding internal or external developers seamless.",
      },
      {
        question: "How do you protect our API against abuse and scraping?",
        answer:
          "We configure token bucket rate limiting, IP reputation filtering, API key throttling, and strict payload size limits at the gateway layer.",
      },
    ],
    targetKeywords: [
      "API development company",
      "API integration services",
      "custom API development",
      "third party API integration",
      "REST API development",
    ],
  },
  {
    id: "business-automation",
    slug: "business-automation",
    title: "Business Process Automation Services",
    shortTitle: "Business Automation",
    metaTitle: "Business Process Automation Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting designs custom business process automation solutions that eliminate repetitive manual tasks, reduce human error, and accelerate operational throughput.",
    headline: "Automate Repetitive Workflows. Free Your Team for High-Value Growth.",
    subheadline:
      "Eliminate manual data entry, disconnected spreadsheets, and operational bottlenecks with custom software automation engineered for your business.",
    overview:
      "In many growing companies, high-value employees spend 30-40% of their day copying numbers between spreadsheets, writing routine emails, verifying invoices, and routing status updates. Mitraweb Consulting develops custom business automation systems that execute repetitive workflows automatically, with zero errors and 24/7 reliability.",
    problemsSolved: [
      "Critical business operations depending on error-prone, fragile Excel spreadsheets",
      "High labor costs spent on manual reconciliation, document verification, and data entry",
      "Communication breakdowns between sales, operations, and billing departments",
      "Slow turnaround times on client requests, quotes, or approval workflows",
      "Lack of real-time operational status, leading to missed deadlines and SLA violations",
    ],
    deliverables: [
      {
        title: "Custom Operational Workflow Engines",
        description:
          "Digital routing systems that automatically pass tasks, documents, and approvals through your organizational hierarchy.",
      },
      {
        title: "Automated Document & Invoice Generation",
        description:
          "Instant creation and dispatch of PDFs, tax invoices, shipping labels, and compliance certificates from database triggers.",
      },
      {
        title: "Cross-Department System Synchronization",
        description:
          "Automated pipelines syncing leads from marketing, deals in CRM, orders in ERP, and ledger entries in accounting.",
      },
      {
        title: "Automated Alerts & Anomaly Detection",
        description:
          "Intelligent notifications alerting supervisors via WhatsApp, Email, or SMS when KPIs fall outside normal bounds.",
      },
    ],
    keyFeatures: [
      "Event-driven background workers that trigger immediately upon state changes",
      "Role-based multi-tier approval chains with audit logging",
      "Automated email, SMS, and WhatsApp notification dispatch",
      "OCR and document parsing for incoming invoices and customer forms",
      "Visual administrative oversight dashboard with manual intervention overrides",
    ],
    technologies: [
      "Node.js / Python",
      "Temporal / BullMQ",
      "PostgreSQL / Redis",
      "WhatsApp Business API",
      "AWS Lambda & SQS",
      "Docker",
    ],
    processSteps: [
      {
        step: "01",
        title: "Operational Bottleneck Audit",
        description:
          "We shadow your team’s daily routines to quantify hours lost to manual tasks and identify high-ROI automation targets.",
      },
      {
        step: "02",
        title: "Process Re-engineering & Logic Mapping",
        description:
          "We optimize workflows before automating them, eliminating redundant steps and defining edge-case rules.",
      },
      {
        step: "03",
        title: "Automation Engine Development",
        description:
          "We engineer reliable background services with strict validation, error tracking, and fallback routines.",
      },
      {
        step: "04",
        title: "Pilot Testing & Team Training",
        description:
          "We run the automation in shadow mode alongside manual processes to verify 100% accuracy before full cutover.",
      },
    ],
    faqs: [
      {
        question: "How quickly do business automation projects show a return on investment?",
        answer:
          "Most business process automation solutions pay for themselves within 3 to 6 months by eliminating hundreds of hours of manual labor, eliminating costly data entry errors, and accelerating billing turnaround.",
      },
      {
        question: "Will automation disrupt our current day-to-day operations during rollout?",
        answer:
          "No. We deploy automations gradually using shadow runs and pilot phases so your team can verify outputs without any risk to active business operations.",
      },
      {
        question: "Can automated systems send WhatsApp or SMS updates to our customers and staff?",
        answer:
          "Yes. We integrate official WhatsApp Business APIs, SMS gateways, and automated email services for real-time customer and employee notifications.",
      },
      {
        question: "What happens if a background automation encounters unexpected data?",
        answer:
          "Our engines feature automated exception handling: invalid entries are flagged in an administrative exception queue with instant notifications, allowing staff to review edge cases without halting the rest of the queue.",
      },
    ],
    targetKeywords: [
      "business process automation",
      "business automation software",
      "workflow automation",
      "custom business automation",
      "business process automation services",
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design Services for Digital Products",
    shortTitle: "UI/UX Design",
    metaTitle: "UI/UX Design Company | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting creates research-driven UI/UX designs for enterprise software, web applications, and mobile apps that increase user adoption and drive conversions.",
    headline: "User Experience Design That Solves Business Complexity",
    subheadline:
      "We design intuitive, purposeful digital interfaces that reduce cognitive load, empower your users, and drive measurable business outcomes.",
    overview:
      "Enterprise software does not have to be confusing, clunky, or painful to use. Mitraweb Consulting approaches UI/UX design with a business-first perspective: we study how real users perform their tasks, eliminate friction points, and craft clean, cohesive design systems that turn complex operations into simple, elegant digital workflows.",
    problemsSolved: [
      "Complicated interfaces requiring extensive, costly employee training programs",
      "Low user adoption and resistance to newly rolled-out software systems",
      "High drop-off rates on customer onboarding and checkout flows",
      "Inconsistent visual design and chaotic layouts across multi-product suites",
      "Developer friction due to vague, incomplete design specifications",
    ],
    deliverables: [
      {
        title: "User Research & Information Architecture",
        description:
          "User persona interviews, task analysis, site maps, and navigational flow diagrams grounded in real usage.",
      },
      {
        title: "Interactive Wireframes & Prototypes",
        description:
          "Clickable Figma prototypes allowing stakeholders to test and validate workflows before engineering starts.",
      },
      {
        title: "Scalable Design Systems",
        description:
          "Complete design tokens, color ramps, typography scales, atomic UI components, and state variants in Figma.",
      },
      {
        title: "Production-Ready Design Tokens & Specs",
        description:
          "Pixel-perfect handoff specifications, micro-interaction states, and responsive layout guidelines for developers.",
      },
    ],
    keyFeatures: [
      "WCAG 2.1 AA accessibility contrast and keyboard navigation standards",
      "Component-based atomic design methodology ready for React/Tailwind implementation",
      "Design systems with dark mode and high-density enterprise view support",
      "Rigorous usability testing on real task scenarios",
      "Clear interaction design with zero unnecessary visual clutter",
    ],
    technologies: [
      "Figma",
      "Design Tokens",
      "Tailwind CSS Systems",
      "Whimsical",
      "Usability Testing",
    ],
    processSteps: [
      {
        step: "01",
        title: "User & Stakeholder Discovery",
        description:
          "We uncover user mental models, business objectives, operational pain points, and usability bottlenecks.",
      },
      {
        step: "02",
        title: "Wireframing & Workflow Architecture",
        description:
          "We map information hierarchy and test low-fidelity structural wireframes to validate usability early.",
      },
      {
        step: "03",
        title: "High-Fidelity Interface Design",
        description:
          "We create polished, high-contrast visual screens with real content, micro-interactions, and responsive variants.",
      },
      {
        step: "04",
        title: "Design System & Developer Handoff",
        description:
          "We document every component state, interaction token, and responsive behavior for seamless frontend development.",
      },
    ],
    faqs: [
      {
        question: "How does UI/UX design directly impact our company's bottom line?",
        answer:
          "Intuitive UI/UX design reduces employee training expenses, cuts data entry errors, increases task completion speed, and boosts customer conversion rates. In B2B SaaS, superior UX is often the deciding factor in purchasing decisions.",
      },
      {
        question: "Do you design specifically for complex B2B data dashboards?",
        answer:
          "Yes. A core specialty of our design team is high-density enterprise software: structuring massive tables, filters, analytics dashboards, and nested data forms into clean, comprehensible interfaces.",
      },
      {
        question: "What deliverables do we receive at the end of the design engagement?",
        answer:
          "You receive organized Figma source files, interactive prototypes, a comprehensive design system with reusable components, responsive screen layouts, and export-ready assets.",
      },
      {
        question: "Can your team also code the designs into frontend code?",
        answer:
          "Yes. Our design and full-stack engineering teams collaborate seamlessly, ensuring the coded Next.js / Tailwind CSS frontend matches the approved design with 100% fidelity.",
      },
    ],
    targetKeywords: [
      "UI UX design company",
      "UI UX design services",
      "product design",
      "web app UI UX design",
      "mobile app UI UX design",
    ],
  },
  {
    id: "software-maintenance",
    slug: "software-maintenance",
    title: "Software Maintenance & Support Services",
    shortTitle: "Maintenance & Support",
    metaTitle: "Software Maintenance & Support Services | Mitraweb Consulting",
    metaDescription:
      "Mitraweb Consulting provides proactive software maintenance, security updates, cloud infrastructure management, and continuous feature enhancements.",
    headline: "Proactive Software Maintenance That Protects Your Investment",
    subheadline:
      "Keep your critical business applications secure, stable, fast, and continuously updated with dedicated engineering support.",
    overview:
      "Launching software is only the beginning of its lifecycle. As operating systems update, third-party APIs change, security vulnerabilities emerge, and your business evolves, software requires ongoing technical stewardship. Mitraweb Consulting provides proactive maintenance and dedicated SLA support to ensure your digital products remain robust and dependable 365 days a year.",
    problemsSolved: [
      "Unpatched security vulnerabilities exposing customer data to exploits and compliance fines",
      "Unexpected server downtime during peak operational hours with no one to fix it",
      "Slow performance drift as database tables accumulate millions of historical records",
      "Broken third-party API connections following unannounced vendor deprecations",
      "Internal teams bogged down by minor bug fixes instead of focusing on strategic growth",
    ],
    deliverables: [
      {
        title: "24/7 Uptime & Infrastructure Monitoring",
        description:
          "Automated health checks, server resource alerts, error log tracking, and rapid incident response.",
      },
      {
        title: "Security Patching & Dependency Updates",
        description:
          "Regular auditing and upgrading of software packages, framework versions, and OS security patches.",
      },
      {
        title: "Database Optimization & Automated Backups",
        description:
          "Query tuning, index optimization, routine vacuuming, and tested point-in-time disaster recovery backups.",
      },
      {
        title: "Continuous Minor Enhancements & Bug Fixes",
        description:
          "Dedicated monthly developer bandwidth for UX tweaks, report additions, and iterative workflow improvements.",
      },
    ],
    keyFeatures: [
      "Defined Service Level Agreements (SLAs) with guaranteed response times",
      "Automated off-site database backups with verified restore procedures",
      "Real-time application monitoring via Datadog / Sentry / Prometheus",
      "Monthly transparent health reports detailing uptime, security, and fixes",
      "Flexible retainer models aligned with your software scale and criticality",
    ],
    technologies: [
      "Docker & Kubernetes",
      "AWS / GCP / Azure",
      "PostgreSQL / MySQL",
      "Sentry / LogRocket",
      "GitHub Actions CI/CD",
      "Grafana",
    ],
    processSteps: [
      {
        step: "01",
        title: "Codebase & Infrastructure Audit",
        description:
          "We inspect your existing repository, audit dependencies for vulnerabilities, and review server architectures.",
      },
      {
        step: "02",
        title: "Observability & Alerting Setup",
        description:
          "We connect automated error logging, uptime pings, and escalation channels to our engineering team.",
      },
      {
        step: "03",
        title: "Routine Proactive Maintenance",
        description:
          "We apply weekly dependency patches, test backups, and monitor database performance metrics.",
      },
      {
        step: "04",
        title: "Iterative Enhancements & Monthly Review",
        description:
          "We resolve backlogged items and present transparent reports covering system performance and recommendations.",
      },
    ],
    faqs: [
      {
        question: "Can you maintain software that was originally built by another agency or developer?",
        answer:
          "Yes. We conduct a structured Codebase & Architecture Audit to evaluate the existing code quality, identify security or architectural risks, and establish a baseline before onboarding the project onto our maintenance service.",
      },
      {
        question: "What are your Service Level Agreement (SLA) response times?",
        answer:
          "We offer customized SLAs tailored to business criticality, including emergency response windows as fast as 1 hour for critical production outages.",
      },
      {
        question: "Do unused maintenance hours roll over?",
        answer:
          "Depending on your agreed SLA plan, unused hours can often be allocated towards minor feature additions, performance tuning, or rolled over within quarterly cycles.",
      },
      {
        question: "How do you test updates before pushing them to our live system?",
        answer:
          "Every update and patch is rigorously tested in an isolated staging environment that mirrors production before being scheduled for deployment during low-traffic maintenance windows.",
      },
    ],
    targetKeywords: [
      "software maintenance company",
      "application maintenance services",
      "software support services",
      "web application maintenance",
      "mobile app maintenance",
    ],
  },
];
