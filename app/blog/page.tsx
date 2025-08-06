import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Blog - Akki Aryan",
  description: "Technical articles and insights by Akki Aryan",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "building-micro-os",
    title: "Building a Micro-OS: Lessons from Ark OS",
    excerpt: "Exploring the challenges and insights gained from developing an educational operating system prototype.",
    date: "June 15, 2025",
    readTime: "8 min",
    tags: ["Operating Systems", "C", "System Design"]
  },
  {
    slug: "responsible-ai",
    title: "Responsible AI: Balancing Innovation and Ethics",
    excerpt: "Reflections on my experience developing evaluation frameworks for AI systems governance at MedAI.",
    date: "April 3, 2025",
    readTime: "6 min",
    tags: ["AI", "Ethics", "Research"]
  },
  {
    slug: "network-performance-visualization",
    title: "Optimizing Network Performance Visualization",
    excerpt: "Technical deep-dive into the dashboard I built for monitoring WAN performance metrics at ONGC.",
    date: "March 22, 2025",
    readTime: "10 min",
    tags: ["Data Visualization", "Networks", "Dashboard Design"]
  },
  {
    slug: "automation-workflow-platform",
    title: "Building InTrap: A Modular Automation Platform",
    excerpt: "How I designed and implemented a SaaS platform for integrating services via configurable nodes.",
    date: "February 8, 2025",
    readTime: "12 min",
    tags: ["Node.js", "Automation", "API Integration"]
  },
  {
    slug: "invoice-management-system",
    title: "Streamlining Invoicing with Ark Invoice",
    excerpt: "The architecture and implementation details of my full-stack invoice management platform.",
    date: "January 15, 2025",
    readTime: "9 min",
    tags: ["React", "Express", "Full-Stack"]
  }
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Blog</h1>
      </div>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input 
          placeholder="Search articles..." 
          className="pl-10"
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div 
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mt-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} read</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
