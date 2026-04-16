"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Mail, MessageSquare } from "lucide-react";

export function Connect() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-none">
        Let's <br />
        <span className="gradient-text">Connect</span>
      </h2>
      <p className="text-muted-foreground text-xl mb-12 max-w-md font-light leading-relaxed">
        Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
      </p>

      <div className="space-y-6">
        <motion.div 
          whileHover={{ x: 10 }}
          className="flex items-center gap-5 p-5 rounded-2xl glass border-border/50 group transition-all duration-300 hover:border-primary/30"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</p>
            <p className="font-medium text-lg">{PORTFOLIO_DATA.socials.email}</p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ x: 10 }}
          className="flex items-center gap-5 p-5 rounded-2xl glass border-border/50 group transition-all duration-300 hover:border-accent/30"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
            <MessageSquare className="w-7 h-7 text-accent" />
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Socials</p>
            <p className="font-medium text-lg">@alexchen_dev</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
