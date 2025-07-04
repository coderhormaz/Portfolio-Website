"use client";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useRevealAnimation } from "@/lib/animations";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/3d/Hero3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
});

const HeroSection = () => {
  const subtitleRef = useRevealAnimation(1000);
  const buttonRef = useRevealAnimation(1500);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Effects */}
      <Spotlight className="top-20 left-4 sm:left-20 md:left-60 md:top-20" fill="#8B5CF6" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            <AnimatedText text="Hormaz Portfolio" delay={500} />
          </h1>
          
          <p 
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            <AnimatedText text="Crafting exceptional digital experiences with cutting-edge technology and innovative design." delay={1000} />
          </p>
          
          <div 
            ref={buttonRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* 3D Model */}
        <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] w-full order-first lg:order-last">
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
          }>
            <Hero3D />
          </Suspense>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 hover:border-white/50 transition-colors duration-300">
          <div className="w-1 h-2 bg-white/50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
