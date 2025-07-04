"use client";
import React, { useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInView } from "react-intersection-observer";
import { Mail, MessageSquare, User, Send } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hormaz@example.com",
      description: "Drop me a line anytime"
    },
    {
      icon: MessageSquare,
      title: "LinkedIn",
      value: "linkedin.com/in/hormaz",
      description: "Let's connect professionally"
    },
    {
      icon: User,
      title: "Twitter",
      value: "@hormaz_dev",
      description: "Follow for updates"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {inView && <AnimatedText text="Get In Touch" />}
          </h2>
          <div className="text-xl text-gray-300 max-w-3xl mx-auto">
            {inView && (
              <AnimatedText 
                text="Ready to bring your next project to life? Let's discuss how we can work together to create something amazing."
                delay={300}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Let&apos;s Connect</h3>
            
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <CardSpotlight key={method.title} className="p-6 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{method.title}</h4>
                      <p className="text-blue-400 font-medium">{method.value}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </CardSpotlight>
              );
            })}

            <CardSpotlight className="p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  5+ years of experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  100% client satisfaction rate
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Fast turnaround times
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Modern tech stack expertise
                </li>
              </ul>
            </CardSpotlight>
          </div>

          {/* Contact Form */}
          <CardSpotlight className="p-8">
            <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">
                  Message
                </Label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
