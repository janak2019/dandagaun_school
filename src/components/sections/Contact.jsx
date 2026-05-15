export default function Contact() {
  return (
    <>
    {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">📍 Address</h3>

                <p className="mt-3 text-gray-600">
                  Kathmandu, Nepal
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">📞 Phone</h3>

                <p className="mt-3 text-gray-600">
                  01-1234567
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">✉️ Email</h3>

                <p className="mt-3 text-gray-600">
                  info@abcschool.edu.np
                </p>
              </div>
            </div>

            <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      </>

  );
}