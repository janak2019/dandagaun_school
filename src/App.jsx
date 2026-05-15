import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Notices from "./components/sections/Notices";
import Teachers from "./components/sections/Teachers";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
    <div className="font-sans">
      <Navbar />
      <Hero /> 
      <About />
      <Notices />
      <Teachers />
      <Gallery />
      <Contact />
      <Footer />
      </div>
    </>
  );
}