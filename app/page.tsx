"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "motion/react";

export default function Home() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          
          <section id="about" className="py-40 px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] -z-10" />
            
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative inline-block mb-12">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/20 p-1 bg-background shadow-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/developer/400/400" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <h2 className="text-xs font-mono uppercase tracking-[0.6em] text-primary mb-8 font-bold">About Me</h2>
                <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-16">
                  I don't just write code; I architect <span className="gradient-text">digital experiences</span> that bridge the gap between human intuition and machine precision.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                  <div className="space-y-4">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-primary">Philosophy</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">Focusing on clean, maintainable code and user-centric design principles.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-accent">Mission</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">Building scalable solutions that solve real-world problems through innovation.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-primary">Vision</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">Pushing the boundaries of what's possible in modern web development.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <Skills />
          <Projects />
          <Experience />
          <Gallery />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}
