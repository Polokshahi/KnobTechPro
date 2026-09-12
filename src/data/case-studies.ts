import { CaseStudy } from '@/types/case-study';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'saas-lead-gen',
    slug: 'saas-lead-gen-engine',
    title: 'B2B Lead Generation & Enrichment Engine',
    industry: 'SaaS',
    challenge: 'A scaling B2B SaaS company was struggling with low-quality outbound lists, resulting in high bounce rates and wasted sales hours spent on manual prospecting.',
    solution: 'Designed and implemented an automated research and verification pipeline combining Apollo intelligence, LinkedIn Sales Navigator filters, and 3-tier email validation.',
    results: [
      '25,000+ verified targeted prospects delivered',
      '18,000+ verified decision-maker emails with <1.5% bounce rate',
      '3 distinct ICP segments established for hyper-personalized outreach'
    ],
    technologies: ['TypeScript', 'Node.js', 'Apollo API', 'PostgreSQL']
  },
  {
    id: 'nonprofit-decision-maker',
    slug: 'nonprofit-executive-mapping',
    title: 'Executive Decision-Maker Mapping',
    industry: 'Nonprofit & Enterprise Services',
    challenge: 'Client needed to map executive stakeholders across 500+ targeted enterprise foundations without clean directory data.',
    solution: 'Built custom web scrapers combined with manual human verification protocols to extract organizational hierarchies and direct contact channels.',
    results: [
      '50 qualified enterprise organizations mapped completely',
      '100 verified executive decision-makers cataloged',
      'Segmented department and role-based contact matrix delivered'
    ],
    technologies: ['Next.js', 'TypeScript', 'Custom Web Scraping', 'Prisma']
  },
  {
    id: 'marketplace-automation',
    slug: 'marketplace-data-extraction',
    title: 'Automated Data Extraction & CRM Sync',
    industry: 'B2B Marketplace',
    challenge: 'Sales reps spent over 15 hours per week manually copying vendor data from disparate industry directories into HubSpot.',
    solution: 'Engineered an automated data extraction and enrichment microservice that syncs verified profiles directly to the client CRM via custom APIs.',
    results: [
      'Automated 95% of manual research workflows',
      'Structured 50,000+ vendor datasets in real time',
      'Reduced sales team administrative overhead by 18 hours/week'
    ],
    technologies: ['Node.js', 'REST APIs', 'PostgreSQL', 'Workflow Automation']
  }
];