'use client';

import { useEffect } from 'react';
import type { Metric } from 'web-vitals';

// Performance monitoring for Core Web Vitals and SEO metrics
export default function PerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals with correct web-vitals v5+ API
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        const logMetric = (metric: Metric) => {
          console.log(`${metric.name}: ${metric.value} (${metric.rating})`);
          // Send to analytics if needed
        };
        
        onCLS(logMetric);
        onINP(logMetric); // INP replaced FID in web-vitals v5
        onFCP(logMetric);
        onLCP(logMetric);
        onTTFB(logMetric);
      }).catch(() => {
        console.log('Web Vitals not available');
      });
    }

    // SEO Performance Tracking
    const trackSEOMetrics = () => {
      // Track page load time
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        const pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.loadEventStart;
        console.log('Page Load Time:', pageLoadTime + 'ms');
        
        // Track DOM content loaded
        const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart;
        console.log('DOM Content Loaded:', domContentLoaded + 'ms');
      }

      // Track resource loading
      const resources = performance.getEntriesByType('resource');
      const imageResources = resources.filter((resource: PerformanceEntry) => 
        resource.name.includes('.jpg') || 
        resource.name.includes('.jpeg') || 
        resource.name.includes('.png') || 
        resource.name.includes('.webp') ||
        resource.name.includes('.avif')
      );
      
      console.log('Images loaded:', imageResources.length);
      
      // Track font loading
      const fontResources = resources.filter((resource: PerformanceEntry) => 
        resource.name.includes('fonts.googleapis.com') ||
        resource.name.includes('.woff') ||
        resource.name.includes('.woff2')
      );
      
      console.log('Fonts loaded:', fontResources.length);
    };

    // Run after page is fully loaded
    if (document.readyState === 'complete') {
      trackSEOMetrics();
    } else {
      window.addEventListener('load', trackSEOMetrics);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', trackSEOMetrics);
    };
  }, []);

  return null; // This component doesn't render anything
}
