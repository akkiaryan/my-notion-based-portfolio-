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
    title: "REELS PRO",
    description: "Dive into the World of Creating Reels",
    details: [
      "Developed a full-stack short video platform modeled after YouTube Shorts and Instagram Reels, allowing users to view vertically formatted (9:16) videos in a seamless",

      "Implemented secure authentication using JWT, where users receive a token valid for 24 hours, restricting access to the home feed and requiring re-authentication after expiry for enhanced security.",

      "Integrated ImageKit for media handling, enabling users to upload videos with optimized performance, fast content delivery, and secure cloud storage.",

      " Planned advanced user features, including personal profile pages to display uploaded content and functionality for uploaders to delete their own videos, improving content management and user engagement."
    ],
    technologies: ["NextJS", "Tailwind CSS", "Typescript", "NodeJS", "ImageKit", "MongoDB Atlas", "REST APIs", "Jsonwebtoken" ],
    link: "https://github.com/harshitrnjn/reelspro"
  },
  {
    title: "MYSTRY-MSG",
    description: "Inspired by the trend of anonymous NGL-style messaging seen all over Instagram",
    details: [
      "Developed a full stack web application enabling users to send and receive anonymous messages via auto-generated unique links after successful registration with authentication, in which user can send messages without their names being revealed, the person receiving the message won’t know who sent it.",

      "Implemented user dashboards to display received messages, ensuring real-time updates and secure message handling.",

      "Designed and integrated both frontend and backend components, focusing on user experience, data privacy, and system reliability.",

      "Deployed via containerized infrastructure, reducing manual process overhead by ~50% in trial deployments."
    ],
    technologies:  [ "NextJS", "Tailwind CSS", "Nodemailer", "Node.js", "Docker", "REST APIs", "MongoDB Atlas", "Rest API"],
    link: "https://github.com/harshitrnjn/mystery-message"
  },
  {
    title: "N/A",
    description: "",
    details: [
      "",
      "",
      "",
      ""
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
