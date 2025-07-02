"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const CardSpotlight = ({
  children,
  className,
  spotlightColor = "#ffffff",
}: CardSpotlightProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
      
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}20, transparent 40%)`,
        }}
      />
    </div>
  );
};
