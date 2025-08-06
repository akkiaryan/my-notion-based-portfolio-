"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageModal from "./image-modal"; // Import the new ImageModal component

export default function Banner() {
  const [mounted, setMounted] = useState(false);
  const [isProfileImageOpen, setIsProfileImageOpen] = useState(false); // State for modal

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Updated profile image URL
  const profileImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-06%20at%2013.52.40-Vep7xfG6EsynY6572OiBaGJJVNeefi.jpeg";

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
        <button
          onClick={() => setIsProfileImageOpen(true)} // Open modal on click
          className="relative h-20 w-20 rounded-full border-4 border-white overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="View profile picture"
        >
          <Image 
            src={profileImageUrl || "/placeholder.svg"}
            alt="Akki Aryan"
            fill
            className="object-cover"
          />
        </button>
        
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-white">Akki Aryan</h1>
          <p className="text-white/90">Backend Developer & Data Researcher</p>
        </div>
      </div>

      {isProfileImageOpen && (
        <ImageModal 
          src={profileImageUrl || "/placeholder.svg"}
          alt="Akki Aryan - Full Size"
          onClose={() => setIsProfileImageOpen(false)} 
        />
      )}
    </motion.div>
  );
}
