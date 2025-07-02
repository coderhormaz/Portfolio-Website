"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 1000 
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      
      setTimeout(() => {
        element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    }
  }, [delay, duration]);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {text}
    </span>
  );
};
