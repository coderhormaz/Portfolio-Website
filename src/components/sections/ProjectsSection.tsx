"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { ExternalLink, Github, Palette, Rocket, Layers, Layout, LayoutGrid } from "lucide-react";
import { portfolioAnalytics } from "@/lib/analytics";

const projects = [
  {
    title: "AI DeFi Trading Assistant",
    description: "An intelligent blockchain trading agent leveraging Gemini AI for natural language command processing on Polygon network. Provides automated token swaps, wallet generation, real-time price feeds, and seamless Uniswap V3 integration with premium user experience.",
    tech: ["TypeScript", "React", "Polygon", "Gemini AI", "Uniswap V3", "Supabase", "ethers.js"],
    image: "/ai-trading-agent.png",
    isVideo: false,
    demoUrl: "https://eth-global-2025-beige.vercel.app/dashboard", // Add your demo URL here
    codeUrl: "https://github.com/coderhormaz/ETHGlobal_2025", // Add your GitHub repo URL here
  },
  {
    title: "opBNB AI Assistant",
    description: "A premium AI-powered assistant built on opBNB with ultra-low gas fees and 4,000+ TPS. Features secure authentication, auto wallet generation, and intelligent blockchain query assistance with glassmorphic UI.",
    tech: ["TypeScript", "React", "opBNB", "Supabase", "ethers.js", "Framer Motion", "Zustand"],
    image: "/bnbai.mp4", // You can replace this with a specific video/image for the opBNB project
    isVideo: true,
    demoUrl: "https://bnb-hackathon-bombay.vercel.app/",
    codeUrl: "https://github.com/coderhormaz/BNB_Hackathon",
  },  
  {
    title: "Avalanche AI Blockchain Assistant",
    description: "A powerful AI-powered blockchain assistant for the Avalanche network. Chat with AI to send AVAX, create tokens, mint NFTs, and perform blockchain operations using natural language commands.",
    tech: ["TypeScript", "React", "Avalanche", "AI Integration", "IPFS", "Web3", "TailwindCSS"],
    image: "/avaxai.mp4", // You can replace this with a specific video/image for the Avalanche project
    isVideo: true,
    demoUrl: "https://avax-ai.vercel.app/",
    codeUrl: "https://github.com/coderhormaz/AVAX_Team1_hackathon",
  },
  
  {
    title: "Token Plus NFT Launcher",
    description: "A comprehensive for creating and deploying both NFTs and tokens on the Base blockchain, featuring a drawing board, customizable token parameters, and Web3 wallet integration.",
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
  return (
    <section className="py-16 sm:py-20 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/60" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400/70">Portfolio</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
            >
              Featured Projects
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p 
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
            >
            A showcase of my recent work, featuring innovative solutions and 
            cutting-edge technologies that push the boundaries of web development.
          </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10" staggerDelay={0.12}>
          {projects.map((project) => (
            <StaggerItem key={project.title} className="relative group">
              <CardSpotlight className="relative overflow-hidden rounded-xl border border-white/[0.06] hover:border-white/[0.1] bg-[#0a0e16]/60 hover:bg-[#0a0e16]/80 transition-all duration-500 z-0">
                {/* Project Image or Video */}
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg z-10 border border-white/[0.04] mx-2 my-2">
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
                    <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-cyan-500/20 flex items-center justify-center">
                      {project.title.includes("NFT") || project.title.includes("Token") ? (
                        <Palette className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-amber-400 opacity-50" />
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
                        onClick={() => {
                          portfolioAnalytics.trackProjectView(project.title, 'demo');
                          window.open(project.demoUrl, '_blank');
                        }}
                        disabled={project.demoUrl === "#"}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" /> Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white text-white hover:bg-white/10 text-xs sm:text-sm px-3 sm:px-4 py-2 shadow-md"
                        onClick={() => {
                          portfolioAnalytics.trackProjectView(project.title, 'code');
                          window.open(project.codeUrl, '_blank');
                        }}
                        disabled={project.codeUrl === "#"}
                      >
                        <Github className="w-3 h-3 mr-1" /> View Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-3 sm:space-y-4 p-5 sm:p-7 relative z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Projects Button */}
        <ScrollReveal className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-0.5 w-full sm:w-auto shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.3)]"
            onClick={() => {
              portfolioAnalytics.trackSocialClick('GitHub');
              window.open("https://github.com/coderhormaz", '_blank');
            }}
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
