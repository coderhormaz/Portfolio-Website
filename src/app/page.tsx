"use client";
import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ClientOnlyDotGrid from "@/components/ui/ClientOnlyDotGrid";
import Preloader from "@/components/ui/Preloader";
import { Linkedin, Instagram, Github, Mail, Heart } from "lucide-react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { portfolioAnalytics, useScrollTracking } from "@/lib/analytics";

// SEO-optimized page for Hormaz Daruwala portfolio
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Set up scroll tracking for analytics
  useScrollTracking();

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <>      
      <main 
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden w-full animate-in fade-in duration-1000"
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        {/* Schema.org structured data */}
        <meta itemProp="name" content="Hormaz Daruwala Portfolio" />
        <meta itemProp="description" content="Professional portfolio of Hormaz Daruwala, expert full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies." />
        <meta itemProp="url" content="https://hormaz.tech" />
        <meta itemProp="author" content="Hormaz Daruwala" />
        <meta itemProp="keywords" content="Hormaz, Hormaz Daruwala, Hormaz Coder, coder hormaz, coderhormaz, Developer Hormaz, Hormaz Developer, Hormaz Full Stack Developer, Hormaz Frontend Developer" />
        
        {/* Enhanced Interactive Background */}
        <SmoothCursor />
        <div className="fixed inset-0 z-0 w-full h-full" aria-hidden="true">
          <ClientOnlyDotGrid
            dotSize={5}
            gap={20}
            baseColor="#ffffff"
            activeColor="#00008B"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
            className="opacity-50 w-full h-full"
          />
        </div>
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <div id="main-content">
          {/* Hero Section - Primary keyword focus */}
          <section 
            id="home" 
            className="relative z-10"
            itemScope 
            itemType="https://schema.org/Person"
            aria-label="Hormaz Daruwala - Full Stack Developer Introduction"
          >
            <meta itemProp="name" content="Hormaz Daruwala" />
            <meta itemProp="alternateName" content="coderhormaz" />
            <meta itemProp="jobTitle" content="Full-Stack Developer" />
            <meta itemProp="description" content="Professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies." />
            <meta itemProp="url" content="https://hormaz.tech" />
            <HeroSection />
          </section>
          {/* About Section */}
          <section 
            id="about" 
            className="relative z-10"
            itemScope 
            itemType="https://schema.org/AboutPage"
            aria-label="About Hormaz Daruwala - Full Stack Developer"
          >
            <AboutSection />
          </section>
          
          {/* Projects Section */}
          <section 
            id="projects" 
            className="relative z-10"
            itemScope 
            itemType="https://schema.org/CreativeWork"
            aria-label="Hormaz Daruwala's Development Projects Portfolio"
          >
            <ProjectsSection />
          </section>
          
          {/* Contact Section */}
          <section 
            id="contact" 
            className="relative z-10"
            itemScope 
            itemType="https://schema.org/ContactPage"
            aria-label="Contact Hormaz Daruwala - Full Stack Developer"
          >
            <ContactSection />
          </section>
        </div>
      
      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                Hormaz
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Creating exceptional digital experiences with modern technology and innovative design.
              </p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About", "Projects", "Contact"].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect</h4>
              <div className="space-y-2">
                {[
                  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/hormazdaruwala/" },
                  { name: "Instagram", icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/horma_z/" },
                  { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/coderhormaz" },
                  { name: "Email", icon: <Mail className="w-4 h-4" />, url: "mailto:hormazdaruwala86@gmail.com" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                    onClick={() => portfolioAnalytics.trackSocialClick(social.name)}
                  >
                    <span className="mr-2">{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex items-center justify-center gap-1">
              © 2024 Hormaz. All rights reserved. Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js, React Three Fiber, and ShadCN UI.
            </p>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
