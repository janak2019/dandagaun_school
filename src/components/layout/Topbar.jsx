import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function TopBar() {
  const today = new Date();

  const nepaliDate = today.toLocaleDateString("ne-NP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="bg-blue-900 text-white text-sm px-4 py-2">
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

        {/* DATE (mobile + desktop) */}
        <p className="text-center sm:text-left text-xs sm:text-sm">
          🇳🇵 {nepaliDate}
        </p>

        {/* RIGHT SIDE */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">

          {/* PHONE */}
          <p className="text-xs sm:text-sm">
            📞 ०१-१२३४५६७
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-base sm:text-lg">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 transition"
            >
              <FaTiktok />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}