"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, featuring smart responses, file sharing, and collaborative workspaces.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "Socket.io", "OpenAI"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Analytics Dashboard",
      description: "Advanced analytics dashboard for tracking portfolio performance with interactive charts and real-time data visualization.",
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Management Tool",
      description: "Comprehensive social media management platform with scheduling, analytics, and multi-platform posting capabilities.",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Express", "MongoDB", "Redis"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {inView && <AnimatedText text="Featured Projects" />}
          </h2>
          <div className="text-xl text-gray-300 max-w-3xl mx-auto">
            {inView && (
              <AnimatedText 
                text="A showcase of my recent work, demonstrating expertise in modern web technologies and creative problem-solving."
                delay={300}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <CardSpotlight 
              key={project.id} 
              className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/60 text-sm">Project Image Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
