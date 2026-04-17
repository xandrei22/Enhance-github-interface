import { motion } from "motion/react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Image 
            src="/jaslogo.png" 
            alt="DevPort Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <span className="font-mono font-bold uppercase tracking-tighter">
            JA<span className="text-primary">S</span>
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React & AI.
        </p>

        <div className="flex gap-6">
          {Object.entries(PORTFOLIO_DATA.socials).map(([platform, url]) => (
            url && platform !== 'email' && (
              <a 
                key={platform} 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-mono uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {platform}
              </a>
            )
          ))}
        </div>
      </div>
    </footer>
  );
}
