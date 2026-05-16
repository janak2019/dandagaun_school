import { useEffect, useState } from "react";

export default function NepaliDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Nepali months (BS style)
  const bsMonths = [
    "बैशाख",
    "जेठ",
    "असार",
    "साउन",
    "भदौ",
    "असोज",
    "कार्तिक",
    "मंसिर",
    "पुष",
    "माघ",
    "फाल्गुन",
    "चैत",
  ];

  // Simple AD → BS approximation (UI purpose)
  const bsYear = now.getFullYear() + 57;
  const bsMonth = bsMonths[now.getMonth()-3];
  const bsDay = now.getDate()-14;

  // Live time
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <span>🇳🇵</span>

      <span>
        {bsYear} {bsMonth} {bsDay} गते
      </span>

      <span className="hidden sm:inline">|</span>

      <span>⏰ {time}</span>
    </div>
  );
}