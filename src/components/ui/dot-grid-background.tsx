"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DotGridBackgroundProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
}

// Inner component that uses hooks
const DotGridBackgroundInner = ({
  className,
  dotSize = 1,
  dotColor = "rgba(255, 255, 255, 0.1)",
  spacing = 20,
}: DotGridBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Make sure we're running on the client
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots();
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = dotColor;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dotSize, dotColor, spacing]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "fixed inset-0 z-0 pointer-events-none",
        className
      )}
    />
  );
};

// Client-only wrapper component
export const DotGridBackground = (props: DotGridBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <div className={cn("fixed inset-0 z-0", props.className)} />;
  }
  
  return <DotGridBackgroundInner {...props} />;
};
