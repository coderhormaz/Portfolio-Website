"use client";
import React, { Suspense, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/3d/Hero3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-r from-amber-500/10 to-cyan-500/10 rounded-lg animate-pulse" />
});

const roles = ["Full Stack Developer", "UI/UX Designer", "Web3 Engineer", "Mobile App Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Effects */}
      <Spotlight className="top-20 left-4 sm:left-20 md:left-60 md:top-20" fill="#F59E0B" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
          {/* Role Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >
            <span className="h-px w-8 bg-gradient-to-r from-amber-400/80 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-amber-400/80 glass px-3 py-1 rounded-full"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="leading-[1.1]"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white">
              Hormaz
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight text-white/70 mt-1">
              Daruwala
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            3+ years building high-impact web apps, blockchain systems, and mobile experiences. 15+ hackathons, 2 first-place wins, published on Google Play.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-0.5 w-full sm:w-auto shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.3)]"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">&#8594;</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] hover:border-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto backdrop-blur-xl bg-white/[0.04]"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
        
        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] w-full order-first lg:order-last"
        >
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-r from-amber-500/10 to-cyan-500/10 rounded-lg animate-pulse" />
          }>
            <Hero3D />
          </Suspense>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 hover:border-amber-500/40 transition-colors duration-500 backdrop-blur-md bg-white/[0.03]">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-amber-400/60 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
