import { PortfolioData } from "./types";

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Josh Sayat",
  role: "Project Manager • QA Analyst • Fullstack Developer • UI/UX Designer",
  bio: "Passionate about building scalable solutions with a strong foundation in project management, quality assurance, and fullstack development.",
  heroImage: "/me.jpg",
  formalImage: "/meFormal.png",
  about: "I'm Xandrei with a strong foundation in project management, quality assurance testing, and fullstack development. I excel at planning, coordinating, and ensuring quality in complex projects while having the flexibility to work on both custom solutions and implementations. I specialize in project management and quality assurance, ensuring that projects are delivered on time, within scope, and aligned with business goals. By combining strategic planning with rigorous testing and continuous improvement, I help teams build reliable, high-quality solutions that meet user expectations. I build scalable web applications with modern technologies like React, Node.js, and cloud platforms, bringing a user-focused mindset to both design and development. I'm currently exploring AI and automation workflows to make teams more efficient and projects smarter.",
  skills: [
    { name: "React / Next.js", category: "Frontend", level: 95 },
    { name: "Vite", category: "Frontend", level: 85 },
    { name: "TypeScript", category: "Frontend", level: 90 },
    { name: "Tailwind CSS / Bootstrap", category: "Frontend", level: 95 },
    { name: "Node.js / Express", category: "Backend", level: 90 },
    { name: "FastAPI / Laravel", category: "Backend", level: 85 },
    { name: "PostgreSQL / MySQL / MongoDB", category: "Database", level: 85 },
    { name: "Supabase", category: "Database", level: 80 },
    { name: "Playwright / API Testing", category: "Testing", level: 90 },
    { name: "REST / Postman", category: "Testing", level: 85 },
    { name: "Manual Testing & Automation", category: "Testing", level: 90 },
    { name: "Jira / Trello / Notion", category: "Project Management", level: 95 },
    { name: "Scrum / Agile", category: "Project Management", level: 90 },
    { name: "Figma / Canva", category: "Design", level: 85 },
    { name: "Git / GitHub", category: "Tools", level: 90 },
    { name: "Vercel / Google Cloud", category: "Tools", level: 80 },
    { name: "Google Workspace", category: "Tools", level: 90 },
    { name: "Microsoft 365", category: "Tools", level: 85 },
    { name: "Kali Linux", category: "Security", level: 85 },
    { name: "Burp Suite", category: "Security", level: 85 },
    { name: "OWASP ZAP", category: "Security", level: 80 },
    { name: "Nmap", category: "Security", level: 85 },
    { name: "Nikto", category: "Security", level: 80 },
  ],
  projects: [
    {
      title: "Mauricio's Café & Bakery",
      description: "A responsive e-commerce website for a local café and bakery featuring product showcase, ordering system, and online reservations.",
      tags: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
      image: "https://picsum.photos/seed/cafe/800/600",
      github: "https://github.com/xandrei22",
      link: "https://mauricios-cafe-bakery.shop/"
    },
    {
      title: "AtEase - Wellness Platform",
      description: "A comprehensive wellness and relaxation platform designed to help users manage stress and improve their mental health.",
      tags: ["React", "Vercel", "Tailwind CSS", "Wellness"],
      image: "https://picsum.photos/seed/wellness/800/600",
      github: "https://github.com/xandrei22",
      link: "https://atease.vercel.app/"
    },
    {
      title: "Portfolio & Projects Hub",
      description: "A modern fullstack application showcasing web development projects and services with interactive UI elements.",
      tags: ["Next.js", "TypeScript", "Node.js", "Vercel"],
      image: "https://picsum.photos/seed/portfolio/800/600",
      github: "https://github.com/xandrei22",
      link: "https://ja1.vercel.app/"
    },
    {
      title: "Seminar Attendance 2024",
      description: "Professional development at technology seminar",
      tags: [],
      image: "https://picsum.photos/seed/seminar1/800/600",
      github: "",
      link: ""
    },
    {
      title: "Achievement Certificate",
      description: "Professional achievement recognition",
      tags: [],
      image: "https://picsum.photos/seed/achievement/800/600",
      github: "",
      link: ""
    },
    {
      title: "Conference 2024",
      description: "Networking and learning opportunity",
      tags: [],
      image: "https://picsum.photos/seed/conference/800/600",
      github: "",
      link: ""
    },
    {
      title: "Workshop Experience",
      description: "Skills development and training",
      tags: [],
      image: "https://picsum.photos/seed/workshop/800/600",
      github: "",
      link: ""
    },
    {
      title: "Team Meeting",
      description: "Collaboration and teamwork",
      tags: [],
      image: "https://picsum.photos/seed/team/800/600",
      github: "",
      link: ""
    }
  ],
  experience: [
    {
      company: "Center for Artificial Intelligence and Smart Technologies",
      role: "Project Manager Intern",
      period: "2026",
      category: "Experience",
      description: [
        "Managing AI and smart technology initiatives and project delivery.",
        "Coordinating cross-functional teams on innovative technology solutions.",
        "Overseeing project timelines, resources, and stakeholder communications."
      ]
    },
    {
      company: "Tech Executive Labs I.T. Solutions",
      role: "Assistant Project Manager for Marketing and Strategies Intern",
      period: "2025-2026",
      category: "Experience",
      description: [
        "Assisting in strategic planning and execution of marketing initiatives.",
        "Supporting project management for IT solutions delivery.",
        "Collaborating with marketing and strategy teams to achieve business objectives."
      ]
    },
    {
      company: "JPCS Batstateu TNEU - Lipa Chapter",
      role: "DRRM Head & 3rd Year Representative",
      period: "2024-2025",
      category: "Leadership",
      description: [
        "Leading Disaster Risk Reduction and Management (DRRM) initiatives and programs.",
        "Representing 3rd year students and advocating for their needs and concerns.",
        "Organizing events, workshops, and training sessions for student development."
      ]
    },
    {
      company: "Batangas State University",
      role: "IT Student - Major in Service Management",
      period: "2024-2026",
      category: "Education",
      description: [
        "Pursuing advanced studies in Information Technology with specialization in Service Management.",
        "Developing expertise in IT service delivery, management, and best practices.",
        "Engaging in academic and practical coursework in enterprise IT solutions."
      ]
    },
    {
      company: "Batangas State University",
      role: "IT Student",
      period: "2022",
      category: "Education",
      description: [
        "Began academic journey in Information Technology.",
        "Developed foundational knowledge in computer science and programming.",
        "Participated in university IT programs and student activities."
      ]
    }
  ],
  certificates: [
    {
      title: "Google Project Management Certificate",
      issuer: "Google",
      date: "2025",
      category: "Certificates",
      image: "https://picsum.photos/seed/cert-google/600/400",
      description: [
        "Earned certification in professional project management practices.",
        "Completed comprehensive training in agile methodologies and tools."
      ]
    },
    {
      title: "Full Stack Web Development Certificate",
      issuer: "Tech Academy",
      date: "2024",
      category: "Certificates",
      image: "https://picsum.photos/seed/cert-fullstack/600/400",
      description: [
        "Comprehensive training in modern web development technologies.",
        "Covered frontend, backend, and database management."
      ]
    }
  ],
  socials: {
    github: "https://github.com/xandrei22",
    linkedin: "https://www.linkedin.com/in/josh-alexandrei-sayat/",
    facebook: "https://www.facebook.com/josh.sayat.2024",
    instagram: "https://instagram.com",
    email: "joshalexandreisayat@gmail.com",
    phone: "+63 921 733 3335"
  }
};
