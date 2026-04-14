"use client";

import { motion } from "motion/react";
import { 
  Cpu, Code2, Database, Globe, Layers, Layout, 
  MessageSquare, Settings, Smartphone, Zap 
} from "lucide-react";

const techIcons = [
  { icon: Code2, name: "TypeScript" },
  { icon: Layout, name: "React" },
  { icon: Zap, name: "Next.js" },
  { icon: Layers, name: "Tailwind" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Globe, name: "Node.js" },
  { icon: Cpu, name: "AI/ML" },
  { icon: Settings, name: "Docker" },
  { icon: Smartphone, name: "Mobile" },
  { icon: MessageSquare, name: "LLMs" },
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
