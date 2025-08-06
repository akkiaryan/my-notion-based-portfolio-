"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Ark OS – Educational Operating System Prototype",
    description: "Educational micro-operating system simulation in C",
    details: [
      "Designed a simulated micro-operating system to emulate foundational system-level behaviors.",
      "Implemented arithmetic computation modules and persistent journaling using low-level I/O functions.",
      "Demonstrated memory handling and basic kernel-like routines to enhance understanding of OS internals.",
      "Applied structured programming to reinforce theoretical concepts in system architecture through a practical prototype."
    ],
    technologies: ["C", "File I/O", "Assembly Concepts"],
    link: "https://github.com/akkiaryan/ark-os"
  },
  {
    title: "InTrap – Automation Workflow Platform (SaaS)",
    description: "SaaS platform for building automated workflows across APIs, with Node.js backend",
    details: [
      "Developed a modular automation tool enabling service integration across APIs through configurable nodes.",
      "Constructed asynchronous task pipelines and implemented state persistence for robust failure recovery.",
      "Integrated third-party APIs (e.g., Google Sheets, Slack) to streamline multi-system workflows.",
      "Deployed via containerized infrastructure, reducing manual process overhead by ~50% in trial deployments."
    ],
    technologies: ["Node.js", "Docker", "REST APIs"],
    link: "https://github.com/akkiaryan/intrap"
  },
  {
    title: "Ark Invoice – Invoice Management Platform",
    description: "Full-stack invoice management app (React & Node) enabling automated invoicing and payment reminders",
    details: [
      "Built a scalable invoice management system supporting client profiles, PDF generation, and automated billing reminders.",
      "Integrated backend services for transaction tracking and front-end dashboards for financial overviews.",
      "Designed secure user authentication and multi-tenant data handling for business-grade usability.",
      "Implemented automated email alerts and historical invoice logs, reducing payment delays during pilot adoption."
    ],
    technologies: ["React.js", "Express", "Nodemailer"],
    link: "https://github.com/akkiaryan/ark-invoice"
  }
];

export default function Projects() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <motion.section 
      id="projects"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <Code className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">Projects</h2>
      </div>
      
      <div className="pl-7 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4">
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleItem(index)}
                    className="text-xs flex items-center gap-1"
                  >
                    {expandedItems[index] ? (
                      <>
                        <ChevronDown className="h-3 w-3" />
                        Hide details
                      </>
                    ) : (
                      <>
                        <ChevronRight className="h-3 w-3" />
                        Show details
                      </>
                    )}
                  </Button>
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              
              {expandedItems[index] && (
                <motion.div 
                  className="px-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
