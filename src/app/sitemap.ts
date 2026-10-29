
import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Routes
  const staticRoutes = [
    "",
    "/services",
    "/case-studies",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Service Sub-pages
  const serviceRoutes = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic Case Studies Detail Pages
  const caseStudyRoutes = caseStudiesData.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}

