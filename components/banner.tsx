"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      className="relative w-full h-64 md:h-80 mt-4 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notion%20banner%20animation.gif-fXlWEAGFnBPSVf9sDmmnp7CN6oWalJ.jpeg"
        alt="Japanese landscape with pagodas and cherry blossoms"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 flex items-end">
        <div className="relative h-20 w-20 rounded-full border-4 border-white overflow-hidden">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-06%20at%2013.52.40-vLpz9hYLnYUU4UhwypxNbgO25UmIC5.jpeg"
            alt="Akki Aryan"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-white">Akki Aryan</h1>
          <p className="text-white/90">Backend Developer & Data Researcher</p>
        </div>
      </div>
    </motion.div>
  );
}
