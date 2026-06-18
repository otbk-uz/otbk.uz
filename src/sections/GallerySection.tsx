import { portfolioData } from '../data/portfolioData';

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-white py-12 md:py-20 border-b border-gray-200">
      <div className="container-narrow px-4">
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Fotogalereya
          </h2>
          <p className="text-gray-600 mt-2 text-lg font-serif">
            Kadrlar ortidagi jarayonlar va ish muhiti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioData.gallery.map((photo, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm text-white font-bold mb-1">
                  {photo.title}
                </p>
                <p className="text-xs text-gray-200 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
