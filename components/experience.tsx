"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Intern – Network Performance Visualization",
    company: "ONGC",
    period: "May 2025 – July 2025",
    description: [
      "Developed a dynamic dashboard to monitor WAN performance metrics across multiple nodes.",
      "Conducted comparative analysis of network protocol standards and recommended optimal configurations based on efficiency and reliability.",
      "Facilitated integration with existing network infrastructure to improve operational visibility and reduce diagnostic latency."
    ]
  },
  {
    title: "Research Analyst – AI Systems Governance",
    company: "MedAI Technologies",
    period: "Sep 2024 – Nov 2024",
    description: [
      "Contributed to the development of evaluation frameworks for responsible AI, focusing on fairness, transparency, and accountability in data-intensive systems.",
      "Modeled edge-case scenarios in AI behavior and assessed system robustness in compliance with ethical standards.",
      "Drafted internal review documentation for model interpretability and trust calibration in AI-assisted applications."
    ]
  }
];

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <motion.section 
      id="experience"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">Experience</h2>
      </div>
      
      <div className="pl-7 space-y-3">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div>
                <h3 className="font-medium">{exp.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.company} • {exp.period}
                </p>
              </div>
              {expandedItems[index] ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedItems[index] && (
              <motion.div 
                className="p-4 pt-0 border-t border-gray-200 dark:border-gray-800"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
