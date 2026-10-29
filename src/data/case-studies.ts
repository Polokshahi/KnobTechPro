
import { CaseStudy } from "@/types/case-study";

export const caseStudiesData:CaseStudy[] = [
  {
    id: "b2b-lead-generation",
    category: "B2B Lead Generation",
    title:
      "Targeted B2B Lead Generation and Decision-Maker Contact Research",
    description:
      "Built a targeted B2B lead generation database by researching ideal companies, identifying key decision-makers, and providing verified business emails, direct phone numbers, and company contact data for sales outreach.",
    challenge:
      "The client needed a reliable B2B prospect list but was struggling to find the right companies, identify relevant decision-makers, and collect accurate email and phone contact information.",
    solution: [
      "Defined the ideal customer profile (ICP) and target market",
      "Researched and identified relevant B2B companies",
      "Identified decision-makers by job title and seniority",
      "Collected professional business email addresses",
      "Collected available business and direct phone numbers",
      "Enriched company and contact information",
      "Verified, cleaned, and organized prospect data",
      "Prepared CRM-ready B2B lead lists for sales outreach",
    ],
    results: [
      "Targeted B2B prospect database delivered",
      "Relevant decision-makers identified",
      "Verified email and phone contact data enriched",
      "Clean and structured lead database",
      "CRM-ready data for sales and outreach campaigns",
    ],
    tools: [
      "Apollo",
      "LinkedIn Sales Navigator",
      "Google Maps",
      "Email Verification",
      "Google Sheets",
    ],
  },

  {
    id: "cold-email-deliverability",
    category: "Cold Email Outreach",
    title:
      "Cold Email Deliverability Optimization from Spam to Inbox",
    description:
      "Improved cold email deliverability by configuring SPF, DKIM, and DMARC, reviewing the client's email infrastructure, and optimizing the sending setup to improve inbox placement.",
    challenge:
      "The client's cold emails were frequently landing in spam, reducing email visibility and limiting the performance of outbound sales campaigns.",
    solution: [
      "Audited the existing cold email infrastructure",
      "Configured SPF email authentication",
      "Configured DKIM email authentication",
      "Configured DMARC policy and alignment",
      "Reviewed domain and DNS configuration",
      "Optimized the outbound email sending setup",
      "Reviewed sender reputation and deliverability factors",
      "Monitored email deliverability and adjusted the setup",
    ],
    results: [
      "Improved email authentication",
      "Stronger cold email infrastructure",
      "Improved inbox placement",
      "Reduced spam-folder issues",
      "More reliable outbound email delivery",
    ],
    tools: [
      "SPF",
      "DKIM",
      "DMARC",
      "DNS",
      "Email Deliverability Tools",
      "Cold Email Platform",
    ],
  },

  {
    id: "apollo-sales-navigator-research",
    category: "Apollo & Sales Navigator Research",
    title:
      "Apollo and LinkedIn Sales Navigator Prospect Research for CRM",
    description:
      "Built targeted B2B prospect databases using Apollo and LinkedIn Sales Navigator, then cleaned, enriched, and structured the data for CRM management and outbound sales campaigns.",
    challenge:
      "The client needed a large volume of highly targeted prospects, but manually searching, filtering, extracting, cleaning, and organizing B2B contact data was time-consuming.",
    solution: [
      "Built targeted prospect searches in Apollo",
      "Used LinkedIn Sales Navigator for advanced prospect research",
      "Applied industry, location, company-size, and job-title filters",
      "Identified relevant decision-makers and key contacts",
      "Collected company and prospect information",
      "Enriched B2B contact and company data",
      "Cleaned and standardized prospect records",
      "Removed irrelevant and duplicate records",
      "Structured the final dataset for CRM management",
    ],
    results: [
      "Highly targeted B2B prospect data collected",
      "Relevant decision-makers identified",
      "Clean and standardized contact records",
      "CRM-ready prospect database delivered",
      "Data prepared for sales and outbound campaigns",
    ],
    tools: [
      "Apollo",
      "LinkedIn Sales Navigator",
      "Google Sheets",
      "Microsoft Excel",
      "CRM",
    ],
  },

  {
    id: "custom-website-development",
    category: "Custom Web Development",
    title:
      "Professional Business Website and SaaS Development for Digital Growth",
    description:
      "Designed and developed professional business websites, landing pages, personal websites, and scalable SaaS applications to strengthen online credibility, improve user experience, and support business growth.",
    challenge:
      "The client needed a professional online presence to build trust, communicate their services clearly, generate leads, and provide customers with a reliable digital experience.",
    solution: [
      "Planned the website structure around business goals",
      "Designed professional and responsive landing pages",
      "Developed modern business and personal websites",
      "Built scalable SaaS application interfaces",
      "Created clear service and content sections",
      "Added lead-generation and contact CTAs",
      "Optimized the user experience for desktop and mobile",
      "Built scalable architecture for future development",
    ],
    results: [
      "Professional and trustworthy online presence",
      "Responsive website experience",
      "Clear presentation of business services",
      "Improved digital credibility",
      "Lead-generation focused website structure",
      "Scalable foundation for future growth",
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
  },
];

export default caseStudiesData;

