"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  year: string;
  url: string;
}

const publications: Publication[] = [
  {
    title: "Memory Retrieval Cue: A Framework for Preserving and Enhancing Memory for the Future",
    journal: "Cureus Journal of Computer Science",
    year: "2025",
    url: "https://doi.org/10.7759/s44389-025-03357-2"
  },
  {
    title: "Leveraging Artificial Intelligence and Machine Learning for Predictive Diagnostics in Various Medical Conditions",
    journal: "International Journal of Engineering Research & Technology",
    year: "2024",
    url: "https://www.ijert.org/leveraging-artificial-intelligence-and-machine-learning-for-predictive-diagnostics-in-various-medical-conditions"
  }
];

export default function Publications() {
  return (
    <motion.section 
      id="publications"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">Publications</h2>
      </div>
      
      <div className="pl-7 space-y-4">
        {publications.map((pub, index) => (
          <motion.div 
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-md p-4"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-start">
                <span>{pub.title}</span>
                <ExternalLink className="h-4 w-4 ml-1 mt-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
                {pub.journal}, {pub.year}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
