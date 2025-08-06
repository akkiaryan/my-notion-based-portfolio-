"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
}

// Sample responses based on keywords
const getBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
    return "Akki has worked as a Network Performance Visualization Intern at ONGC, a Research Analyst for AI Systems Governance at MedAi Technologies, and as a UI/UX intern at NAPX where he designed websites and curated product catalogs. He's also been an active member of the IEEE Computer Society chapter.";
  }
  
  if (lowerMessage.includes("project") || lowerMessage.includes("ark os")) {
    return "Akki has worked on several projects including Ark OS (an educational operating system prototype), InTrap (an automation workflow platform), and Ark Invoice (an invoice management platform). Each project demonstrates his skills in different areas like system design, backend development, and full-stack applications.";
  }
  
  if (lowerMessage.includes("node.js") || lowerMessage.includes("nodejs")) {
    return "Akki has used Node.js in two main projects: InTrap (an automation workflow platform) and Ark Invoice (an invoice management system). Both leverage Node.js for backend functionality.";
  }
  
  if (lowerMessage.includes("skill") || lowerMessage.includes("technology")) {
    return "Akki's skills include programming languages (Python, SQL, JavaScript, C, Shell), web development (React.js, Node.js, Express.js, MongoDB), data & AI tools (Pandas, NumPy, Scikit-learn, LangChain), and soft skills like analytical reasoning and technical writing.";
  }
  
  if (lowerMessage.includes("education") || lowerMessage.includes("study")) {
    return "Akki is pursuing a Bachelor of Technology in Computer Science Engineering at Vellore Institute of Technology (VIT), Vellore. He's expected to graduate in May 2026 with a current CGPA of 8.19. He was also part of the IEEE Computer Society chapter where he helped plan events like Cicada for ARCS.";
  }
  
  if (lowerMessage.includes("publication") || lowerMessage.includes("research")) {
    return "Akki has published two research papers: 'Memory Retrieval Cue: A Framework for Preserving and Enhancing Memory for the Future' in Cureus Journal (2025) and 'Leveraging Artificial Intelligence and Machine Learning for Predictive Diagnostics in Various Medical Conditions' in IJERT (2024).";
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("reach")) {
    return "You can contact Akki via email at akkiaryan.social@gmail.com or connect with him on LinkedIn at linkedin.com/in/itsmeakki.";
  }
  
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! I'm Akki's portfolio assistant. How can I help you today? You can ask me about his experience, projects, or skills!";
  }
  
  return "I'm Akki's portfolio assistant. You can ask me about his experience, projects, skills, education, or publications. How can I help you learn more about Akki?";
};

export default function ChatbotDialog() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm Akki's portfolio assistant. Ask me anything about his experience, projects, or skills!",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate bot typing
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(input),
        sender: "bot"
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === "user"
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-blue-100 dark:bg-blue-900"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-4 py-2 bg-blue-100 dark:bg-blue-900">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="flex-1"
          />
          <Button size="icon" onClick={handleSend} disabled={!input.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
