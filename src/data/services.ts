
import { ServiceItem } from '@/types/service';

import {
  FaBullseye,
  FaCode,
  FaCogs,
  FaDatabase,
  FaLinkedin,
} from 'react-icons/fa';

import { MdMarkEmailRead } from 'react-icons/md';

export const servicesData: ServiceItem[] = [
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    description:
      'Generate targeted B2B leads and build verified prospect lists based on your ideal customer profile, industry, location, company size, job title, and buyer requirements.',

    problemsSolved: [
      'Struggling to find the right B2B prospects',
      'Spending too much time manually researching companies and contacts',
      'Receiving inaccurate, outdated, or irrelevant lead data',
      'Unable to identify the right decision-makers',
      'Lack of a consistent and scalable prospecting process',
      'Sales teams spending more time researching than selling',
    ],

    solutions: [
      'Build targeted B2B prospect lists based on your ICP',
      'Research decision-makers and key stakeholders',
      'Identify relevant companies across specific industries and markets',
      'Enrich prospect records with company and contact information',
      'Verify business email addresses and improve data quality',
      'Deliver structured, CRM-ready lead databases',
    ],

    features: [
      'ICP targeting & refinement',
      'Decision-maker research',
      'Company intelligence',
      'Contact enrichment',
      'Multi-tier email verification',
      'Custom dataset delivery',
    ],

    ctaText: 'Learn More',
    Icon: FaBullseye,
  },

  {
    id: 'cold-email-outreach',
    title: 'Cold Email Outreach',
    description:
      'Launch targeted cold email campaigns that connect your business with qualified prospects through personalized messaging, automated follow-ups, and deliverability-focused infrastructure.',

    problemsSolved: [
      'Low response rates from cold email campaigns',
      'Emails landing in spam or promotions folders',
      'Poorly targeted prospect lists',
      'Generic outreach messages that fail to generate conversations',
      'No structured follow-up process',
      'Inconsistent cold email campaign management',
    ],

    solutions: [
      'Build campaigns around your ideal customer profile',
      'Segment prospects by industry, role, company, and buying signals',
      'Create personalized outbound email sequences',
      'Set up automated follow-up campaigns',
      'Improve email deliverability and domain reputation',
      'Monitor campaign performance and continuously optimize outreach',
    ],

    features: [
      'Cold email campaign setup',
      'Email infrastructure & configuration',
      'Precision ICP segmentation',
      'Dynamic personalization',
      'Automated follow-up sequences',
      'Email deliverability optimization',
      'Domain warm-up',
      'Campaign performance optimization',
    ],

    ctaText: 'Learn More',
    Icon: MdMarkEmailRead,
  },

  {
    id: 'apollo-data-research',
    title: 'Apollo Data Research',
    description:
      'Find qualified B2B prospects using Apollo.io data research, advanced filters, company intelligence, contact enrichment, and structured prospect list building.',

    problemsSolved: [
      'Difficulty finding qualified prospects in Apollo',
      'Too many irrelevant contacts in exported lead lists',
      'Need to target specific job titles or seniority levels',
      'Incomplete company and contact information',
      'Large datasets requiring manual cleaning',
      'Time-consuming Apollo prospect research',
    ],

    solutions: [
      'Create advanced Apollo search filters based on your ICP',
      'Find companies by industry, location, size, revenue, and keywords',
      'Identify relevant decision-makers and senior executives',
      'Extract and organize qualified prospect data',
      'Clean and standardize large datasets',
      'Prepare Apollo data for CRM and outbound sales campaigns',
    ],

    features: [
      'Targeted prospect extraction',
      'Company headcount & revenue data',
      'Job title & seniority filtering',
      'Industry & keyword segmentation',
      'Contact enrichment',
      'Data cleaning & validation',
      'Custom prospect list building',
      'CRM-ready data formatting',
    ],

    ctaText: 'Learn More',
    Icon: FaDatabase,
  },

  {
    id: 'sales-navigator-research',
    title: 'LinkedIn Sales Navigator Research',
    description:
      'Find B2B decision-makers and qualified prospects using LinkedIn Sales Navigator research, advanced search filters, Boolean search, and targeted contact enrichment.',

    problemsSolved: [
      'Difficulty finding the right decision-makers on LinkedIn',
      'Too many irrelevant LinkedIn search results',
      'Unable to identify C-level and senior decision-makers',
      'Manual LinkedIn prospect research taking too much time',
      'Limited visibility into target accounts and prospects',
      'Unstructured LinkedIn prospect data',
    ],

    solutions: [
      'Build highly targeted LinkedIn Sales Navigator searches',
      'Use Boolean search and advanced filters to narrow prospects',
      'Identify founders, executives, C-suite, VP, and department heads',
      'Research target accounts and relevant business signals',
      'Organize prospect information into structured datasets',
      'Prepare LinkedIn research data for sales and outreach campaigns',
    ],

    features: [
      'Advanced Boolean search',
      'LinkedIn Sales Navigator research',
      'C-suite & VP decision-maker targeting',
      'Account & company research',
      'Job title & seniority filtering',
      'Custom contact enrichment',
      'Structured prospect data',
      'CSV / Excel / CRM-ready delivery',
    ],

    ctaText: 'Learn More',
    Icon: FaLinkedin,
  },

  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    description:
      'Build modern, scalable, and high-performance web applications, SaaS platforms, customer portals, dashboards, and internal business tools using Next.js, React, TypeScript, Node.js, PostgreSQL, and modern web technologies.',

    problemsSolved: [
      'Outdated or slow business websites',
      'Need for a custom web application or SaaS platform',
      'Manual business processes that should be handled by software',
      'Disconnected systems and third-party tools',
      'Need for custom dashboards or customer portals',
      'Performance, scalability, or security limitations',
    ],

    solutions: [
      'Develop custom full-stack web applications',
      'Build scalable Next.js and React applications',
      'Create secure Node.js and TypeScript backends',
      'Design PostgreSQL databases and Prisma data models',
      'Integrate third-party APIs and business tools',
      'Deploy and maintain production-ready applications',
    ],

    features: [
      'Next.js & React development',
      'TypeScript application development',
      'Node.js & REST API development',
      'PostgreSQL & Prisma databases',
      'SaaS application development',
      'Customer portals & dashboards',
      'Third-party API integrations',
      'Cloud deployment & optimization',
      'Security-focused application architecture',
    ],

    ctaText: 'Discuss Your Project',
    Icon: FaCode,
  },

  {
    id: 'custom-data-automation',
    title: 'Custom Data Research & Automation',
    description:
      'Automate repetitive data research, web scraping, lead enrichment, CRM workflows, and business processes with custom automation systems and API integrations.',

    problemsSolved: [
      'Employees spending hours on repetitive data entry',
      'Manual web research and data collection',
      'Repeated spreadsheet updates and data processing',
      'Disconnected CRM and sales tools',
      'Duplicate, incomplete, or inconsistent business data',
      'Manual workflows that are difficult to scale',
    ],

    solutions: [
      'Automate repetitive research and data collection',
      'Build custom web scraping and data extraction workflows',
      'Connect CRMs and business tools through APIs',
      'Automate lead enrichment and data processing',
      'Synchronize data between multiple platforms',
      'Create scheduled background automation workflows',
    ],

    features: [
      'Custom web scraping pipelines',
      'Data extraction & processing',
      'Automated lead enrichment',
      'CRM data synchronization',
      'Webhook & REST API integrations',
      'Scheduled background workers',
      'Data cleaning & transformation',
      'Custom workflow automation',
    ],

    ctaText: 'Automate Your Workflow',
    Icon: FaCogs,
  },
];

