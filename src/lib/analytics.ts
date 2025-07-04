'use client';

import { track } from '@vercel/analytics';
import { useState, useEffect } from 'react';

// Custom analytics tracking for portfolio interactions
export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
  track(eventName, properties);
};

// Portfolio-specific event tracking functions
export const portfolioAnalytics = {
  // Track when users view specific sections
  trackSectionView: (sectionName: string) => {
    trackEvent('section_viewed', {
      section: sectionName,
      timestamp: new Date().toISOString(),
    });
  },

  // Track project interactions
  trackProjectView: (projectName: string, projectType: 'demo' | 'code') => {
    trackEvent('project_interaction', {
      project: projectName,
      type: projectType,
      timestamp: new Date().toISOString(),
    });
  },

  // Track contact form interactions
  trackContactAction: (action: 'form_started' | 'form_submitted' | 'form_error') => {
    trackEvent('contact_interaction', {
      action,
      timestamp: new Date().toISOString(),
    });
  },

  // Track social media clicks
  trackSocialClick: (platform: string) => {
    trackEvent('social_click', {
      platform,
      timestamp: new Date().toISOString(),
    });
  },

  // Track resume/CV downloads
  trackResumeDownload: () => {
    trackEvent('resume_download', {
      timestamp: new Date().toISOString(),
    });
  },

  // Track skills section interactions
  trackSkillInteraction: (skillName: string) => {
    trackEvent('skill_interaction', {
      skill: skillName,
      timestamp: new Date().toISOString(),
    });
  },

  // Track navigation patterns
  trackNavigation: (from: string, to: string) => {
    trackEvent('navigation', {
      from,
      to,
      timestamp: new Date().toISOString(),
    });
  },

  // Track scroll depth for engagement
  trackScrollDepth: (depth: number) => {
    trackEvent('scroll_depth', {
      depth,
      timestamp: new Date().toISOString(),
    });
  },
};

// Hook for scroll depth tracking
export const useScrollTracking = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized) return;
    
    let maxScrollDepth = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollDepth = Math.round((scrollTop + windowHeight) / documentHeight * 100);
      
      // Track at 25%, 50%, 75%, and 100% milestones
      if (scrollDepth > maxScrollDepth) {
        if (scrollDepth >= 25 && maxScrollDepth < 25) {
          portfolioAnalytics.trackScrollDepth(25);
        } else if (scrollDepth >= 50 && maxScrollDepth < 50) {
          portfolioAnalytics.trackScrollDepth(50);
        } else if (scrollDepth >= 75 && maxScrollDepth < 75) {
          portfolioAnalytics.trackScrollDepth(75);
        } else if (scrollDepth >= 100 && maxScrollDepth < 100) {
          portfolioAnalytics.trackScrollDepth(100);
        }
        maxScrollDepth = scrollDepth;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsInitialized(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInitialized]);
};

export default portfolioAnalytics;
