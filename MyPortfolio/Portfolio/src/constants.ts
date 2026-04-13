import { PortfolioData } from "./types";

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Alex Chen",
  role: "Full Stack Developer & AI Enthusiast",
  bio: "Architecting scalable digital experiences with a focus on performance, accessibility, and modern AI integration.",
  about: "I am a passionate software engineer and student dedicated to building high-impact web applications. My journey started with a curiosity for how things work on the web, which evolved into a deep expertise in modern frontend frameworks, robust backend systems, and the emerging world of generative AI. I thrive at the intersection of design and engineering, ensuring every pixel serves a purpose and every line of code is optimized for the future.",
  skills: [
    { name: "React / Next.js", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Frontend", level: 90 },
    { name: "Tailwind CSS", category: "Frontend", level: 95 },
    { name: "Node.js / Express", category: "Backend", level: 85 },
    { name: "PostgreSQL / Prisma", category: "Backend", level: 80 },
    { name: "Python / FastAPI", category: "Backend", level: 75 },
    { name: "Docker / AWS", category: "Tools", level: 70 },
    { name: "Git / GitHub", category: "Tools", level: 90 },
    { name: "Gemini API / LLMs", category: "Other", level: 85 },
  ],
  projects: [
    {
      title: "AI-Powered Task Architect",
      description: "A productivity suite that uses LLMs to decompose complex goals into actionable sub-tasks with automated scheduling.",
      tags: ["React", "Gemini API", "Node.js", "Prisma"],
      image: "https://picsum.photos/seed/task/800/600",
      github: "https://github.com",
      link: "https://example.com"
    },
    {
      title: "Nexus Analytics Dashboard",
      description: "Real-time data visualization platform for monitoring distributed systems with high-density technical grids.",
      tags: ["TypeScript", "D3.js", "Tailwind", "WebSockets"],
      image: "https://picsum.photos/seed/analytics/800/600",
      github: "https://github.com",
      link: "https://example.com"
    },
    {
      title: "EcoStream E-commerce",
      description: "A sustainable-first marketplace featuring a custom-built recommendation engine and carbon footprint tracking.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Framer Motion"],
      image: "https://picsum.photos/seed/eco/800/600",
      github: "https://github.com",
      link: "https://example.com"
    }
  ],
  experience: [
    {
      company: "TechNova Solutions",
      role: "Frontend Engineering Intern",
      period: "June 2025 - Present",
      description: [
        "Developing responsive UI components using React and Tailwind CSS for a flagship SaaS product.",
        "Optimizing application performance, resulting in a 30% reduction in initial load times.",
        "Collaborating with UX designers to implement high-fidelity prototypes and design systems."
      ]
    },
    {
      company: "Open Source Contributor",
      role: "Developer",
      period: "2024 - 2025",
      description: [
        "Contributed to several high-profile React libraries, focusing on accessibility and documentation.",
        "Built and maintained a custom VS Code extension for AI-assisted code refactoring.",
        "Mentored junior developers in local coding bootcamps on modern web standards."
      ]
    }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex.chen@example.com"
  }
};
