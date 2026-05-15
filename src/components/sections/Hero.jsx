import React from 'react'

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen bg-blue-50 flex items-center "
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 leading-tight">
              Welcome to ABC School
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-8">
              Providing quality education, modern learning environment,
              experienced teachers, and a bright future for students.
            </p>

            <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg">
              Admission Open
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="school"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </>
  )
}

export default Hero