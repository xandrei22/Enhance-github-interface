"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center w-full max-w-7xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 mb-10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Available for new opportunities</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85] mb-10 uppercase text-center"
          >
            {PORTFOLIO_DATA.name.split(' ')[0]} <br />
            <span className="gradient-text neon-glow">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-14 font-light leading-relaxed tracking-wide text-center"
          >
            {PORTFOLIO_DATA.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="h-16 px-10 text-lg gap-3 rounded-full group bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full glass hover:bg-foreground/10 transition-all duration-500 hover:scale-105 active:scale-95">
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center w-full h-full"
        >
          <div className="relative w-full h-[500px] max-w-lg aspect-square">
            {/* Decorative Border with Curves */}
            <div className="absolute inset-0 rounded-[40px] border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm" />
            
            {/* Image Container */}
            <div className="absolute inset-4 rounded-[30px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img 
                src={PORTFOLIO_DATA.heroImage || "https://picsum.photos/seed/hero/600/600"} 
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animated Glow */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[40px] border-2 border-primary/50 shadow-[0_0_30px_var(--color-primary)] opacity-50"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors duration-300">Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent group-hover:from-primary transition-all duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}

