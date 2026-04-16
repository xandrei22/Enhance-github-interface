"use client";

import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Contact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const projects = PORTFOLIO_DATA.projects;

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, projects.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="contact" className="py-32 px-6 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">
            Gallery <br />
            <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore my latest projects and creative work. Navigate through the carousel or let it play automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-[2.5rem] border-border/50 overflow-hidden relative"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative h-[600px] bg-gradient-to-b from-primary/10 to-transparent">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <div className="flex items-center justify-center">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          {currentProject.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {currentProject.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {currentProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
                        >
                          GitHub
                        </a>
                        <a
                          href={currentProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors duration-300"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8">
              <button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors duration-300 backdrop-blur-sm border border-primary/30"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                      setAutoplay(false);
                      setTimeout(() => setAutoplay(true), 8000);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 w-2 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors duration-300 backdrop-blur-sm border border-primary/30"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute top-8 right-8 text-sm font-mono text-muted-foreground bg-foreground/20 px-4 py-2 rounded-full backdrop-blur-sm border border-border/50">
              {currentIndex + 1} / {projects.length}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

