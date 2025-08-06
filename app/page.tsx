import { Metadata } from "next";
import Banner from "@/components/banner";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Publications from "@/components/publications";
import BlogPreview from "@/components/blog-preview";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import ChatbotButton from "@/components/chatbot/chatbot-button";

export const metadata: Metadata = {
  title: "Akki Aryan - Portfolio",
  description: "Akki Aryan's personal portfolio showcasing projects in backend development, data analysis, and machine learning.",
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 pb-20">
      <Banner />
      
      <div className="space-y-12 mt-8">
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <BlogPreview />
        <Testimonials />
        <Contact />
      </div>
      
      <ChatbotButton />
    </main>
  );
}
