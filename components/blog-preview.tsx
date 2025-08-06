"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BlogPostModal from "./blog-post-modal";

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building a Micro-OS: Lessons from Ark OS",
    excerpt: "Exploring the challenges and insights gained from developing an educational operating system prototype.",
    content: `The development of Ark OS represents a focused exploration into the fundamental principles of operating system design through the creation of a simplified, micro-kernel-style prototype. This project was conceived with the objective of transcending purely theoretical understanding and engaging in experiential learning of low-level system behavior, a practice that is critical for aspiring systems engineers and backend developers.

Ark OS was architected to emulate core system-level functionalities within a constrained, educational context. The prototype encompassed:

Modular arithmetic computation modules to demonstrate process handling and execution flow.

Persistent journaling mechanisms achieved through low-level file I/O operations, ensuring that state information could survive runtime interruptions without reliance on high-level libraries.

Kernel-like routines for memory management and task simulation, designed to reflect simplified scheduling and resource allocation processes observed in real operating systems.

The primary challenges encountered during development reinforced the complexity of system-level engineering:

State Management: Maintaining process states and transitions without the abstractions provided by modern frameworks required deliberate planning of memory layouts and I/O flows.

Code Modularity: Writing C code that remained structured, maintainable, and capable of handling multiple subsystems emphasized the importance of disciplined architectural planning.

Low-Level Understanding: Engaging with assembly-level concepts and hardware-proximate logic provided insights into how minimal instructions interact with memory and the CPU to enable higher-level functionality.

From an academic perspective, Ark OS exemplifies constructive learning in system architecture. It demonstrates that simplified, well-scoped implementations are effective pedagogical tools for reinforcing complex concepts such as kernel operations, memory allocation, and state persistence. The project aligns with core learning objectives in Operating Systems and Systems Programming courses, where practical engagement complements theoretical knowledge to cultivate holistic comprehension.

The impact and takeaways of the project extend beyond academia into practical system and backend engineering:

It strengthened core competencies in low-level programming and memory management, which are transferable to high-performance backend systems.

It validated the principle of modularity, underscoring that even minimal OS prototypes benefit from structured design to avoid instability and technical debt.

It bridged the gap between theory and implementation, fostering the ability to translate textbook principles into functional, verifiable systems.

Scholarly Key Highlights:

Conceptualized and implemented an educational micro-operating system to explore foundational OS design.

Achieved persistent state management through low-level file I/O without external abstractions.

Demonstrated kernel-level memory handling and modular subsystem integration.

Provided a pedagogically valuable framework for experiential learning in operating systems and backend design.`,
    date: "June 15, 2025",
    readTime: "8 min"
  },
  {
    title: "Responsible AI: Balancing Innovation and Ethics",
    excerpt: "Reflections on my experience developing evaluation frameworks for AI systems governance at MedAI.",
    content: `The development and deployment of Artificial Intelligence (AI) systems in high-stakes domains such as healthcare necessitate a careful balance between innovative capabilities and ethical responsibility. During my tenure as a Research Analyst at MedAI Technologies, I engaged in a focused study of Responsible AI (RAI) practices, emphasizing the creation of evaluation frameworks that ensure fairness, transparency, and trust in AI-assisted applications.

The project's core objective was to address the limitations of black-box AI models, which, despite achieving high predictive accuracy, often lack interpretability—a critical shortcoming in clinical and decision-support environments. My work encompassed several key tasks:

Framework Design: Constructed modular evaluation pipelines to assess bias detection, model robustness, and interpretability, ensuring that system outputs were explainable and actionable.

Edge-Case Simulation: Modeled rare or high-risk scenarios to stress-test AI behavior, uncover hidden vulnerabilities, and measure system resilience under non-ideal conditions.

Governance Documentation: Authored internal guidelines for model trust calibration, integrating ethical and regulatory considerations for future deployment in healthcare settings.

The academic and professional relevance of this work lies in its alignment with Responsible AI principles as endorsed by leading AI governance frameworks. By integrating ethical compliance and technical evaluation, this research addressed the intersection of model performance and human trust. The process revealed that model explainability and stakeholder confidence are as critical as raw accuracy for real-world adoption.

Impact and Lessons Learned:

Explainability enhances trust: AI models must justify decisions in clear, human-interpretable terms to be reliable in clinical contexts.

Edge-case evaluation is indispensable: Rare or extreme scenarios often reveal systemic biases or weaknesses that routine testing overlooks.

Ethical alignment accelerates adoption: Integrating fairness and compliance into the model life cycle fosters stakeholder confidence and regulatory readiness.

Scholarly Key Highlights:

Developed Responsible AI evaluation frameworks focused on fairness, robustness, and transparency.

Conducted edge-case simulations to identify vulnerabilities and ensure ethical deployment.

Authored governance and trust calibration documentation for AI systems.

Demonstrated the academic and industrial significance of integrating RAI principles into AI model evaluation.`,
    date: "April 3, 2025",
    readTime: "6 min"
  },
  {
    title: "Optimizing Network Performance Visualization",
    excerpt: "Technical deep-dive into the dashboard I built for monitoring WAN performance metrics at ONGC.",
    content: `Effective network monitoring and diagnostics form the backbone of modern large-scale organizations, where downtime or latency can significantly impact operations. During my internship at Oil and Natural Gas Corporation (ONGC), I spearheaded the development of a WAN Performance Visualization Dashboard, designed to deliver real-time insights across multiple network nodes and streamline diagnostic processes.

The project was conceived to overcome latency and visibility limitations in ONGC's existing network monitoring workflows. My methodology combined comparative protocol analysis, backend data processing, and interactive visualization to provide operational intelligence in a scalable manner. Key contributions included:

Dashboard Development: Designed a dynamic, modular visualization dashboard capable of aggregating and presenting key WAN performance metrics in near real-time.

Protocol Evaluation: Conducted comparative analyses of network protocols to determine the most efficient configurations for reliability and reduced latency.

System Integration: Seamlessly integrated the dashboard with ONGC's existing network infrastructure, enabling improved visibility without disrupting operational workflows.

The academic significance of this project lies in its demonstration of applied network engineering principles, particularly the translation of raw network telemetry into actionable insights. By implementing data preprocessing pipelines and modular visualization components, the solution provided both immediate operational improvements and a framework for future predictive analytics.

Impact and Lessons Learned:

Real-time visualization drives decision-making: Network teams responded faster to anomalies with live dashboards.

Protocol optimization enhances efficiency: Proper selection of network protocols reduced diagnostic delays.

Integration is key to adoption: Solutions that complement, rather than replace, existing systems are adopted more readily in industrial settings.

Scholarly Key Highlights:

Developed a real-time WAN performance monitoring dashboard for industrial deployment.

Conducted network protocol optimization to improve reliability and reduce latency.

Implemented modular visualization pipelines for actionable network insights.

Enhanced applied network engineering skills, bridging theory with operational impact.`,
    date: "March 22, 2025",
    readTime: "10 min"
  }
];

export default function BlogPreview() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <motion.section 
      id="blog"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-gray-500" />
          <h2 className="text-xl font-semibold">Blog</h2>
        </div>
        <Button variant="ghost" size="sm" className="text-sm flex items-center gap-1">
          View all posts
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="pl-7 space-y-4">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-md p-4 cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => openPost(post)}
          >
            <h3 className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {post.excerpt}
            </p>
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} read</span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={closePost} />
      )}
    </motion.section>
  );
}
