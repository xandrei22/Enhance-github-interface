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

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-primary/80 font-bold">{category}</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
              
              <div className="space-y-6">
                {PORTFOLIO_DATA.skills
                  .filter(s => s.category === category)
                  .map((skill, sIdx) => (
                    <motion.div 
                      key={skill.name} 
                      className="group space-y-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                        <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: idx * 0.1 + sIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full bg-gradient-to-r from-primary to-accent relative z-10"
                        />
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: idx * 0.1 + sIdx * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 bg-primary/20 blur-sm"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

