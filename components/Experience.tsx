"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Briefcase, Award, Calendar, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Experience, Certificate } from "@/lib/types";

export function Experience() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const allItems = [
    ...(PORTFOLIO_DATA.experience || []),
    ...(PORTFOLIO_DATA.certificates || [])
  ];
  
  const categories = ["All", ...new Set(allItems.map(item => item.category))];
  
  const filteredItems = selectedTab === "All" 
    ? allItems 
    : allItems.filter(item => item.category === selectedTab);

  const isExperience = (item: Experience | Certificate): item is Experience => {
    return 'company' in item;
  };

  const isCertificate = (item: Experience | Certificate): item is Certificate => {
    return 'issuer' in item;
  };

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

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-16">
        <TabsList className="rounded-full glass border border-foreground/5 bg-foreground/5 p-1">
          {categories.map((category) => (
            <TabsTrigger 
              key={category}
              value={category}
              className="rounded-full px-6 py-2 text-xs font-mono uppercase tracking-widest data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-all duration-300"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="space-y-20 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-primary/50 before:via-foreground/10 before:to-transparent">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={isExperience(item) ? item.company + item.role : item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.8 }}
            className="relative pl-16 group"
          >
            <div className="absolute left-0 top-1 w-10 h-10 rounded-2xl bg-background border border-border/50 flex items-center justify-center z-10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
              {isExperience(item) ? (
                <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              ) : (
                <Award className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              )}
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tight group-hover:gradient-text transition-all duration-500">
                  {isExperience(item) ? item.role : item.title}
                </h3>
                <p className="text-primary text-lg font-medium tracking-wide">
                  {isExperience(item) ? item.company : item.issuer}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground bg-foreground/5 px-4 py-2 rounded-full border border-border/50 uppercase tracking-widest self-start lg:self-auto">
                <Calendar className="w-3 h-3" />
                {item.period || item.date}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {item.description.map((descItem, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + i * 0.1 }}
                  className="p-6 rounded-2xl glass border-border/50 hover:border-primary/30 transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_var(--color-primary)]" />
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{descItem}</p>
                </motion.div>
              ))}
            </div>

            {isCertificate(item) && item.image && (
              <Button 
                onClick={() => setSelectedCertificate(item)}
                className="rounded-full px-6 h-9 text-xs font-mono uppercase tracking-widest bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 border border-primary/20"
                variant="outline"
              >
                View Certificate
              </Button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden glass border border-primary/20 p-6"
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{selectedCertificate.title}</h3>
                <p className="text-primary text-sm">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
              </div>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full rounded-xl object-cover max-h-96"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

