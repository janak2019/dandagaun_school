import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function TopBar() {
  const today = new Date();

  const nepaliDate = today.toLocaleDateString("ne-NP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LEFT SIDE */}
        <p className="hidden sm:block">
          🇳🇵 {nepaliDate}
        </p>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* PHONE */}
          <p className="hidden md:block">
            📞 ०१-१२३४५६७
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 text-lg">

            {/* FACEBOOK */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaFacebookF />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaYoutube />
            </a>

            {/* TIKTOK */}
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