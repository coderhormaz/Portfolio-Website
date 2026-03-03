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
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const firstName = "Hormaz";
  const lastName = "Daruwala";

  return (
    <ClientOnly>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 bg-[#080a10] flex flex-col items-center justify-center gap-3"
          >
            {/* Accent line above name */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-center"
            />

            {/* First name — character stagger */}
            <div className="overflow-hidden">
              <div className="flex">
                {firstName.split("").map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Last name — lighter weight, slight delay */}
            <div className="overflow-hidden -mt-1">
              <div className="flex">
                {lastName.split("").map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.5 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + i * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="text-2xl md:text-3xl lg:text-4xl font-light text-white/50 tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Accent line below */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent origin-center mt-1"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ClientOnly>
  );
};

export default Preloader;
