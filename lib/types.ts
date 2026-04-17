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
  category: string;
  description: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string[];
  image?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Testing' | 'Project Management' | 'Design' | 'Security' | 'Tools' | 'Other';
  level: number; // 0-100
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  heroImage?: string;
  formalImage?: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  certificates?: Certificate[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}
