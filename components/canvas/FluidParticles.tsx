"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree, createPortal } from "@react-three/fiber";

/**
 * FBO GPU Simulation Shaders
 * Uses ping-pong render targets to calculate 65,536 (256x256) particles on the GPU
 * with 3D Curl Noise fluid turbulence, mouse displacement, and velocity physics.
 */

// 1. Simulation Vertex Shader (Full-screen quad)
const simulationVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// 2. Simulation Fragment Shader (Physics & Fluid Displacement)
const simulationFragmentShader = `
  uniform sampler2D uCurrentPosition;
  uniform sampler2D uOriginalPosition;
  uniform vec3 uMouse;
  uniform float uMouseSpeed;
  uniform float uTime;
  uniform float uCurlScale;
  uniform float uReturnSpeed;
  uniform float uRepelRadius;
  varying vec2 vUv;

  // Classic Simplex 3D Noise by Stefan Gustavson
  vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  vec3 snoiseVec3(vec3 x) {
    float s  = snoise(vec3(x));
    float s1 = snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
    float s2 = snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.1));
    return vec3(s, s1, s2);
  }

  // 3D Curl Noise for fluid vortex dynamics
  vec3 curlNoise(vec3 p) {
    const float e = 0.01;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);

    vec3 p_x0 = snoiseVec3(p - dx);
    vec3 p_x1 = snoiseVec3(p + dx);
    vec3 p_y0 = snoiseVec3(p - dy);
    vec3 p_y1 = snoiseVec3(p + dy);
    vec3 p_z0 = snoiseVec3(p - dz);
    vec3 p_z1 = snoiseVec3(p + dz);

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    return normalize(vec3(x, y, z) / (2.0 * e));
  }

  void main() {
    vec3 pos = texture2D(uCurrentPosition, vUv).xyz;
    vec3 orig = texture2D(uOriginalPosition, vUv).xyz;

    // Fluid Curl Motion
    vec3 curl = curlNoise(pos * uCurlScale + uTime * 0.12);
    pos += curl * 0.008;

    // Mouse Interaction (Liquid displacement & repulsive wave)
    vec3 dirToMouse = pos - uMouse;
    float dist = length(dirToMouse);
    if (dist < uRepelRadius && dist > 0.0001) {
      float force = (1.0 - dist / uRepelRadius) * (0.08 + uMouseSpeed * 0.15);
      vec3 repulsion = normalize(dirToMouse) * force;
      // Add tangential fluid vortex swirl
      vec3 swirl = cross(normalize(dirToMouse), vec3(0.0, 0.0, 1.0)) * force * 0.5;
      pos += repulsion + swirl;
    }

    // Elastic Return Force (Brings particles gracefully back to origin)
    pos += (orig - pos) * uReturnSpeed;

    gl_FragColor = vec4(pos, 1.0);
  }
`;

// 3. Render Vertex Shader (Draws particle points sampled from FBO texture)
const renderVertexShader = `
  uniform sampler2D uPositionTexture;
  uniform float uPointSize;
  uniform float uTime;
  varying vec3 vPosition;
  varying float vSpeed;

  void main() {
    vec3 pos = texture2D(uPositionTexture, position.xy).xyz;
    vPosition = pos;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Attenuation based on distance to camera
    gl_PointSize = uPointSize * (280.0 / -mvPosition.z);
  }
`;

// 4. Render Fragment Shader (Iridescent chromatic point rendering)
const renderFragmentShader = `
  varying vec3 vPosition;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorAccent;

  void main() {
    // Soft circular particle shape
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    // Gaussian glow profile
    float alpha = smoothstep(0.5, 0.05, dist);

    // Iridescent metallic chromatic shift based on 3D spatial velocity & position
    float depthFactor = clamp((vPosition.z + 1.5) * 0.4, 0.0, 1.0);
    vec3 color = mix(uColorA, uColorB, depthFactor);

    // Highlight particle center with electric emerald / cyan glow
    float centerGlow = pow(1.0 - dist * 2.0, 2.5);
    color += uColorAccent * centerGlow * 1.2;

    gl_FragColor = vec4(color, alpha * 0.85);
  }
`;

export interface FluidParticlesProps {
  size?: number; // Texture size: 256 for 65,536 particles, 128 for 16,384 particles
  pointSize?: number;
  repelRadius?: number;
}

export function FluidParticles({
  size = 256,
  pointSize = 1.4,
  repelRadius = 1.4,
}: FluidParticlesProps) {
  const { gl, camera } = useThree();

  // 1. Generate FBO Ping-Pong Render Targets
  const [targetA, targetB] = useMemo(() => {
    const options: THREE.RenderTargetOptions = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      stencilBuffer: false,
      depthBuffer: false,
    };
    return [
      new THREE.WebGLRenderTarget(size, size, options),
      new THREE.WebGLRenderTarget(size, size, options),
    ];
  }, [size]);

  // 2. Generate Initial Particle Coordinates Texture (Torus / Sphere Fluid Geometry)
  const [dataTexture, initialPositions] = useMemo(() => {
    const totalParticles = size * size;
    const data = new Float32Array(totalParticles * 4);
    const uvs = new Float32Array(totalParticles * 3);

    for (let i = 0; i < totalParticles; i++) {
      const i4 = i * 4;
      const i3 = i * 3;

      // Morphing Torus-Knot / Fluid Organic Coordinates
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const radius = 1.5 + (Math.random() - 0.5) * 0.4;
      const tube = 0.6 + (Math.random() - 0.5) * 0.3;

      const x = (radius + tube * Math.cos(v)) * Math.cos(u);
      const y = (radius + tube * Math.cos(v)) * Math.sin(u);
      const z = tube * Math.sin(v) + (Math.random() - 0.5) * 0.2;

      data[i4] = x;
      data[i4 + 1] = y;
      data[i4 + 2] = z;
      data[i4 + 3] = 1.0;

      // UV coordinates to sample the FBO texture
      const col = (i % size) / size;
      const row = Math.floor(i / size) / size;
      uvs[i3] = col;
      uvs[i3 + 1] = row;
      uvs[i3 + 2] = 0;
    }

    const texture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    texture.needsUpdate = true;

    return [texture, uvs];
  }, [size]);

  // 3. FBO Simulation Scene & Camera
  const fboScene = useMemo(() => new THREE.Scene(), []);
  const fboCamera = useMemo(
    () => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
    []
  );

  // 4. Simulation Material (GLSL Physics)
  const simulationMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
      uniforms: {
        uCurrentPosition: { value: dataTexture },
        uOriginalPosition: { value: dataTexture },
        uMouse: { value: new THREE.Vector3(999, 999, 0) },
        uMouseSpeed: { value: 0 },
        uTime: { value: 0 },
        uCurlScale: { value: 0.65 },
        uReturnSpeed: { value: 0.02 },
        uRepelRadius: { value: repelRadius },
      },
    });
  }, [dataTexture, repelRadius]);

  // 5. Geometry for Fullscreen Simulation Quad
  const simQuadGeometry = useMemo(() => new THREE.PlaneGeometry(2, 2), []);

  // 6. Geometry & Material for Particle Cloud
  const particleGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(initialPositions, 3)
    );
    return geo;
  }, [initialPositions]);

  const renderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: renderVertexShader,
      fragmentShader: renderFragmentShader,
      uniforms: {
        uPositionTexture: { value: null },
        uPointSize: { value: pointSize },
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color("#4ade80") },      // Lusion Emerald
        uColorB: { value: new THREE.Color("#22d3ee") },      // Vibrant Cyan
        uColorAccent: { value: new THREE.Color("#ffffff") }, // Core White Glint
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [pointSize]);

  // Mouse & Physics Tracking Refs
  const currentFBO = useRef(targetA);
  const nextFBO = useRef(targetB);
  const mousePlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse3D = useRef(new THREE.Vector3(999, 999, 0));
  const prevMouse3D = useRef(new THREE.Vector3(999, 999, 0));
  const pointsRef = useRef<THREE.Points>(null);

  // Frame Loop (Computes FBO physics and renders particles)
  useFrame((state: any, delta: number) => {
    // 1. Raycast mouse position onto 3D z=0 plane
    raycaster.setFromCamera(state.pointer, camera);
    const intersectPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(mousePlane, intersectPoint);

    if (intersectPoint) {
      const speed = intersectPoint.distanceTo(prevMouse3D.current) / (delta || 0.016);
      mouse3D.current.copy(intersectPoint);
      prevMouse3D.current.copy(intersectPoint);

      simulationMaterial.uniforms.uMouse.value.copy(mouse3D.current);
      simulationMaterial.uniforms.uMouseSpeed.value = Math.min(speed * 0.02, 1.5);
    }

    simulationMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    simulationMaterial.uniforms.uCurrentPosition.value = currentFBO.current.texture;

    // 2. Perform FBO computation step onto render target
    gl.setRenderTarget(nextFBO.current);
    gl.render(fboScene, fboCamera);
    gl.setRenderTarget(null);

    // 3. Feed the computed positions into the render material
    renderMaterial.uniforms.uPositionTexture.value = nextFBO.current.texture;
    renderMaterial.uniforms.uTime.value = state.clock.elapsedTime;

    // 4. Swap ping-pong targets
    const temp = currentFBO.current;
    currentFBO.current = nextFBO.current;
    nextFBO.current = temp;

    // Subtle idle rotation for spatial depth
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <>
      {/* Offscreen FBO Simulation Scene Quad */}
      {createPortal(
        <mesh geometry={simQuadGeometry} material={simulationMaterial} />,
        fboScene
      )}

      {/* Rendered 3D Particle Cloud */}
      <points
        ref={pointsRef}
        geometry={particleGeometry}
        material={renderMaterial}
      />
    </>
  );
}
