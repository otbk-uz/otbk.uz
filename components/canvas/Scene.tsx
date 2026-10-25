"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { FluidParticles } from "./FluidParticles";
import { PostProcessing } from "./PostProcessing";

// Dynamic Camera Controller syncing with scroll and mouse inertia
function CameraRig() {
  const { camera } = useThree();
  const targetCam = useRef(new THREE.Vector3(0, 0, 4.2));
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      scrollProgress.current = e.detail?.progress || 0;
    };
    window.addEventListener("lenis-scroll", handleScroll);
    return () => window.removeEventListener("lenis-scroll", handleScroll);
  }, []);

  useFrame((state: any) => {
    // Spatial parallax: moves camera along Z and tilts based on mouse & scroll
    const mouseX = state.pointer.x * 0.4;
    const mouseY = state.pointer.y * 0.3;
    const scrollZ = scrollProgress.current * 1.5;

    targetCam.current.x = mouseX;
    targetCam.current.y = mouseY - scrollProgress.current * 0.8;
    targetCam.current.z = 4.2 - scrollZ * 0.5;

    camera.position.lerp(targetCam.current, 0.05);
    camera.lookAt(0, -scrollProgress.current * 0.4, 0);
  });

  return null;
}

export function CanvasScene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 48, near: 0.1, far: 50 }}
        dpr={[1, 2]} // Adaptive DPR for 60+ FPS
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
      >
        <CameraRig />
        <ambientLight intensity={0.2} />

        <Suspense fallback={null}>
          <FluidParticles size={256} pointSize={1.3} repelRadius={1.5} />
          <PostProcessing
            bloomIntensity={1.3}
            bloomThreshold={0.4}
            chromaticAberrationOffset={0.0018}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
