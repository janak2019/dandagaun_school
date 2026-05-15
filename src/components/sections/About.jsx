export default function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            हाम्रो विद्यालय
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="about"
              className="rounded-2xl shadow-xl"
            />

            <div>
              <p className="text-lg leading-8 text-gray-700">
                डाँडागाउँ माध्यमिक विद्यालय विद्यार्थीहरूको शैक्षिक,
                नैतिक तथा समग्र विकासमा समर्पित एक उत्कृष्ट शैक्षिक संस्था हो।
                यहाँ अनुभवी शिक्षकद्वारा आधुनिक तथा व्यवहारिक शिक्षण पद्धतिबाट
                गुणस्तरीय शिक्षा प्रदान गरिन्छ। विद्यालयले अतिरिक्त
                क्रियाकलाप, अनुशासन तथा विद्यार्थीमैत्री वातावरणलाई विशेष
                प्राथमिकता दिएको छ।
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                
                <div className="bg-blue-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-blue-700">
                    ५००+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    विद्यार्थी
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-green-700">
                    ३०+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    शिक्षक
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-yellow-700">
                    १५+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    वर्षको अनुभव
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-purple-700">
                    १००%
                  </h3>

                  <p className="mt-2 text-gray-600">
                    नतिजा
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}