import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import GridBackground from './components/GridBackground';
import MatrixRain from './components/MatrixRain';
import SmokeEffect from './components/SmokeEffect';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import TechStackSection from './sections/TechStackSection';
import ProjectsSection from './sections/ProjectsSection';
import GallerySection from './sections/GallerySection';
import SpecialtiesSection from './sections/SpecialtiesSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [loaded]);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {loaded && (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
          <GridBackground />
          <MatrixRain />
          <SmokeEffect />
          <Navigation />

          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <TechStackSection />
            <ProjectsSection />
            <SpecialtiesSection />
            <GallerySection />
            <ContactSection />
            <FooterSection />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
