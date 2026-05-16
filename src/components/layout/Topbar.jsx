import { useEffect, useState } from "react";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function TopBar() {
  const [hidden, setHidden] = useState(false);

  const today = new Date();

  const nepaliDate = today.toLocaleDateString("ne-NP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  // 🔥 auto-hide on scroll up/down
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 100) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-blue-900 text-white text-sm px-4 overflow-hidden transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-2">

        {/* LEFT: DATE + TICKER */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">

          {/* DATE */}
          <p className="text-xs sm:text-sm">
            🇳🇵 {nepaliDate}
          </p>

          {/* 🔥 SCROLLING NOTICE TICKER */}
          <div className="overflow-hidden w-full sm:w-64">
            <div className="animate-marquee whitespace-nowrap text-yellow-300 font-medium">
              📢 भर्ना खुला छ | नयाँ भर्ना सुरु भएको छ | सूचना: परीक्षा नजिकिँदै छ |
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* PHONE (auto hide on mobile) */}
          <p className="hidden md:block text-xs sm:text-sm">
            📞 ०१-१२३४५६७
          </p>

          {/* 🔥 BLINKING ADMISSION TEXT */}
          <span className="hidden sm:inline animate-pulse text-yellow-300 font-bold">
            भर्ना खुला छ
          </span>

          {/* SOCIAL */}
          <div className="flex gap-3 text-base sm:text-lg">

            <FaFacebookF className="hover:text-blue-300 cursor-pointer" />
            <FaYoutube className="hover:text-red-400 cursor-pointer" />
            <FaTiktok className="hover:text-pink-300 cursor-pointer" />

          </div>
        </div>
      </div>

      {/* 🔥 MARQUEE ANIMATION */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 12s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}