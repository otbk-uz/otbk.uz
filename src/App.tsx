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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased selection:bg-blue-200">
      <Navigation />
      <main className="flex-1 w-full relative">
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
  );
}

export default App;
