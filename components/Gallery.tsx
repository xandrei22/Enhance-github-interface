"use client";

import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Connect } from "./Connect";
import { useState, useEffect } from "react";

export function Gallery() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Connect />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6">
                <button
                  onClick={() => paginate(-1)}
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors duration-300 backdrop-blur-sm border border-primary/30"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
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
                          ? "bg-primary w-6"
                          : "bg-primary/30 w-2 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => paginate(1)}
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors duration-300 backdrop-blur-sm border border-primary/30"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground bg-foreground/20 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50">
                {currentIndex + 1} / {projects.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

