"use client";

import React, { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";

interface ScrollContextType {
  lenis: Lenis | null;
}

const ScrollContext = createContext<ScrollContextType>({ lenis: null });

export const useSmoothScroll = () => useContext(ScrollContext);

export interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Lusion.co Smooth Scroll Wrapper (Powered by Lenis)
 * Synchronizes browser momentum scrolling with Three.js camera position
 * and provides 60+ FPS buttery smooth viewport physics.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis with fine-tuned inertial physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
      infinite: false,
    });

    lenisRef.current = lenis;

    // 2. Synchronize requestAnimationFrame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 3. Dispatch custom event for 3D Canvas camera synchronization
    lenis.on("scroll", ({ scroll, limit, velocity, direction }: any) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", {
          detail: {
            progress: limit > 0 ? scroll / limit : 0,
            scroll,
            velocity,
            direction,
          },
        })
      );
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current }}>
      <div id="smooth-wrapper" className="w-full min-h-screen bg-black text-white">
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
