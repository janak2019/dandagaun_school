import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = `transition-colors duration-300 hover:text-blue-600 ${
    scrolled ? "text-black" : "text-white"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent shadow-lg py-3" : "bg-zinc-600 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* LOGO */}
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="School Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1
              className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              डाँडागाउँ माध्यमिक विद्यालय
            </h1>

            <p
              className={`text-xs md:text-sm ${
                scrolled ? "text-gray-700" : "text-gray-200"
              }`}
            >
              उत्तरगया-२, डाँडागाउँ रसुवा
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className={linkClass}>गृहपृष्ठ</a>
          <a href="#about" className={linkClass}>हाम्रो बारेमा</a>
          <a href="#notices" className={linkClass}>सूचना</a>
          <a href="#teachers" className={linkClass}>शिक्षक</a>
          <a href="#gallery" className={linkClass}>ग्यालरी</a>
          <a href="#contact" className={linkClass}>सम्पर्क</a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
          <a href="#home" onClick={() => setOpen(false)} className="block">गृहपृष्ठ</a>
          <a href="#about" onClick={() => setOpen(false)} className="block">हाम्रो बारेमा</a>
          <a href="#notices" onClick={() => setOpen(false)} className="block">सूचना</a>
          <a href="#teachers" onClick={() => setOpen(false)} className="block">शिक्षक</a>
          <a href="#gallery" onClick={() => setOpen(false)} className="block">ग्यालरी</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">सम्पर्क</a>
        </div>
      )}
    </nav>
  );
}