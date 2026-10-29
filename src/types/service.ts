
import { IconType } from 'react-icons';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;

  problemsSolved: string[];
  solutions: string[];
  features: string[];

  ctaText: string;
  Icon: IconType;
}