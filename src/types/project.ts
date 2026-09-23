export type ProjectLaunchStatus =
  | 'launch-ready'
  | 'in-progress'
  | 'internal-review'
  | 'planning';

export type LaunchType =
  | 'web'
  | 'mobile'
  | 'ios'
  | 'android'
  | 'cross-platform'
  | 'prototype'
  | 'ai';

export type LinkType =
  | 'github'
  | 'website'
  | 'web-demo'
  | 'play-store'
  | 'app-store'
  | 'document'
  | 'release-note';

export interface ProjectLink {
  label: string;
  type: LinkType;
  url?: string;
  status: 'live' | 'pending' | 'internal';
  note?: string;
}

export interface TimelineItem {
  role: string;
  period: string;
}

export interface ScreenshotItem {
  title: string;
  source: 'local' | 'remote';
  url: string;
  alt: string;
  presentation?: 'phone' | 'watch' | 'poster';
}

export interface ProjectData {
  slug: string;
  title: string;
  status: ProjectLaunchStatus;
  launchType: LaunchType[];
  category: 'web' | 'mobile' | 'system' | 'education' | 'ai';
  summary: string;
  timeline: TimelineItem;
  description: {
    problem: string;
    solution: string;
    impact: string;
  };
  highlights: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    infrastructure?: string[];
    ai?: string[];
    testing?: string[];
  };
  responsibilities: string[];
  architecture: string[];
  links: ProjectLink[];
  screenshots: ScreenshotItem[];
  galleryNotes?: string;
}

export interface ProjectFilters {
  category?: string;
  launchType?: string;
  status?: string;
}
