"use client";
import { useEffect, useRef } from 'react';
import { useMobileCenterAnimation } from '@/hooks/useMobileCenterAnimation';
import PixelCard, { PixelCardRef } from './PixelCard';

interface MobileCenterPixelCardProps {
  variant?: "default" | "blue" | "yellow" | "pink" | "purple" | "cyan" | "emerald" | "amber";
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children: React.ReactNode;
}

const MobileCenterPixelCard: React.FC<MobileCenterPixelCardProps> = ({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  className = "",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelCardRef = useRef<PixelCardRef>(null);
  const { registerElement, unregisterElement, activeElement, previousElement, isMobile } = useMobileCenterAnimation();
  const isAnimatingRef = useRef(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Register element with hook
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    console.log('Registering element, isMobile:', isMobile); // Debug log
    
    if (isMobile) {
      registerElement(element);
    }

    return () => {
      if (isMobile) {
        unregisterElement(element);
      }
      // Clean up any pending animation timeouts
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [registerElement, unregisterElement, isMobile]);

  // Handle animation transitions with smooth handoff
  useEffect(() => {
    if (!isMobile || !pixelCardRef.current) return;

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    const isActive = activeElement === containerRef.current;
    const wasPrevious = previousElement === containerRef.current;

    console.log('Animation effect triggered for card, isActive:', isActive, 'wasPrevious:', wasPrevious); // Debug log

    if (wasPrevious && !isActive) {
      // This card was active but now another card is becoming active
      // Start ending this card's animation immediately
      console.log('Ending animation for previous card'); // Debug log
      pixelCardRef.current.disappear();
      isAnimatingRef.current = false;
    } else if (isActive && !isAnimatingRef.current) {
      // This card is becoming active
      // Wait a bit for previous animation to start ending, then start this one
      animationTimeoutRef.current = setTimeout(() => {
        if (pixelCardRef.current && activeElement === containerRef.current) {
          console.log('Starting animation for new active card'); // Debug log
          pixelCardRef.current.appear();
          isAnimatingRef.current = true;
        }
      }, 150); // Small delay for smooth transition
    } else if (!isActive && isAnimatingRef.current) {
      // This card is no longer active
      console.log('Stopping animation for inactive card'); // Debug log
      pixelCardRef.current.disappear();
      isAnimatingRef.current = false;
    }

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [activeElement, previousElement, isMobile]);

  // On desktop, use normal hover behavior
  if (!isMobile) {
    return (
      <PixelCard
        variant={variant}
        gap={gap}
        speed={speed}
        colors={colors}
        noFocus={noFocus}
        className={className}
        autoTrigger={true}
      >
        {children}
      </PixelCard>
    );
  }

  // On mobile, use center detection
  return (
    <div ref={containerRef} className="relative">
      <PixelCard
        ref={pixelCardRef}
        variant={variant}
        gap={gap}
        speed={speed}
        colors={colors}
        noFocus={noFocus}
        className={className}
        autoTrigger={false} // Disable auto trigger on mobile
      >
        {children}
      </PixelCard>
    </div>
  );
};

export default MobileCenterPixelCard;
