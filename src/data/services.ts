
import { ServiceItem } from '@/types/service';
import { FaBullseye, FaCode, FaCogs, FaDatabase, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';


export const servicesData: ServiceItem[] = [
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    description:
      'Build highly targeted prospect lists tailored precisely to your ideal customer profile and market requirements.',
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
      'Turn qualified prospect data into structured, high-converting outbound email campaigns designed for meaningful conversations.',
    features: [
      'Campaign setup & infrastructure',
      'Precision ICP segmentation',
      'Dynamic personalization',
      'Automated follow-up sequences',
      'Deliverability & domain warm-up',
      'Continuous campaign optimization',
    ],
    ctaText: 'Learn More',
    Icon: MdMarkEmailRead,
  },

  {
    id: 'apollo-data-research',
    title: 'Apollo Data Research',
    description:
      'Extract, clean, and organize precision B2B prospect intelligence directly from Apollo using custom filters and strict validation.',
    features: [
      'Targeted prospect extraction',
      'Company headcount & revenue data',
      'Verified direct-dial contact info',
      'Job title & seniority filtering',
      'Industry & keyword segmentation',
      'Automated data cleaning & formatting',
    ],
    ctaText: 'Learn More',
    Icon: FaDatabase,
  },

  {
    id: 'sales-navigator-research',
    title: 'Sales Navigator Data Research',
    description:
      'Uncover hard-to-reach decision-makers using advanced LinkedIn Sales Navigator search strategies and enrichment workflows.',
    features: [
      'Advanced boolean search filtering',
      'C-suite & VP decision-maker targeting',
      'Company trigger event tracking',
      'Custom contact enrichment',
      'Structured data extraction',
      'CSV / Excel / CRM-ready delivery',
    ],
    ctaText: 'Learn More',
    Icon: FaLinkedin,
  },

  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    description:
      'Build modern, high-performance web applications, customer portals, and internal tools engineered around your core business workflows.',
    features: [
      'High-performance Next.js & React apps',
      'Robust Node.js & TypeScript backends',
      'Secure PostgreSQL & Prisma databases',
      'REST API design & third-party integrations',
      'Scalable cloud deployments',
      'Enterprise-grade security standards',
    ],
    ctaText: 'Discuss Your Project',
    Icon: FaCode,
  },

  {
    id: 'custom-data-automation',
    title: 'Custom Data Research & Automation',
    description:
      'Automate complex manual research tasks, web scraping pipelines, and data synchronization across your sales stack.',
    features: [
      'Custom web scraping pipelines',
      'Automated data enrichment workflows',
      'CRM data hygiene & synchronization',
      'Webhook & REST API integrations',
      'Scheduled background workers',
      'Zero-maintenance automation infrastructure',
    ],
    ctaText: 'Automate Your Workflow',
    Icon: FaCogs,
  },
];

