"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/lib/animations";
import Image from "next/image";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShineOverlay } from "@/components/ui/shine-overlay";
import { ExternalLink, Github, Palette, Rocket, Globe, Layers, Layout, Paintbrush, LayoutGrid } from "lucide-react";

const projects = [
  {
    title: "Token Plus NFT Launcher",
    description: "A comprehensive platform for creating and deploying both NFTs and tokens on the Base blockchain, featuring a drawing board, customizable token parameters, and Web3 wallet integration.",
    tech: ["Web3.js", "React", "Solidity", "Base Chain", "MetaMask", "ERC-20/721"],
    image: "/basenft.mp4",
    isVideo: true,
    demoUrl: "https://kingsdontquit.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/TokenPlusNFTlauncher",
  },
  {
    title: "Lightship Clone",
    description: "A pixel-perfect clone of the Niantic Lightship website with advanced animations, parallax effects, and interactive elements that showcase front-end development expertise.",
    tech: ["JavaScript", "CSS3", "HTML5", "GSAP", "ScrollTrigger", "Responsive Design"],
    image: "/Lightship.mp4",
    isVideo: true,
    demoUrl: "https://hormaz-lightship.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/lightship-clone",
  },
  {
    title: "Selemen Clone",
    description: "A meticulously crafted clone of the Selemen website featuring modern design elements, smooth animations, and fully responsive layout with attention to detail.",
    tech: ["CSS3", "HTML5", "JavaScript", "Animation", "Flexbox/Grid", "Responsive Design"],
    image: "/selemen.mp4",
    isVideo: true,
    demoUrl: "https://hormaz-selemen.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/selemen-clone",
  },
  {
    title: "Moqo Clone",
    description: "A precise recreation of the Moqo website with clean CSS implementation, responsive design, and interactive elements for an optimal user experience across all devices.",
    tech: ["CSS3", "HTML5", "JavaScript", "Grid Layout", "Responsive Design", "Animations"],
    image: "/moqo.mp4",
    isVideo: true,
    demoUrl: "https://hormaz-moqo.netlify.app/",
    codeUrl: "https://github.com/coderhormaz/moqo-clone",
  }
];

const ProjectsSection = () => {
  const titleRef = useRevealAnimation(200);
  const descriptionRef = useRevealAnimation(400);

  return (
    <section className="py-16 sm:py-20 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </h2>
          <p 
            ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            A showcase of my recent work, featuring innovative solutions and 
            cutting-edge technologies that push the boundaries of web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <div key={project.title} className="relative group">
              {/* Outer shine border */}
              <ShineBorder 
                borderWidth={2} 
                duration={index % 2 === 0 ? 8 : 10} // Alternate durations for variety
                shineColor={
                  project.title.includes("NFT") || project.title.includes("Token") 
                    ? ["#8B5CF6", "#6366F1", "#4F46E5"] 
                    : project.title.includes("Lightship") 
                    ? ["#22D3EE", "#2563EB", "#0EA5E9"] 
                    : project.title.includes("Selemen") 
                    ? ["#EC4899", "#8B5CF6", "#D946EF"] 
                    : ["#10B981", "#3B82F6", "#14B8A6"]
                } 
                className="opacity-80 transition-all duration-500 ease-out rounded-xl absolute inset-0 z-10"
                style={{ filter: "blur(1px)" }}
              />
              <CardSpotlight className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-black/50 hover:bg-black/60 transition-colors duration-500 z-0">
                {/* Inner shine border with different animation timing */}
                <ShineBorder 
                  borderWidth={1} 
                  duration={index % 2 === 0 ? 10 : 8} // Opposite timing of outer border
                  shineColor={
                    project.title.includes("NFT") || project.title.includes("Token") 
                      ? ["#8B5CF6", "#6366F1", "#4F46E5"] 
                      : project.title.includes("Lightship") 
                      ? ["#22D3EE", "#0EA5E9", "#2563EB"] 
                      : project.title.includes("Selemen") 
                      ? ["#EC4899", "#D946EF", "#8B5CF6"] 
                      : ["#10B981", "#14B8A6", "#3B82F6"]
                  } 
                  style={{ filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))" }}
                  className="opacity-70 transition-all duration-500 ease-out rounded-lg absolute inset-0 z-50"
                />
                
                {/* Additional shine overlay for enhanced effect */}
                <ShineOverlay 
                  thickness={2}
                  duration={index % 2 === 0 ? 8 : 6} 
                  color={
                    project.title.includes("NFT") || project.title.includes("Token") 
                      ? "rgba(139, 92, 246, 0.2)" 
                      : project.title.includes("Lightship") 
                      ? "rgba(34, 211, 238, 0.2)" 
                      : project.title.includes("Selemen") 
                      ? "rgba(236, 72, 153, 0.2)" 
                      : "rgba(16, 185, 129, 0.2)"
                  }
                  className="z-45"
                />
                {/* Project Image or Video */}
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg z-10 border border-white/5 mx-2 my-2">
                  {project.isVideo ? (
                    <div className="w-full h-full relative group-hover:opacity-90 transition-opacity duration-300 border border-white/10 shadow-inner shadow-black/50">
                      <video 
                        src={project.image} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="object-cover w-full h-full"
                        ref={(el) => {
                          if (el && project.image.includes('basenft')) {
                            el.playbackRate = 2.0;
                          }
                        }}
                        onMouseEnter={(e) => {
                          const video = e.target as HTMLVideoElement;
                          if (video.paused) video.play();
                          if (project.image.includes('basenft')) {
                            video.playbackRate = 2.0;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></span>
                        Video
                      </div>
                    </div>
                  ) : project.image.startsWith('/') && !project.image.includes('placeholder') ? (
                    <div className="w-full h-full relative group-hover:opacity-80 transition-opacity duration-300">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      {project.title.includes("NFT") || project.title.includes("Token") ? (
                        <Palette className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-purple-400 opacity-50" />
                      ) : project.title.includes("Lightship") ? (
                        <Layers className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-cyan-400 opacity-50" />
                      ) : project.title.includes("Selemen") ? (
                        <Layout className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-pink-400 opacity-50" />
                      ) : project.title.includes("Moqo") ? (
                        <LayoutGrid className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-teal-400 opacity-50" />
                      ) : (
                        <Rocket className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-400 opacity-50" />
                      )}
                    </div>
                  )}
                  <div className="absolute inset-0 z-40 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                      <Button 
                        size="sm" 
                        className="bg-white text-black hover:bg-gray-200 text-xs sm:text-sm px-3 sm:px-4 py-2 shadow-md"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        disabled={project.demoUrl === "#"}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" /> Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white text-white hover:bg-white/10 text-xs sm:text-sm px-3 sm:px-4 py-2 shadow-md"
                        onClick={() => window.open(project.codeUrl, '_blank')}
                        disabled={project.codeUrl === "#"}
                      >
                        <Github className="w-3 h-3 mr-1" /> View Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-3 sm:space-y-4 p-5 sm:p-7 relative z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open("https://github.com/coderhormaz", '_blank')}
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
