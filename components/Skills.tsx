"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = Array.from(new Set(PORTFOLIO_DATA.skills.map(s => s.category)));

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Technical <br />
              <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              A comprehensive suite of tools and technologies I've mastered to build modern, scalable, and efficient digital solutions.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map(cat => (
                <Badge key={cat} variant="outline" className="rounded-full px-4 py-1 border-foreground/10 text-[10px] uppercase tracking-widest bg-foreground/5">
                  {cat}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-primary/80 font-bold whitespace-nowrap">{category}</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
              
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills
                  .filter(s => s.category === category)
                  .map((skill) => (
                    <motion.span
                      key={skill.name} 
                      className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

