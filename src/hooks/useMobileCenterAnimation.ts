"use client";
import { useEffect, useRef, useState } from 'react';

interface UseMobileCenterAnimationProps {
  enabled?: boolean;
  threshold?: number;
}

export const useMobileCenterAnimation = ({ 
  enabled = true, 
  threshold = 0.4 
}: UseMobileCenterAnimationProps = {}) => {
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
  const [previousElement, setPreviousElement] = useState<HTMLElement | null>(null);
  const elementsRef = useRef<Set<HTMLElement>>(new Set());
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Synchronous mobile detection
  const isMobile = useRef(typeof window !== 'undefined' && window.innerWidth <= 768).current;

  const registerElement = (element: HTMLElement) => {
    if (!enabled || !isMobile) return;
    elementsRef.current.add(element);
    console.log('Registered element, total:', elementsRef.current.size); // Debug log
    
    // Trigger immediate check when element is registered
    setTimeout(() => {
      const closest = findClosestToCenter();
      if (closest !== activeElement) {
        handleElementTransition(closest);
      }
    }, 100);
  };

  const unregisterElement = (element: HTMLElement) => {
    elementsRef.current.delete(element);
    if (activeElement === element) {
      setPreviousElement(element);
      setActiveElement(null);
    }
  };

  const handleElementTransition = (newElement: HTMLElement | null) => {
    if (newElement === activeElement) return;

    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    // Set previous element for smooth transition
    setPreviousElement(activeElement);

    // Start the new animation with a slight delay to allow previous to end gracefully
    transitionTimeoutRef.current = setTimeout(() => {
      setActiveElement(newElement);
      setPreviousElement(null);
    }, 200); // 200ms delay for smooth transition
  };

  const findClosestToCenter = () => {
    if (!enabled || !isMobile || elementsRef.current.size === 0) return null;

    const viewportHeight = window.innerHeight;
    const centerY = viewportHeight / 2;
    let closestElement: HTMLElement | null = null;
    let minDistance = Infinity;

    elementsRef.current.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementCenterY = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenterY - centerY);

      // Check if element is visible in viewport and within threshold
      const isVisible = rect.top < viewportHeight && rect.bottom > 0;
      const isInThreshold = distance < viewportHeight * threshold;
      
      if (isVisible && isInThreshold && distance < minDistance) {
        minDistance = distance;
        closestElement = element;
      }
    });

    return closestElement;
  };

  useEffect(() => {
    if (!enabled || !isMobile) return;

    let rafId: number;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        rafId = requestAnimationFrame(() => {
          const closest = findClosestToCenter();
          if (closest !== activeElement) {
            console.log('Active element changing from:', activeElement, 'to:', closest); // Debug log
            handleElementTransition(closest);
          }
          isScrolling = false;
        });
      }
    };

    // Initial check
    const closest = findClosestToCenter();
    if (closest) {
      handleElementTransition(closest);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [enabled, activeElement, isMobile]);

  return {
    registerElement,
    unregisterElement,
    activeElement,
    previousElement,
    isMobile
  };
};
