"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent } from "react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-none">
              Let's <br />
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-md font-light leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass border-border/50 group transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-lg">{PORTFOLIO_DATA.socials.email}</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass border-border/50 group transition-all duration-300 hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Socials</p>
                  <p className="font-medium text-lg">@alexchen_dev</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                  <Input 
                    required
                    placeholder="John Doe" 
                    className="bg-foreground/5 border-border/50 h-14 rounded-2xl focus:ring-primary focus:border-primary/50 transition-all duration-300 text-base" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                  <Input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-foreground/5 border-border/50 h-14 rounded-2xl focus:ring-primary focus:border-primary/50 transition-all duration-300 text-base" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                <Input 
                  required
                  placeholder="Project Inquiry" 
                  className="bg-foreground/5 border-border/50 h-14 rounded-2xl focus:ring-primary focus:border-primary/50 transition-all duration-300 text-base" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea 
                  required
                  placeholder="Tell me about your project..." 
                  className="bg-foreground/5 border-border/50 min-h-[180px] rounded-2xl focus:ring-primary focus:border-primary/50 transition-all duration-300 text-base resize-none" 
                />
              </div>
              
              <Button 
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-16 text-lg gap-3 rounded-2xl group transition-all duration-500 ${
                  isSubmitted ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                ) : isSubmitted ? (
                  <>
                    Message Sent
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

