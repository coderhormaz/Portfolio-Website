'use client';

import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
}

// Default values for server-side rendering
const defaultDeviceInfo: DeviceInfo = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouch: false,
};

export default function useDeviceDetection(): DeviceInfo {
  // Initialize with default values
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(defaultDeviceInfo);

  useEffect(() => {
    // Make sure we're in a browser environment
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      try {
        const width = window.innerWidth;
        const isMobile = width < 768;
        const isTablet = width >= 768 && width < 1024;
        const isDesktop = width >= 1024;
        
        // Check if the device has touch capabilities
        const isTouch = 
          'ontouchstart' in window || 
          (navigator && navigator.maxTouchPoints > 0) ||
          (navigator && (navigator as any).msMaxTouchPoints > 0);
        
        setDeviceInfo({
          isMobile,
          isTablet,
          isDesktop,
          isTouch,
        });
      } catch (error) {
        console.error('Error detecting device type:', error);
        // Keep default values in case of error
      }
    };

    // Run on mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceInfo;
}
