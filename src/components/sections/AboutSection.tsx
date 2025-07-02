"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { useRevealAnimation } from "@/lib/animations";

const skills = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    icon: "💻",
  },
  {
    title: "3D & Animation",
    description: "Three.js, React Three Fiber, GSAP, Framer Motion",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    description: "Node.js, Python, Database Design, APIs",
    icon: "⚙️",
  },
  {
    title: "UI/UX Design",
    description: "Figma, Adobe Creative Suite, Design Systems",
    icon: "🎯",
  },
];

const AboutSection = () => {
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
            About Me
          </h2>
          <p 
            ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            I'm a passionate developer who loves creating immersive digital experiences 
            that blend cutting-edge technology with beautiful design. My focus is on 
            building performant, accessible, and visually stunning web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <CardSpotlight key={skill.title} className="h-full">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Experience & Journey
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  year: "2024-Present",
                  title: "Senior Full-Stack Developer",
                  company: "Tech Innovations Inc.",
                  description: "Leading development of next-generation web applications using React, Next.js, and cloud technologies."
                },
                {
                  year: "2022-2024",
                  title: "Frontend Developer",
                  company: "Creative Digital Agency",
                  description: "Specialized in creating interactive 3D experiences and animations for premium client projects."
                },
                {
                  year: "2020-2022",
                  title: "Web Developer",
                  company: "Startup Ventures",
                  description: "Built responsive web applications and contributed to product design and user experience."
                }
              ].map((item, index) => (
                <Card key={index} className="glass-card border-white/10">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="sm:w-32 text-purple-400 font-semibold text-sm sm:text-base">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-purple-300 mb-2 text-sm sm:text-base">{item.company}</p>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
