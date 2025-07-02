"use client";
import React, { Suspense } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/3d/Hero3D"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl animate-pulse" />
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* 3D Model Container */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <Suspense fallback={<div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl animate-pulse" />}>
          <Hero3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <AnimatedText text="Hormaz" className="block" />
              <AnimatedText 
                text="Portfolio" 
                className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" 
                delay={600} 
              />
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
              <AnimatedText 
                text="Full-Stack Developer & UI/UX Designer creating exceptional digital experiences with modern technologies" 
                delay={1200}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
