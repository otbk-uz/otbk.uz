"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Lusion.co Custom Cursor
 * Features spring-damped tracking, mix-blend-mode exclusion,
 * and contextual text expansion on hover ("VIEW", "777", "EXPLORE").
 */
export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveHandler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveHandler);

    // Event delegation for cursor hover states
    const hoverEnter = (e: any) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else if (e.target.closest("a, button")) {
        setCursorText("");
        setIsHovered(true);
      }
    };

    const hoverLeave = (e: any) => {
      const target = e.target.closest("[data-cursor], a, button");
      if (target) {
        setCursorText("");
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", hoverEnter);
    document.addEventListener("mouseout", hoverLeave);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseover", hoverEnter);
      document.removeEventListener("mouseout", hoverLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-exclusion overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 72 : 56) : 34,
          height: isHovered ? (cursorText ? 72 : 56) : 34,
          backgroundColor: isHovered ? "#ffffff" : "transparent",
          borderColor: "#ffffff",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full border border-white/60 flex items-center justify-center backdrop-blur-[1px]"
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-black select-none uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Dot (hidden on hover) */}
      {!isHovered && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="w-1.5 h-1.5 bg-white rounded-full absolute"
        />
      )}
    </div>
  );
}
