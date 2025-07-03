"use client";
import { useEffect, useRef, useState } from "react";

export const useRevealAnimation = (delay: number = 0) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
      
      setTimeout(() => {
        element.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    }
  }, [delay]);

  return ref;
};

export const useTextAnimation = (delay: number = 0) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const textWrapper = ref.current;
      const text = textWrapper.textContent || "";
      textWrapper.innerHTML = text.split("").map(char => 
        char === " " ? " " : `<span class="letter opacity-0">${char}</span>`
      ).join("");

      const letters = textWrapper.querySelectorAll('.letter');
      letters.forEach((letter, i) => {
        setTimeout(() => {
          (letter as HTMLElement).style.transition = "all 0.6s ease-out";
          (letter as HTMLElement).style.opacity = "1";
          (letter as HTMLElement).style.transform = "scale(1)";
        }, delay + (i * 70));
      });
    }
  }, [delay]);

  return ref;
};

export const animateOnScroll = (selector: string, options: { 
  opacity?: [number, number]; 
  translateY?: [number, number];
  duration?: number;
}) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.transition = `all ${options.duration || 800}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
          if (options.opacity) element.style.opacity = options.opacity[1].toString();
          if (options.translateY) element.style.transform = `translateY(${options.translateY[1]}px)`;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(selector).forEach((el) => {
    const element = el as HTMLElement;
    if (options.opacity) element.style.opacity = options.opacity[0].toString();
    if (options.translateY) element.style.transform = `translateY(${options.translateY[0]}px)`;
    observer.observe(el);
  });
};

export const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isInMiddle, setIsInMiddle] = useState(false);
  const [wasIntersected, setWasIntersected] = useState(false);

  useEffect(() => {
    // This observer will check if element is visible at all
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        setWasIntersected(true);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    // This observer will check if element is in the middle (center) of viewport
    const middleObserver = new IntersectionObserver(([entry]) => {
      const viewportHeight = window.innerHeight;
      const elementBounds = entry.boundingClientRect;
      const elementCenter = elementBounds.top + elementBounds.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Consider "middle" to be within 30% of the center of the viewport
      const threshold = viewportHeight * 0.3;
      const isCenter = Math.abs(elementCenter - viewportCenter) < threshold;
      
      setIsInMiddle(entry.isIntersecting && isCenter);
    }, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-20% 0px -20% 0px" // Further restrict "middle" to central 60% of viewport
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      middleObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        middleObserver.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isIntersecting, isInMiddle, wasIntersected };
};
