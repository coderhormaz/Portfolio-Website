"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Thickness of the shine overlay effect
   * @default 1
   */
  thickness?: number;
  /**
   * Duration of the animation in seconds
   * @default 5
   */
  duration?: number;
  /**
   * Color of the shine effect
   * @default "rgba(255, 255, 255, 0.1)"
   */
  color?: string;
}

/**
 * Shine Overlay
 *
 * An animated overlay effect that creates a subtle shine over content
 */
export function ShineOverlay({
  thickness = 1,
  duration = 5,
  color = "rgba(255, 255, 255, 0.1)",
  className,
  style,
  ...props
}: ShineOverlayProps) {
  return (
    <div
      style={
        {
          ...style,
          "--duration": `${duration}s`,
          "--color": color,
          "--thickness": `${thickness}px`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className
      )}
      {...props}
    >
      <div 
        className="absolute inset-0 z-50 animate-shine-overlay" 
        style={{
          background: `linear-gradient(90deg, transparent, var(--color), transparent)`,
          transform: "translateX(-100%)",
        }}
      />
    </div>
  );
}
