"use client";
import { useEffect, useRef } from "react";

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
