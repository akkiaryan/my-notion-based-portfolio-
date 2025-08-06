"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from 'lucide-react';
import ChatbotDialog from "./chatbot-dialog";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chatbot"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-medium">Ask me anything</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close chatbot"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <ChatbotDialog />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
