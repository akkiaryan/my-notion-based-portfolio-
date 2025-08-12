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
  const profileImageUrl = "https://res.cloudinary.com/dufsbdr8v/image/upload/v1739467548/dpkq8gfwhppby401vs7q.jpg";

  return (
    <motion.div 
      className="relative w-full h-64 md:h-80 mt-4 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <h1 className="text-2xl font-bold text-white">Harshit Ranjan</h1>
          <p className="text-white/90">Full Stack Developer | Aspiring Software Developer</p>
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
