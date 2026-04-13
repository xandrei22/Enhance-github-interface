export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
  level: number; // 0-100
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}
