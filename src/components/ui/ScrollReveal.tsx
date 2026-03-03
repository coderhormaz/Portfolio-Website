"use client";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  blur?: boolean;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  blur = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  const { x, y } = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x,
        y,
        filter: blur ? "blur(6px)" : "blur(0px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, x, y, filter: blur ? "blur(6px)" : "blur(0px)" }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/* Container that staggers its children on scroll */
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/* Individual child for stagger animation */
export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 35, filter: "blur(5px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }}
  >
    {children}
  </motion.div>
);

/* Horizontal line reveal — decorative divider that draws on scroll */
export const LineReveal = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
};
