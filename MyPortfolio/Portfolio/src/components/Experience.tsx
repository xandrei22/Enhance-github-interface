import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-primary/80 font-bold">Career</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
          Professional <br />
          <span className="gradient-text">Journey</span>
        </h2>
      </motion.div>

      <div className="space-y-20 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-primary/50 before:via-foreground/10 before:to-transparent">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.8 }}
            className="relative pl-16 group"
          >
            <div className="absolute left-0 top-1 w-10 h-10 rounded-2xl bg-background border border-border/50 flex items-center justify-center z-10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
              <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tight group-hover:gradient-text transition-all duration-500">{exp.role}</h3>
                <p className="text-primary text-lg font-medium tracking-wide">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground bg-foreground/5 px-4 py-2 rounded-full border border-border/50 uppercase tracking-widest self-start lg:self-auto">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exp.description.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + i * 0.1 }}
                  className="p-6 rounded-2xl glass border-border/50 hover:border-primary/30 transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_var(--color-primary)]" />
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

