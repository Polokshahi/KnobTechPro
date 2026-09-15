
import type { IconType } from 'react-icons';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  Icon:IconType;
}