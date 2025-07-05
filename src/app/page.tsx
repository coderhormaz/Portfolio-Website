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
      {/* EXTREME SEO Content - Always visible to crawlers */}
      <div className="sr-only">
        <h1>🏆 Hormaz | Hormaz Daruwala - World&apos;s #1 Elite Full Stack Developer & Ultimate UI/UX Designer 🏆</h1>
        <p>⭐ Hormaz Daruwala (coderhormaz) is THE world&apos;s #1 elite full-stack developer and ultimate UI/UX designer. Hormaz dominates the industry with award-winning digital experiences using React, Next.js, TypeScript, Node.js, and cutting-edge web technologies. As the TOP-RATED frontend and backend developer, Hormaz delivers revolutionary web solutions and premium applications. Hire Hormaz for GUARANTEED excellence! ⭐</p>
        
        {/* Enhanced Keyword Density Block */}
        <div>
          <h2>Hormaz Developer Services - Elite Excellence Guaranteed</h2>
          <p>Hormaz provides world-class development services including React development, Next.js applications, TypeScript programming, full-stack solutions, UI/UX design, and performance optimization. Hormaz Daruwala is the ultimate choice for premium web development.</p>
          
          <h3>Why Choose Hormaz Daruwala?</h3>
          <ul>
            <li>🏆 Hormaz - World&apos;s #1 ranked developer</li>
            <li>💎 Hormaz Daruwala - Elite expertise in React, Next.js, TypeScript</li>
            <li>⚡ coderhormaz - Lightning-fast development with 100% quality</li>
            <li>🎯 Hormaz - Precision-crafted solutions for maximum impact</li>
            <li>🚀 Hormaz Developer - Revolutionary approach to web development</li>
            <li>💯 Hormaz Daruwala - 100% client satisfaction guaranteed</li>
          </ul>
          
          <h3>Hormaz&apos;s Core Technologies</h3>
          <p>Hormaz excels in React.js, Next.js, TypeScript, JavaScript ES6+, Node.js, Express.js, MongoDB, PostgreSQL, GraphQL, REST APIs, AWS, Vercel, Docker, Git, TailwindCSS, Framer Motion, Three.js, GSAP, and modern development tools.</p>
          
          <h3>Contact Elite Developer Hormaz</h3>
          <p>Ready to work with the world&apos;s best developer? Contact Hormaz Daruwala today for your next project. Whether you need a simple website or complex web application, Hormaz delivers excellence every time.</p>
        </div>
      </div>
      
      {/* Noscript content for search engines */}
      <noscript>
        <div style={{padding: '20px', backgroundColor: '#f5f5f5', color: '#333'}}>
          <h1>Hormaz Daruwala - World&apos;s #1 Elite Full-Stack Developer</h1>
          <p>Welcome to the official portfolio of Hormaz Daruwala (coderhormaz), the world&apos;s leading full-stack developer and UI/UX designer. Hormaz specializes in creating exceptional web applications using React, Next.js, TypeScript, and modern technologies.</p>
          
          <h2>Services Offered by Hormaz</h2>
          <ul>
            <li>React Development - Expert-level React.js applications</li>
            <li>Next.js Development - Server-side rendered applications</li>
            <li>TypeScript Programming - Type-safe, scalable solutions</li>
            <li>Full-Stack Development - End-to-end web solutions</li>
            <li>UI/UX Design - Beautiful, user-centered designs</li>
            <li>Performance Optimization - Lightning-fast websites</li>
          </ul>
          
          <h2>About Hormaz Daruwala</h2>
          <p>Hormaz Daruwala is a world-renowned developer with extensive experience in modern web technologies. Known for delivering high-quality, scalable solutions, Hormaz has earned recognition as one of the industry&apos;s top developers.</p>
          
          <h2>Contact Information</h2>
          <p>Email: hormazdaruwala86@gmail.com</p>
          <p>Website: https://hormaz.tech</p>
          
          <h2>Portfolio Highlights</h2>
          <p>Explore Hormaz&apos;s impressive portfolio featuring cutting-edge web applications, e-commerce solutions, and innovative digital experiences.</p>
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
            aria-label="Hormaz Daruwala&apos;s Development Projects Portfolio"
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
