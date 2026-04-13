import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Folder className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-primary/80 font-bold">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Featured <br />
              <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg font-light leading-relaxed">
              A selection of projects that demonstrate my technical capabilities and commitment to high-quality software engineering.
            </p>
          </motion.div>
          <Button variant="outline" className="rounded-full glass hover:bg-foreground/10 px-8 h-12 transition-all duration-500 hover:scale-105 active:scale-95">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="group overflow-hidden glass-hover glass border-foreground/5 h-full flex flex-col relative">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button size="icon" variant="secondary" className="rounded-full w-12 h-12 bg-foreground/10 hover:bg-foreground/20 border-foreground/10" asChild>
                          <a href={project.github} target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
                        </Button>
                      </motion.div>
                    )}
                    {project.link && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button size="icon" className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
                          <a href={project.link} target="_blank" rel="noreferrer"><ExternalLink className="w-5 h-5" /></a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
                <CardContent className="p-8 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[9px] uppercase tracking-widest bg-foreground/5 border border-foreground/5 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-500">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span>View Details</span>
                    <div className="h-[1px] w-8 bg-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

