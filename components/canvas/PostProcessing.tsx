"use client";

import React from "react";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

/**
 * Lusion.co Post-Processing Pipeline
 * Combines high-luminance bloom, subtle lens chromatic aberration,
 * tactile film grain, and dark OLED vignette.
 */

export interface PostProcessingProps {
  bloomIntensity?: number;
  bloomThreshold?: number;
  chromaticAberrationOffset?: number;
  enableNoise?: boolean;
}

export function PostProcessing({
  bloomIntensity = 1.25,
  bloomThreshold = 0.45,
  chromaticAberrationOffset = 0.002,
  enableNoise = true,
}: PostProcessingProps) {
  return (
    <EffectComposer multisampling={0} disableNormalPass>
      {/* 1. High-Luminance Bloom */}
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={bloomThreshold}
        luminanceSmoothing={0.85}
        blendFunction={BlendFunction.SCREEN}
        mipmapBlur
      />

      {/* 2. Lens Edge Chromatic Aberration */}
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(chromaticAberrationOffset, chromaticAberrationOffset * 0.7)}
        radialModulation={true}
        modulationOffset={0.3}
      />

      {/* 3. Tactile Film Grain (Organic texture preventing color banding) */}
      {enableNoise && (
        <Noise
          opacity={0.035}
          blendFunction={BlendFunction.OVERLAY}
          premultiply
        />
      )}

      {/* 4. OLED Vignette */}
      <Vignette
        eskil={false}
        offset={0.2}
        darkness={0.9}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}
