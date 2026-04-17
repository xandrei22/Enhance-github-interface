"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];
  const [activeItem, setActiveItem] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, idx) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveItem(navItems[idx]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between ${
        isScrolled ? "glass border-b border-border/50 py-3" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12">
          <Image 
            src="/jaslogo.png" 
            alt="JAS Logo" 
            width={48} 
            height={48} 
            className="w-12 h-12"
          />
        </div>
        <span className="font-mono font-bold text-lg tracking-tighter uppercase">
          JA<span className="text-primary">S</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-foreground/5 border border-foreground/5 absolute left-1/2 -translate-x-1/2">
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            onClick={() => setActiveItem(item)}
            className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-full ${
              activeItem === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeItem === item && (
              <motion.div 
                layoutId="activeNav"
                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="w-[1px] h-4 bg-border mx-1" />
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300" asChild>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="w-4 h-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent transition-all duration-300" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-4 h-4" />
          </a>
        </Button>
        <Button className="hidden sm:flex gap-2 rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95" asChild>
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.name}%20%3C${PORTFOLIO_DATA.socials.email}%3E&subject=Job+Inquiry`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-4 h-4" />
            Hire Me
          </a>
        </Button>
      </div>
    </motion.nav>
  );
}

