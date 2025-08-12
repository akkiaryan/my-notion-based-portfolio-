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
    quote: "During this period, your contributions have been instrumental in significantly improving our online brand presence. Your exceptional work in building and optimizing our website has had a remarkable impact. You not only enhanced the user experience but also developed a cohesive, fully functional platform that has attracted a wider audience and strengthened our digital footprint. Your expertise in crafting a responsive, user-friendly interface, as well as integrating essential features, has been highly commendable. ",
    name: "NAPX - Team Lead",
    role: "Frontend Development"
  },
  {
    quote: "Harshit has been an invaluable asset to our team as a frontend developer. He took ownership of maintaining our codebase with precision and consistency, ensuring smooth functionality across the project. His proactive approach to implementing regular updates and adding thoughtful new features greatly enhanced the user experience. Harshit’s attention to detail, problem-solving skills, and dedication made a real difference to our product. He is professional, reliable, and a pleasure to collaborate with – highly recommended!",
    name: "REALTORSTAT Team Lead",
    role: "Frontend Development"
  },
  {
    quote: "Harshit developed a full-stack project for our family’s refined oil factory, delivering a robust and user-friendly platform. Even with an unexpected 3-month extension from our side, he stayed committed and polished the product further. The final result received great reviews and exceeded expectations.",
    name: "Client",
    role: "Refined Oil Factory Project"
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
