export default function Notices() {
  const notices = [
    "२०८३ का लागि भर्ना खुला छ",
    "जेठ २० देखि प्रथम त्रैमासिक परीक्षा सुरु हुने",
    "शुक्रबार अभिभावक भेला हुने",
    "अर्को हप्ता विज्ञान प्रदर्शनी आयोजना हुने",
  ];

  return (
    <>
      {/* सूचना सेक्शन */}
      <section id="notices" className="py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          
          <h2 className="text-4xl font-bold text-center mb-14">
            पछिल्ला सूचनाहरू
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
                  प्रकाशित मिति: २०८३-०२-०१
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}