import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import ProjectsSection from './sections/ProjectsSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
