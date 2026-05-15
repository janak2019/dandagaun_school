export default function Admission() {
  return (
    <>
      {/* ADMISSION SECTION */}
      <section
        id="admission"
        className="py-24 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-800">
              भर्ना खुला छ
            </h2>

            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-8">
              डाँडागाउँ माध्यमिक विद्यालयमा शैक्षिक सत्र २०८३ का लागि
              नयाँ विद्यार्थी भर्ना खुला गरिएको जानकारी गराइन्छ।
              गुणस्तरीय शिक्षा, अनुशासित वातावरण तथा अनुभवी शिक्षकद्वारा
              शिक्षण प्रदान गरिनेछ।
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                alt="admission"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* RIGHT DETAILS */}
            <div className="space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700">
                  📚 उपलब्ध कक्षाहरू
                </h3>

                <p className="mt-3 text-gray-700 leading-7">
                  कक्षा नर्सरीदेखि कक्षा १२ सम्म
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700">
                  📝 आवश्यक कागजात
                </h3>

                <ul className="mt-3 text-gray-700 leading-8 list-disc pl-6">
                  <li>जन्मदर्ताको प्रतिलिपि</li>
                  <li>अघिल्लो कक्षाको मार्कसिट</li>
                  <li>पासपोर्ट साइज फोटो</li>
                  <li>बसाइँसराइ प्रमाणपत्र (आवश्यक परेमा)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-700">
                  📅 भर्ना अवधि
                </h3>

                <p className="mt-3 text-gray-700 leading-7">
                  २०८३ बैशाख १ गतेदेखि २०८३ जेठ ३० गतेसम्म
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-700">
                  📞 थप जानकारी
                </h3>

                <p className="mt-3 text-gray-700 leading-7">
                  सम्पर्क: ०१-१२३४५६७
                  <br />
                  इमेल: info@abcschool.edu.np
                </p>
              </div>

              {/* BUTTON */}
              <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl text-lg shadow-lg">
                अहिले सम्पर्क गर्नुहोस्
              </button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}