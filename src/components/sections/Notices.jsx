export default function Notices() {
  const notices = [
    "Admission Open for 2083",
    "First Terminal Exam starts from Jestha 20",
    "Parents Meeting on Friday",
    "Science Exhibition next week",
  ];

  return (
   <>
    {/* NOTICE SECTION */}
      <section id="notices" className="py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Latest Notices
          </h2>

          <div className="space-y-6">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  📢 {notice}
                </h3>

                <p className="text-gray-500 mt-2">
                  Published on 2026-05-14
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  );
}