"use client";

import { motion } from "framer-motion";
import { Lightbulb } from 'lucide-react';
import Image from "next/image";

interface SkillCategory {
  title: string;
  skills: string;
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: "Python, SQL, JavaScript (ES6+), C, Shell",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375de42a-fc94-4552-8bb1-695be550b435-Ex5c7K5aEdeZwJlNOBVuyPDWPTrnXY.gif"
  },
  {
    title: "Web Development",
    skills: "React.js, Node.js, Express.js, MySQL, MongoDB, HTML/CSS, Tailwind, Figma",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/74f2307b-40d4-440c-98e3-f05b7b440361-cMbB6wV2oqHsCaxNM7ahBdv9Fl4axg.jpeg"
  },
  {
    title: "Data & AI Tools",
    skills: "Pandas, NumPy, Scikit-learn, Power BI, Matplotlib, Seaborn, LangChain, HuggingFace, RAG, Prompt Engineering",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/217eebd1-8646-4f5e-949a-750c20a01283-ccMeTV7KKdsjyyF3uXPboU5NecUCHj.gif"
  },
  {
    title: "Soft Skills",
    skills: "Analytical Reasoning, Collaboration, Technical Writing, Project Coordination, Adaptability, Leadership",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0581619b-84b9-4030-bcc3-eabf46bcafb5-L3Fo8CBq2wnK6L6e4mqkIflwg5ImyZ.gif"
  }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">Skills</h2>
      </div>
      
      <div className="pl-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-md p-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium">{category.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
