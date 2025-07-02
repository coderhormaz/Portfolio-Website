"use client";
import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      
      // Split text into spans for individual letter animation
      textElement.innerHTML = text.split('').map((char, index) => 
        char === ' ' ? ' ' : `<span class="inline-block opacity-0 translate-y-4 letter-${index}" style="animation-delay: ${delay + index * 50}ms">${char}</span>`
      ).join('');

      // Trigger animations
      setTimeout(() => {
        const letters = textElement.querySelectorAll('[class*="letter-"]');
        letters.forEach((letter) => {
          (letter as HTMLElement).style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          (letter as HTMLElement).style.opacity = '1';
          (letter as HTMLElement).style.transform = 'translateY(0)';
        });
      }, 100);
    }
  }, [text, delay]);

  return (
    <div
      ref={textRef}
      className={`inline-block ${className}`}
    />
  );
};
