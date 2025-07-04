"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRevealAnimation } from "@/lib/animations";
import { Linkedin, Instagram, Github, Mail, SendHorizonal, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { portfolioAnalytics } from "@/lib/analytics";

// Form validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const titleRef = useRevealAnimation(200);
  const formRef = useRevealAnimation(400);

  const validateForm = (data: typeof formData): string[] => {
    const errors: string[] = [];
    
    if (!data.name.trim() || data.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email.trim() || !validateEmail(data.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!data.message.trim() || data.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Track form start
    portfolioAnalytics.trackContactAction('form_started');

    // Validate form data
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      portfolioAnalytics.trackContactAction('form_error');
      toast.error(validationErrors.join(' '), {
        duration: 5000,
        description: "Please correct the errors and try again.",
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '33ab3791-cf6f-4323-a696-248ff05e7c08',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Hormaz Portfolio Contact Form',
          to_name: 'Hormaz Daruwala',
          // Additional metadata for better email organization
          _replyto: formData.email,
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        portfolioAnalytics.trackContactAction('form_submitted');
        toast.success("Message sent successfully! I&apos;ll get back to you soon.", {
          duration: 5000,
          description: "Thank you for reaching out. Your message has been delivered.",
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      portfolioAnalytics.trackContactAction('form_error');
      toast.error("Failed to send message. Please try again.", {
        duration: 5000,
        description: "There was an error sending your message. You can also email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Let&apos;s Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? Let&apos;s discuss your next project 
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <a 
                  href="mailto:hormazdaruwala86@gmail.com" 
                  className="flex items-center space-x-3 sm:space-x-4 group transition-transform hover:translate-x-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base group-hover:text-purple-400 transition-colors">hormazdaruwala86@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/hormazdaruwala/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 group transition-transform hover:translate-x-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">LinkedIn</p>
                    <p className="text-white text-sm sm:text-base group-hover:text-purple-400 transition-colors">hormazdaruwala</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/horma_z/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 group transition-transform hover:translate-x-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Instagram</p>
                    <p className="text-white text-sm sm:text-base group-hover:text-purple-400 transition-colors">@horma_z</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-3 sm:space-x-4">
                {[
                  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/hormazdaruwala/" },
                  { name: "Instagram", icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/horma_z/" },
                  { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/coderhormaz" },
                  { name: "Email", icon: <Mail className="w-4 h-4" />, url: "mailto:hormazdaruwala86@gmail.com" },
                ].map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2"
                    onClick={() => {
                      portfolioAnalytics.trackSocialClick(social.name);
                      window.open(social.url, '_blank');
                    }}
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
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">Failed to send message. Please try again or email me directly.</span>
                  </div>
                )}

                <div>
                  <Label htmlFor="name" className="text-white text-sm sm:text-base">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 sm:mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-12 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                    minLength={2}
                    maxLength={100}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white text-sm sm:text-base">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 sm:mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-12 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    maxLength={255}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white text-sm sm:text-base">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 sm:mt-2 w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base focus:border-purple-500"
                    placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                    required
                    disabled={isSubmitting}
                    minLength={10}
                    maxLength={1000}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>

                {/* Honeypot field for spam protection */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }}
                />

                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendHorizonal className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-400 text-center">
                  Your information is secure and will only be used to contact you about your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
