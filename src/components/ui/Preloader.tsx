"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClientOnly from "./ClientOnly";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reduced preloader time for better SEO
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Reduced exit animation time
    }, 1500); // Reduced from 3000ms to 1500ms

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <ClientOnly>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.5,
              ease: "easeOut"
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wider"
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '0.05em'
            }}
          >
            Hormaz Daruwala
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
    </ClientOnly>
  );
};

export default Preloader;
