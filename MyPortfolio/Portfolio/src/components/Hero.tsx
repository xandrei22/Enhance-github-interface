import { motion } from "motion/react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/src/constants";

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

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 mb-10 backdrop-blur-md"
      >
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Available for new opportunities</span>
      </motion.div>

      <div className="text-center max-w-5xl relative">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-10 uppercase"
        >
          {PORTFOLIO_DATA.name.split(' ')[0]} <br />
          <span className="gradient-text neon-glow">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide"
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

