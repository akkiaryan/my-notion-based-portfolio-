import { Metadata } from "next";
import Banner from "@/components/banner";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import ChatbotButton from "@/components/chatbot/chatbot-button";
import Footer from "@/components/footer"; 

export const metadata: Metadata = {
  title: "Harshit Ranjan - Portfolio",
  description: "Harshit Ranjan's personal portfolio showcasing projects in frontend development, backend development.",
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
        <Testimonials />
        <Contact />
      </div>
      
      <ChatbotButton />
      <Footer /> {/* Add the Footer component here */}
    </main>
  );
}
