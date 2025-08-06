"use client";

import { motion } from "framer-motion";
import { MessageSquare } from 'lucide-react';
import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Throughout his time in our R&D department, Akki Aryan consistently demonstrated a strong aptitude for research, creative problem-solving, and a drive to innovate. His contributions had a meaningful impact on our projects, and he quickly became a trusted and valued team member.",
    name: "Nidhi B Kurpad",
    role: "MedAi Founder and Leader"
  },
  {
    quote: "Akki did an amazing job as a UI/UX intern at NAPX. He designed a fantastic website for us, making the user experience seamless and visually stunning. He also helped curate our product catalog, which turned out great. Akki is creative, hardworking, and a pleasure to work with – highly recommend him!",
    name: "NAPX Team Lead",
    role: "UI/UX Department"
  },
  {
    quote: "During his time in our IEEE Computer Society chapter, Akki stood out as a proactive and dedicated junior. He played a key role in the strategic planning of events like Cicada for ARCS, our flagship event, and his teamwork and collaborative spirit were truly commendable.",
    name: "Siddhant Malpani",
    role: "Ex-IEEE CS chairperson"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section 
      id="testimonials"
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-gray-500" />
        <h2 className="text-xl font-semibold">Testimonials</h2>
      </div>
      
      <div className="pl-7">
        <div className="border border-gray-200 dark:border-gray-800 rounded-md p-6 relative">
          
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 dark:text-gray-300 italic">"{testimonials[activeIndex].quote}"</p>
            
            <div className="mt-4">
              <p className="font-medium">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</p>
            </div>
          </motion.div>
          
          <div className="flex justify-between mt-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex 
                      ? "bg-gray-800 dark:bg-gray-200" 
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
