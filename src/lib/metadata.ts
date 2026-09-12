import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
}

export function constructMetadata({
  title = 'B2B Growth & Technology Agency',
  description = 'KnobTech Pro helps B2B companies find qualified prospects, reach decision-makers, automate outbound campaigns, and build modern technology.',
  path = '',
}: GenerateMetadataProps = {}): Metadata {
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}