import type { ComponentType } from 'react';

export interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

export interface BusinessSolutionItem {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

export interface ValidationSolutionItem {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}
