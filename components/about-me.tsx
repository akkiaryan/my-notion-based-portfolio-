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
            I’m Harshit Ranjan — a developer who’s all about building things that work and make sense. Whether it’s frontend polish or backend logic, I dive into every layer of the stack to bring ideas to life. 
          </p>
          <p>
            I take on freelance gigs, not just to write code, but to solve actual tech problems — performance bottlenecks, messy bugs, broken flows — I break them down, fix them up, and make things smoother. I’m not in it for just titles — I’m here to grow as a full-stack engineer who knows how to think, not just build. Real-world challenges keep me going, and I’m always chasing cleaner solutions, sharper logic, and better outcomes.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
