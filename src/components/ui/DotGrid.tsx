'use client';
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import useDeviceDetection from "@/hooks/useDeviceDetection";

import "./DotGrid.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastCall = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
  // Handle rgb() format
  const rgbMatch = hex.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
    };
  }
  
  // Handle hex format
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 5,
  gap = 15,
  baseColor = "#ffffff",
  activeColor = "#3F10F9",
  proximity = 120,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  // Detect device type for optimizing the animation
  const { isMobile, isTouch } = useDeviceDetection();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;

    try {
      const p = new Path2D();
      p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
      return p;
    } catch (error) {
      console.error("Error creating Path2D:", error);
      return null;
    }
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Adjust the grid density based on device type
    const adjustedGap = isMobile ? gap * 1.5 : gap;

    const cols = Math.floor((width + adjustedGap) / (dotSize + adjustedGap));
    const rows = Math.floor((height + adjustedGap) / (dotSize + adjustedGap));
    const cell = dotSize + adjustedGap;

    const gridW = cell * cols - adjustedGap;
    const gridH = cell * rows - adjustedGap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap, isMobile]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId: number;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(buildGrid);
      if (wrapperRef.current) {
        ro.observe(wrapperRef.current);
      }
    } else {
      (window as Window).addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  // Track scroll velocity
  const scrollRef = useRef({
    lastScrollY: 0,
    scrollVY: 0,
    lastTime: 0,
  });
  
  useEffect(() => {
    // Handler for pointer movement (mouse or touch)
    const handlePointerMove = (clientX: number, clientY: number, isTouch = false) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = clientX - pr.lastX;
      const dy = clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      
      // Lower max speed for mobile to prevent too aggressive animations
      const effectiveMaxSpeed = isMobile ? maxSpeed * 0.7 : maxSpeed;
      
      if (speed > effectiveMaxSpeed) {
        const scale = effectiveMaxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = effectiveMaxSpeed;
      }
      
      pr.lastTime = now;
      pr.lastX = clientX;
      pr.lastY = clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvas.getBoundingClientRect();
      pr.x = clientX - rect.left;
      pr.y = clientY - rect.top;

      // For mobile, use smaller values to create more controlled effects
      const currentProximity = isTouch ? proximity * 0.7 : proximity;
      // Make it easier to trigger on mobile but with smaller effect
      const currentSpeedTrigger = isTouch ? speedTrigger * 0.4 : speedTrigger;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > currentSpeedTrigger && dist < currentProximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          
          // Smaller multipliers for mobile to reduce the effect
          const pushFactor = isMobile ? 0.08 : 0.15;
          const velocityFactor = isMobile ? 0.004 : 0.008;
          
          const pushX = (dot.cx - pr.x) * pushFactor + vx * velocityFactor;
          const pushY = (dot.cy - pr.y) * pushFactor + vy * velocityFactor;
          
          gsap.to(dot, {
            xOffset: pushX,
            yOffset: pushY,
            duration: isMobile ? 0.15 : 0.2, // Faster animation on mobile
            ease: "power3.out",
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: isMobile ? 0.4 : 0.6, // Faster return on mobile
                ease: "back.out(1.7)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const createRipple = (x: number, y: number, intensity = 1) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const cx = x - rect.left;
      const cy = y - rect.top;
      
      // Use a smaller radius for mobile devices
      const effectiveRadius = isMobile ? shockRadius * 0.6 : shockRadius;
      // Use a smaller strength for mobile devices
      const effectiveStrength = isMobile ? shockStrength * 0.7 : shockStrength;
      
      // Create a ripple effect with the given intensity
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < effectiveRadius * intensity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / (effectiveRadius * intensity));
          const pushX = (dot.cx - cx) * effectiveStrength * falloff * intensity;
          const pushY = (dot.cy - cy) * effectiveStrength * falloff * intensity;
          gsap.to(dot, {
            xOffset: pushX,
            yOffset: pushY,
            duration: 0.15,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: isMobile ? 0.6 : 0.8, // Faster return on mobile
                ease: "back.out(1.5)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    // Mouse events
    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY, 1);
    };

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        pointerRef.current.lastX = touch.clientX;
        pointerRef.current.lastY = touch.clientY;
        pointerRef.current.lastTime = performance.now();
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        // For touch events, only create effects directly under the touch point
        // not in random places
        handlePointerMove(touch.clientX, touch.clientY, true);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        // Smaller ripple effect on touch end for mobile
        createRipple(touch.clientX, touch.clientY, 0.5);
      }
    };

    // Handle scroll events for mobile interactions
    const onScroll = () => {
      // Only perform scroll animations if we're on a mobile device
      if (!isMobile) return;
      
      const now = performance.now();
      const scrollY = window.scrollY;
      const sr = scrollRef.current;
      const dt = sr.lastTime ? now - sr.lastTime : 16;
      const dy = scrollY - sr.lastScrollY;
      
      // Calculate scroll velocity
      const scrollVY = (dy / dt) * 1000;
      sr.scrollVY = scrollVY;
      sr.lastScrollY = scrollY;
      sr.lastTime = now;

      // If scrolling fast enough, create a ripple effect at the center of the screen
      // instead of random positions
      if (Math.abs(scrollVY) > 150) { // Increase threshold to reduce frequency
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const rect = canvas.getBoundingClientRect();
        // Only create effects if the canvas is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Use center of screen for horizontal position
          const x = window.innerWidth / 2;
          
          // Use current scroll position for vertical position
          // This creates ripples where the user is currently looking
          const y = window.innerHeight / 2;
          
          // Smaller intensity and more controlled
          const intensity = Math.min(0.7, Math.abs(scrollVY) / 600) * 0.5;
          createRipple(x, y, intensity);
        }
      }
    };

    // Apply event listeners with different throttling for mobile
    const mouseMoveThrottle = isMobile ? 20 : 16; // Slightly more throttling on mobile
    const touchMoveThrottle = 10; // Less throttling for touch to be more responsive
    const scrollThrottle = 150; // More throttling for scroll events
    
    const throttledMouseMove = throttle(onMouseMove, mouseMoveThrottle);
    const throttledTouchMove = throttle(onTouchMove, touchMoveThrottle);
    const throttledScroll = throttle(onScroll, scrollThrottle);

    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", throttledTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", throttledTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [
    maxSpeed,
    speedTrigger,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
    // Mobile-specific dependencies
    isMobile,
    isTouch,
  ]);

  return (
    <section 
      className={`dot-grid ${className} ${isTouch ? 'dot-grid--touch' : ''}`} 
      style={style}
      data-is-mobile={isMobile ? "true" : "false"}
      data-is-touch={isTouch ? "true" : "false"}
    >
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </section>
  );
};

export default DotGrid;
