"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    { name: "Next.js", level: 95 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 88 },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {inView && <AnimatedText text="About Me" />}
          </h2>
          <div className="text-xl text-gray-300 max-w-3xl mx-auto">
            {inView && (
              <AnimatedText 
                text="I'm a passionate full-stack developer with expertise in modern web technologies. I create beautiful, functional, and user-centered digital experiences."
                delay={300}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <CardSpotlight className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              responsive, accessible, and performant applications. My passion lies in 
              bridging the gap between design and development, ensuring every project 
              delivers both aesthetic appeal and functional excellence.
            </p>
          </CardSpotlight>

          <CardSpotlight className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Full-Stack Web Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                UI/UX Design & Prototyping
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                Performance Optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                API Development & Integration
              </li>
            </ul>
          </CardSpotlight>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <CardSpotlight key={skill.name} className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: inView ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
