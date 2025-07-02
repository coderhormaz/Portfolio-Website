"use client";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { DotGridBackground } from "@/components/ui/dot-grid-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <DotGridBackground className="opacity-30" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Hormaz. All rights reserved. Built with ❤️ using Next.js, React Three Fiber, and ShadCN UI.
          </p>
        </div>
      </footer>
    </main>
  );
}
