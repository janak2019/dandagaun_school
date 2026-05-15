import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent py-6"
          : "bg-slate-500 shadow-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          ABC School
        </h1>

        {/* Nav Links */}
        <div className="flex gap-6 font-medium">
          <a
            href="#home"
            className={`transition-colors duration-300 hover:text-blue-600 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`transition-colors duration-300 hover:text-blue-600 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            About
          </a>

          <a
            href="#notices"
            className={`transition-colors duration-300 hover:text-blue-600 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Notices
          </a>

          <a
            href="#teachers"
            className={`transition-colors duration-300 hover:text-blue-600 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Teachers
          </a>

          <a
            href="#gallery"
            className={`transition-colors duration-300 hover:text-blue-600 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Gallery
          </a>

          <a
            href="#contact"
            className={`transition-colors duration-300 hover:text-blue-600 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}