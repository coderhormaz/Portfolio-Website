"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRevealAnimation } from "@/lib/animations";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const titleRef = useRevealAnimation(200);
  const formRef = useRevealAnimation(400);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 sm:py-20 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center text-lg sm:text-xl">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base">hormaz@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center text-lg sm:text-xl">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <p className="text-white text-sm sm:text-base">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center text-lg sm:text-xl">
                    📍
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                    <p className="text-white text-sm sm:text-base">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-3 sm:space-x-4">
                {[
                  { name: "GitHub", icon: "🐙" },
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Twitter", icon: "🐦" },
                  { name: "Dribbble", icon: "🏀" },
                ].map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2"
                  >
                    <span className="mr-2">{social.icon}</span>
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card 
            ref={formRef as React.RefObject<HTMLDivElement>}
            className="glass-card border-white/10 order-1 lg:order-2"
          >
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 sm:mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-12"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 sm:mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-12"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white text-sm sm:text-base">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 sm:mt-2 w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <span className="ml-2">✈️</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
