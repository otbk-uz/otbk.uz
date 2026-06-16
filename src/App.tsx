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
      
      {/* Top News / Hero Banner equivalent */}
      <HeroSection />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area (70%) */}
          <main className="w-full lg:w-[70%] flex flex-col gap-8">
            <ProjectsSection />
            <div className="border-t border-gold/20 pt-8 mt-4">
              <GallerySection />
            </div>
          </main>

          {/* Sidebar Area (30%) */}
          <aside className="w-full lg:w-[30%] flex flex-col gap-8">
            <div className="sticky top-24 flex flex-col gap-8">
              <AboutSection />
              <StatsSection />
              <ContactSection />
            </div>
          </aside>

        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default App;
