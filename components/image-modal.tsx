"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          // Adjusted max-width and max-height for the modal content
          className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex items-center justify-center p-4"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 z-10 text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/50"
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </Button>
          {/* Explicitly set width and height for the Image component */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={800} // Set a large explicit width
              height={800} // Set a large explicit height
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
