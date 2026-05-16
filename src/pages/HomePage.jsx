import Navbar from"../components/layout/Navbar"
import Footer from"../components/layout/Footer"
import Hero from"../components/sections/Hero"
import About from"../components/sections/About"
import Notices from"../components/sections/Notices"
import Teachers from"../components/sections/Teachers"
import Gallery from"../components/sections/Gallery"
import Contact from"../components/sections/Contact"
import TopBar from "../components/layout/Topbar"
export default function HomePage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
    <TopBar />
    <Navbar />
  </div>
      <Hero />
      <About />
      <Notices />
      <Teachers />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}