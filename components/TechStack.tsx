"use client";

import { motion } from "motion/react";
import { 
  Code2, Layout, Zap, Layers, Database, Globe, 
  Settings, Shield, Trello, Palette, Github, Cloud,
  Server, Bug, CheckCircle, ListChecks, Mail, Lock,
  Terminal, Cpu, BrainCircuit, Network
} from "lucide-react";

const techIcons = [
  // Frontend
  { icon: Layout, name: "React / Next.js" },
  { icon: Zap, name: "Vite" },
  { icon: Code2, name: "TypeScript" },
  { icon: Layers, name: "Tailwind CSS / Bootstrap" },
  // Backend
  { icon: Server, name: "Node.js / Express" },
  { icon: Terminal, name: "FastAPI / Laravel" },
  // Database
  { icon: Database, name: "PostgreSQL / MySQL / MongoDB" },
  { icon: Cloud, name: "Supabase" },
  // Testing
  { icon: Bug, name: "Playwright / API Testing" },
  { icon: Globe, name: "REST / Postman" },
  { icon: CheckCircle, name: "Manual Testing & Automation" },
  // Project Management
  { icon: Trello, name: "Jira / Trello / Notion" },
  { icon: ListChecks, name: "Scrum / Agile" },
  // Design
  { icon: Palette, name: "Figma / Canva" },
  // Tools
  { icon: Github, name: "Git / GitHub" },
  { icon: Cloud, name: "Vercel / Google Cloud" },
  { icon: Mail, name: "Google Workspace" },
  { icon: Settings, name: "Microsoft" },
  // Security
  { icon: Terminal, name: "Kali Linux" },
  { icon: Shield, name: "Burp Suite" },
  { icon: Lock, name: "OWASP ZAP" },
  { icon: Network, name: "Nmap" },
  { icon: Cpu, name: "Nikto" },
];

export function TechStack() {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center pr-12"
        >
          {[...techIcons, ...techIcons].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
