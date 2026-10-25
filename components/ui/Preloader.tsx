"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 400);
      } else {
        setProgress(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between p-8 md:p-14 bg-black text-white select-none"
        >
          {/* Top Info */}
          <div className="flex justify-between items-center text-xs font-mono text-zinc-500 tracking-widest uppercase">
            <span>[ OTBK // SYSTEM INITIALIZATION ]</span>
            <span>GPU PIPELINE · 65K PARTICLES</span>
          </div>

          {/* Center Brand */}
          <div className="my-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold tracking-tight font-display"
            >
              OTBK<span className="text-emerald-400">.</span>
            </motion.h1>
            <p className="mt-3 text-xs md:text-sm font-mono text-zinc-400 tracking-widest uppercase">
              Digital Realities & System Architecture
            </p>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="flex justify-between items-end">
            <div className="text-xs font-mono text-zinc-500 tracking-wider">
              LOADING ASSETS & SHADERS...
            </div>
            <div className="text-5xl md:text-8xl font-display font-bold text-emerald-400">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
