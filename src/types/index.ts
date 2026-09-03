export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  location: {
    city: string;
    state: string;
    country: string;
    addressDisplay: string;
  };
  businessHours: string;
  navLinks: NavLink[];
}

export interface NavLink {
  title: string;
  href: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    icon?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  overview: string;
  problemsSolved: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  keyFeatures: string[];
  technologies: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  targetKeywords: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  keyCapabilities: string[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientIndustry: string;
  category: 'Web' | 'Mobile' | 'Custom Software' | 'E-commerce' | 'Automation' | 'Healthcare';
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  isFeatured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  industry: string;
  clientProfile: string;
  timeline: string;
  challenge: string;
  existingProblems: string[];
  ourApproach: string;
  solutionArchitecture: string;
  technologies: string[];
  implementationHighlights: string[];
  outcomes: string[];
  keyLearnings: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tableOfContents: {
    title: string;
    id: string;
  }[];
  content: {
    heading: string;
    body: string[];
  }[];
  relatedServiceSlug?: string;
  relatedIndustrySlug?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
