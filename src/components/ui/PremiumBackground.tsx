"use client";

import { useEffect, useState } from "react";

/**
 * Premium obsidian aurora background.
 *
 * A layered, fixed backdrop designed to feel expensive and intentional:
 *  - Deep obsidian base
 *  - Slow-moving aurora blobs in the brand amber/orange and cyan
 *  - Procedural film-grain texture
 *  - Soft vignette
 *  - Refined micro-dot mesh
 *
 * Everything is CSS-animated and respects prefers-reduced-motion.
 */
export function PremiumBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      data-premium-bg=""
    >
      {/* 1. Base obsidian */}
      <div className="absolute inset-0 bg-[#020204]" />

      {/* 2. Animated aurora blobs */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="premium-aurora amber-glow" />
        <div className="premium-aurora cyan-glow" />
        <div className="premium-aurora amber-glow-secondary" />
      </div>

      {/* 3. Procedural film grain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true">
        <filter id="premium-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#premium-noise)" />
      </svg>

      {/* 4. Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* 5. Refined micro-dot mesh */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
