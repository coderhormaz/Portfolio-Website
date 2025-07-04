"use client";
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { JSX } from "react";
import "./PixelCard.css";

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;

  if (value <= min || reducedMotion) {
    return min;
  } else if (value >= max) {
    return max * throttle;
  } else {
    return value * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: "#f8fafc,#f1f5f9,#cbd5e1",
    noFocus: false,
  },
  blue: {
    activeColor: "#e0f2fe",
    gap: 10,
    speed: 25,
    colors: "#e0f2fe,#7dd3fc,#0ea5e9",
    noFocus: false,
  },
  yellow: {
    activeColor: "#fef08a",
    gap: 3,
    speed: 20,
    colors: "#fef08a,#fde047,#eab308",
    noFocus: false,
  },
  pink: {
    activeColor: "#fecdd3",
    gap: 6,
    speed: 80,
    colors: "#fecdd3,#fda4af,#e11d48",
    noFocus: true,
  },
  purple: {
    activeColor: "#e9d5ff",
    gap: 6,
    speed: 60,
    colors: "#e9d5ff,#d8b4fe,#9333ea",
    noFocus: false,
  },
  cyan: {
    activeColor: "#cffafe",
    gap: 8,
    speed: 40,
    colors: "#cffafe,#a5f3fc,#06b6d4",
    noFocus: false,
  },
  emerald: {
    activeColor: "#d1fae5",
    gap: 5,
    speed: 35,
    colors: "#d1fae5,#a7f3d0,#10b981",
    noFocus: false,
  },
  amber: {
    activeColor: "#fef3c7",
    gap: 7,
    speed: 45,
    colors: "#fef3c7,#fde68a,#d97706",
    noFocus: false,
  },
};

interface PixelCardProps {
  variant?: "default" | "blue" | "yellow" | "pink" | "purple" | "cyan" | "emerald" | "amber";
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children: React.ReactNode;
  autoTrigger?: boolean; // Whether to auto-trigger animations on mouse enter/leave
}

export interface PixelCardRef {
  appear: () => void;
  disappear: () => void;
}

interface VariantConfig {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
}

const PixelCard = forwardRef<PixelCardRef, PixelCardProps>(({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  className = "",
  children,
  autoTrigger = true,
}, ref): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null
  );
  const timePreviousRef = useRef(performance.now());
  const hasInitializedRef = useRef(false);
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;
  const isMobileRef = useRef(
    typeof window !== 'undefined' && window.innerWidth <= 768
  ).current;

  const variantCfg: VariantConfig = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  // Lazy initialize for better mobile performance
  const lazyInitialize = () => {
    if (!hasInitializedRef.current) {
      initPixels();
      hasInitializedRef.current = true;
    }
  };

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorsArray = finalColors.split(",");
    const pxs = [];
    for (let x = 0; x < width; x += parseInt(finalGap.toString(), 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap.toString(), 10)) {
        const color =
          colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;
        if (!ctx) return;
        pxs.push(
          new Pixel(
            canvasRef.current,
            ctx,
            x,
            y,
            color,
            getEffectiveSpeed(finalSpeed, reducedMotion),
            delay
          )
        );
      }
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = (fnName: keyof Pixel) => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      // @ts-expect-error Animation function is dynamically determined
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleAnimation = (name: keyof Pixel) => {
    // Only initialize pixels when animation is needed
    lazyInitialize();
    
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Don't animate extensively on mobile to save performance
    if (isMobileRef && name === "shimmer") {
      return;
    }
    
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = () => handleAnimation("appear");
  const onMouseLeave = () => handleAnimation("disappear");
  const onFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation("appear");
  };
  const onBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation("disappear");
  };

  useEffect(() => {
    // Update mobile status on window resize
    const handleResize = () => {
      // We can't update isMobileRef since it's a constant now, but we can track it elsewhere if needed
      // Instead, we'll just reinitialize if the window is resized significantly
      if (hasInitializedRef.current) {
        initPixels();
      }
    };

    // Initialize pixels regardless of autoTrigger for imperative use
    // We'll handle the animation triggering through the ref methods
    lazyInitialize();
    
    const observer = new ResizeObserver(() => {
      if (hasInitializedRef.current) {
        initPixels(); // Only reinitialize if already initialized
      }
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      observer.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalGap, finalSpeed, finalColors, finalNoFocus, autoTrigger]);

  // Expose animation methods via ref
  useImperativeHandle(ref, () => ({
    appear: () => {
      console.log('PixelCard appear called'); // Debug log
      handleAnimation("appear");
    },
    disappear: () => {
      console.log('PixelCard disappear called'); // Debug log
      handleAnimation("disappear");
    }
  }));

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${className}`}
      onMouseEnter={autoTrigger ? onMouseEnter : undefined}
      onMouseLeave={autoTrigger ? onMouseLeave : undefined}
      onFocus={finalNoFocus || !autoTrigger ? undefined : onFocus}
      onBlur={finalNoFocus || !autoTrigger ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </div>
  );
});

PixelCard.displayName = 'PixelCard';

export default PixelCard;
