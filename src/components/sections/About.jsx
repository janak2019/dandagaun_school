export default function About() {
  return (
    <>
    {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            About Our School
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="about"
              className="rounded-2xl shadow-xl"
            />

            <div>
              <p className="text-lg leading-8 text-gray-700">
                ABC School is dedicated to academic excellence and holistic
                development of students. We provide modern education with
                practical learning, extracurricular activities, and experienced
                teachers.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-blue-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-blue-700">500+</h3>

                  <p className="mt-2 text-gray-600">Students</p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-green-700">30+</h3>

                  <p className="mt-2 text-gray-600">Teachers</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-yellow-700">15+</h3>

                  <p className="mt-2 text-gray-600">Years Experience</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-purple-700">100%</h3>

                  <p className="mt-2 text-gray-600">Result</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}