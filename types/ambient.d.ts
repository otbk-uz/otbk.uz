declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element {
      [key: string]: any;
    }
  }
}

declare module "react" {
  export = React;
  export as namespace React;

  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
      interface Element {
        [key: string]: any;
      }
    }

    type ReactNode = any;
    type ReactElement<P = any, T = any> = any;
    type ComponentType<P = any> = any;
    type FC<P = {}> = (props: P) => any;
    type Context<T> = {
      Provider: FC<{ value: T; children?: any }>;
      Consumer: FC<{ children: (value: T) => any }>;
    };

    function createElement(type: any, props?: any, ...children: any[]): any;
    function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prev: T) => T)) => void];
    function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    function useRef<T = any>(initialValue?: T): { current: T };
    function useMemo<T>(factory: () => T, deps?: any[]): T;
    function useCallback<T extends (...args: any[]) => any>(callback: T, deps?: any[]): T;
    function useContext<T>(context: Context<T>): T;
    function createContext<T>(defaultValue: T): Context<T>;

    const Suspense: FC<{ fallback?: any; children?: any }>;
    const Fragment: FC<{ children?: any }>;
  }
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module "three" {
  const THREE: any;
  export = THREE;
}

declare module "@react-three/fiber" {
  export const Canvas: any;
  export const useFrame: (callback: (state: any, delta: number) => void, renderPriority?: number) => void;
  export const useThree: (selector?: (state: any) => any) => any;
  export const createPortal: any;
  export const extend: any;
}

declare module "@react-three/postprocessing" {
  export const EffectComposer: any;
  export const Bloom: any;
  export const ChromaticAberration: any;
  export const Noise: any;
  export const Vignette: any;
}

declare module "postprocessing" {
  export const BlendFunction: any;
}

declare module "framer-motion" {
  export const motion: any;
  export const AnimatePresence: any;
  export const useMotionValue: (initial: any) => any;
  export const useSpring: (source: any, config?: any) => any;
  export const useScroll: (options?: any) => any;
  export const useTransform: (value: any, from: any[], to: any[]) => any;
}

declare module "lenis" {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    on(event: string, callback: (...args: any[]) => void): void;
    destroy(): void;
  }
}

declare module "lucide-react" {
  export const ArrowUpRight: any;
  export const Code2: any;
  export const Cpu: any;
  export const Globe: any;
  export const Layers: any;
  export const Sparkles: any;
  export const Terminal: any;
  export const [key: string]: any;
}

export {};
