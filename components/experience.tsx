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
    title: "Frontend Developer",
    company: "NAPX",
    period: "15 May 2024 – 15 August 2024",
    description: [
      "Developed an engaging e-commerce website from the ground up, delivering a seamless and intuitive user experience designed to enhance customer engagement and streamline the shopping journey.",
      "Designed and implemented a user-friendly contact interface, enabling users to submit inquiries efficiently, which are then processed by the internal team for personalized follow-up and service.",
      " Integrated multilingual support and virtual reception features, ensuring clear and effective communication with a diverse customer base and enhancing the overall user experience."
    ]
  },
  {
    title: " Frontend Developer",
    company: "REALTORSTAT",
    period: "August 31, 2023 – October 31, 2023",
    description: [
      "Collaborated with a client on a freelance project to enhance their existing real estate website by adding new pages and functionalities.",
      "Implemented key features, including a property and agent filtering system based on location and budget preferences.",
      " Responsible for ongoing website maintenance and updates over a 2-month period, ensuring smooth functionality and improved user experience."
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
