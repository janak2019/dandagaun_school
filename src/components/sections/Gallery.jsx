export default function Gallery() {
const galleryImages = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  ];

  return (
    <>
     {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            फोटो ग्यालरी
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="gallery"
                className="h-72 w-full object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}