import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import ProjectsSection from './sections/ProjectsSection';
import SpecialtiesSection from './sections/SpecialtiesSection';
import TechStackSection from './sections/TechStackSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

// Extra visual components
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';
import MatrixRain from './components/MatrixRain';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-neon-blue/30 overflow-x-hidden">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          <GridBackground />
          <div className="fixed inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
             <MatrixRain />
          </div>
          
          <div className="relative z-10">
            <Navigation />
            <main>
              <HeroSection />
              <AboutSection />
              <StatsSection />
              <TechStackSection />
              <SpecialtiesSection />
              <ProjectsSection />
              <GallerySection />
              <ContactSection />
            </main>
            <FooterSection />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
