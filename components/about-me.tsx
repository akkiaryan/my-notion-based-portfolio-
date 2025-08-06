"use client";

import { motion } from "framer-motion";
import { User } from 'lucide-react';

export default function AboutMe() {
  return (
    <motion.section 
      id="about"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <User className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">About Me</h2>
      </div>
      
      <div className="pl-7">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            I am Akki Aryan, a final‑year Computer Science Engineering student at VIT Vellore, passionate about building intelligent, data‑driven systems that bridge research and real‑world applications. My work spans backend development, data analytics, and applied AI/ML, with published research in memory augmentation frameworks and AI‑driven predictive diagnostics.
          </p>
          <p>
            Currently, I am advancing projects in responsible AI and computational genomics, focusing on scalable automation and actionable insights. I am actively seeking roles in data engineering, backend development, or research‑driven product teams where I can translate cutting‑edge AI and system design principles into impactful solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
