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

  return (
    <>      
      {/* SEO Content - Always visible to crawlers */}
      <div className="sr-only">
        <h1>Hormaz Daruwala - Full Stack Developer</h1>
        <p>Professional portfolio of Hormaz Daruwala (coderhormaz), expert full-stack developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Experienced in frontend development, backend engineering, UI/UX design, and creating exceptional digital experiences.</p>
        <h2>Skills & Expertise</h2>
        <p>React, Next.js, TypeScript, JavaScript, Node.js, Python, HTML5, CSS3, Tailwind CSS, Three.js, React Three Fiber, MongoDB, PostgreSQL, REST APIs, GraphQL, Git, Docker, AWS, Vercel</p>
        <h2>Contact Information</h2>
        <p>Email: hormazdaruwala86@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/hormazdaruwala/</p>
        <p>GitHub: https://github.com/coderhormaz</p>
      </div>

      {/* NoScript fallback for crawlers */}
      <noscript>
        <div className="min-h-screen bg-black text-white p-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Hormaz Daruwala</h1>
            <p className="text-xl text-gray-300">Full Stack Developer & UI/UX Designer</p>
          </header>
          
          <main className="max-w-4xl mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed">
                Professional Full-Stack Developer (coderhormaz) specializing in React, Next.js, TypeScript, and modern web technologies. 
                Expert in creating exceptional digital experiences with cutting-edge solutions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <p className="text-gray-300">
                React, Next.js, TypeScript, JavaScript, Node.js, Python, HTML5, CSS3, Tailwind CSS, 
                Three.js, React Three Fiber, MongoDB, PostgreSQL, REST APIs, GraphQL, Git, Docker, AWS, Vercel
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="text-gray-300">
                <p>Email: hormazdaruwala86@gmail.com</p>
                <p>LinkedIn: https://www.linkedin.com/in/hormazdaruwala/</p>
                <p>GitHub: https://github.com/coderhormaz</p>
                <p>Instagram: https://www.instagram.com/horma_z/</p>
              </div>
            </section>
          </main>
        </div>
      </noscript>

      {/* Preloader - Only shown to users */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <main 
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-x-hidden w-full animate-in fade-in duration-1000"
        style={{ display: isLoading ? 'none' : 'block' }}
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        
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
