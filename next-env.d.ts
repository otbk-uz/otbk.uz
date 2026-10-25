/// <reference types="node" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface Element {
    [key: string]: any;
  }
}

declare module "react";
declare module "react/jsx-runtime";
declare module "react-dom";
declare module "react-dom/client";
declare module "three";
declare module "@react-three/fiber";
declare module "@react-three/postprocessing";
declare module "postprocessing";
declare module "framer-motion";
declare module "lenis";
declare module "lucide-react";
