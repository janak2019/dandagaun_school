
import React from 'react'

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen bg-blue-50 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-3xl font-bold text-blue-800 leading-tight">
              डाँडागाउँ माध्यमिक विद्यालयमा स्वागत छ
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-8">
              गुणस्तरीय शिक्षा, आधुनिक शिक्षण वातावरण, अनुभवी शिक्षक तथा
              विद्यार्थीहरूको उज्ज्वल भविष्य निर्माणका लागि समर्पित विद्यालय।
            </p>

            <a
  href="#admission"
  className="mt-8 inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg"
>
  भर्ना खुला छ
</a>
          </div>

          {/* RIGHT IMAGE */}
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
