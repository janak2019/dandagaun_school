export default function Teachers() {
  const teachers = [
    {
      name: "राम शर्मा",
      subject: "गणित",
    },
    {
      name: "सीता केसी",
      subject: "विज्ञान",
    },
    {
      name: "हरि अधिकारी",
      subject: "अंग्रेजी",
    },
    {
      name: "नवीन थापा",
      subject: "कम्प्युटर",
    },
  ];

  return (
    <>
      {/* शिक्षक सेक्शन */}
      <section id="teachers" className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-4xl font-bold text-center mb-16">
            हाम्रा शिक्षकहरू
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <div className="w-28 h-28 rounded-full bg-blue-200 mx-auto flex items-center justify-center text-4xl font-bold text-blue-700">
                  {teacher.name.charAt(0)}
                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {teacher.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {teacher.subject} शिक्षक
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}