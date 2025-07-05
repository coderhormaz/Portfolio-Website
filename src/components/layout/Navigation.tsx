"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "About", href: "/about", type: "link" },
    { name: "Services", href: "/services", type: "link" },
    { name: "Portfolio", href: "/portfolio", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  const handleNavigation = (item: { name?: string; href: string; type: string }) => {
    if (item.type === "scroll") {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = item.href;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hormaz
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavigation({ href: "#contact", type: "scroll" })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 px-4 xl:px-6 py-2 text-sm xl:text-base"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300 absolute",
              isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300 absolute",
              isMobileMenuOpen ? "opacity-0" : ""
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300 absolute",
              isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
            )} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden w-full",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-3 px-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavigation({ href: "#contact", type: "scroll" })}
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 py-3"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
