export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            सम्पर्क गर्नुहोस्
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* CONTACT INFO */}
            <div className="space-y-6">

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">
                  📍 ठेगाना
                </h3>

                <p className="mt-3 text-gray-600">
                  उत्तरगया-२, डाँडागाउँ, रसुवा
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">
                  📞 फोन नम्बर
                </h3>

                <p className="mt-3 text-gray-600">
                  ०१-१२३४५६७
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">
                  ✉️ इमेल
                </h3>

                <p className="mt-3 text-gray-600">
                  info@abcschool.edu.np
                </p>
              </div>

            </div>

            {/* CONTACT FORM */}
            <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

              <input
                type="text"
                placeholder="तपाईंको नाम"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="तपाईंको इमेल"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="6"
                placeholder="तपाईंको सन्देश"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg w-full">
                सन्देश पठाउनुहोस्
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}