"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/lib/animations";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization and AI-driven insights.",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "/api/placeholder/600/400",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "3D Product Configurator",
    description: "Interactive 3D product customization tool with real-time rendering and physics simulation.",
    tech: ["Three.js", "React", "WebGL", "Blender"],
    image: "/api/placeholder/600/400",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced search, recommendations, and payment integration.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    image: "/api/placeholder/600/400",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Creative Portfolio",
    description: "Award-winning portfolio website featuring advanced animations and interactive elements.",
    tech: ["React", "GSAP", "Three.js", "Tailwind"],
    image: "/api/placeholder/600/400",
    demoUrl: "#",
    codeUrl: "#",
  },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <CardSpotlight key={project.title} className="group overflow-hidden">
              <div className="relative">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-200 text-xs sm:text-sm px-3 sm:px-4 py-2">
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10 text-xs sm:text-sm px-3 sm:px-4 py-2">
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
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
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View All Projects
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
